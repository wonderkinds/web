import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/quote-requests", async (req, res) => {
    try {
      const data = insertQuoteRequestSchema.parse(req.body);
      const result = await storage.createQuoteRequest(data);
      res.status(201).json(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Validation error", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to submit quote request" });
      }
    }
  });

  app.get("/api/company-profile", (_req, res) => {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=Ventech-Enterprises-Profile.pdf");

    const pdfContent = generateCompanyProfilePDF();
    res.send(pdfContent);
  });

  return httpServer;
}

function generateCompanyProfilePDF(): Buffer {
  const content = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]
/Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 440 >>
stream
BT
/F1 24 Tf
100 700 Td
(VENTECH ENTERPRISES) Tj
/F1 14 Tf
0 -40 Td
(Powering Green Energy. Connecting Industries.) Tj
/F1 12 Tf
0 -40 Td
(Company Profile) Tj
0 -30 Td
(Pune, Maharashtra, India) Tj
0 -40 Td
(Products & Services:) Tj
0 -20 Td
(- Solar DC Cables \\(EN 50618 / IEC 62930\\)) Tj
0 -20 Td
(- Wind Energy Cables) Tj
0 -20 Td
(- EV & Automotive Cables) Tj
0 -20 Td
(- Industrial Connectors) Tj
0 -20 Td
(- Industrial Safety & PPE) Tj
0 -20 Td
(- Industrial Packaging & Manpower Support) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000758 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
835
%%EOF`;

  return Buffer.from(content, "utf-8");
}
