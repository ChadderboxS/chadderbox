"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function PDFGenerator({ contentId }: { contentId: string }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const generatePDF = async () => {
    // Dynamically import html2pdf.js only on the client side
    const html2pdf = (await import("html2pdf.js")).default

    const element = document.getElementById(contentId)
    if (!element) return

    const opt = {
      margin: 0.5,
      filename: "chad-stilwell-resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }

    try {
      await html2pdf().set(opt).from(element).save()
    } catch (error) {
      console.error("Error generating PDF:", error)
    }
  }

  if (!isClient) {
    return (
      <Button disabled>
        <Download className="mr-2 h-4 w-4" />
        Download Resume (PDF)
      </Button>
    )
  }

  return (
    <Button onClick={generatePDF}>
      <Download className="mr-2 h-4 w-4" />
      Download Resume (PDF)
    </Button>
  )
}
