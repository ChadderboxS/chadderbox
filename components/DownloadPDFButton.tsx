"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface DownloadPDFButtonProps {
  contentId: string
  buttonText: string
  filename: string
}

export function DownloadPDFButton({ contentId, buttonText, filename }: DownloadPDFButtonProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const generatePDF = async () => {
    if (typeof window === "undefined") return

    try {
      // Dynamically import html2pdf only on client side
      const html2pdf = (await import("html2pdf.js")).default

      // Get the element to convert
      const element = document.getElementById(contentId)
      if (!element) {
        console.error(`Element with ID "${contentId}" not found`)
        return
      }

      // Add PDF mode class for styling
      element.classList.add("pdf-mode")

      // Configure options
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: filename,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      }

      // Generate PDF
      await html2pdf().set(opt).from(element).save()

      // Remove PDF mode class
      element.classList.remove("pdf-mode")
    } catch (error) {
      console.error("Error generating PDF:", error)
    }
  }

  if (!isClient) {
    return (
      <Button disabled>
        <Download className="mr-2 h-4 w-4" />
        {buttonText}
      </Button>
    )
  }

  return (
    <Button onClick={generatePDF}>
      <Download className="mr-2 h-4 w-4" />
      {buttonText}
    </Button>
  )
}
