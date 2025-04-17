"use server"

import { z } from "zod"
import * as postmark from "postmark"

// Form validation schema
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().optional(), // Honeypot field
})

export async function submitContactForm(formData: FormData) {
  try {
    // Extract data from form
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      website: formData.get("website") as string,
    }

    // Validate form data
    const result = ContactFormSchema.safeParse(data)
    if (!result.success) {
      return { success: false, error: "Invalid form data" }
    }

    // Check honeypot field
    if (data.website) {
      // This is likely a bot, silently pretend it worked
      console.log("Bot submission detected and ignored")
      return { success: true }
    }

    // Check if we're in a preview environment
    const isPreview =
      process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development" || !process.env.POSTMARK_API_TOKEN

    if (isPreview) {
      // Log the form data in preview/development
      console.log("Form submission in preview/development:", {
        from: process.env.CONTACT_FROM_EMAIL || "preview@example.com",
        to: process.env.CONTACT_TO_EMAIL || "preview@example.com",
        subject: `Website Contact: ${data.subject}`,
        name: data.name,
        email: data.email,
        message: data.message,
      })

      // Simulate success in preview/development
      return { success: true, preview: true }
    }

    // Initialize Postmark client for production
    const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN || "")

    // Send email using Postmark
    const response = await client.sendEmail({
      From: process.env.CONTACT_FROM_EMAIL || "contact@yourdomain.com",
      To: process.env.CONTACT_TO_EMAIL || "your-email@example.com",
      Subject: `Website Contact: ${data.subject}`,
      TextBody: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
      `,
      HtmlBody: `
<strong>Name:</strong> ${data.name}<br>
<strong>Email:</strong> ${data.email}<br>
<br>
<strong>Message:</strong><br>
${data.message.replace(/\n/g, "<br>")}
      `,
      MessageStream: "outbound",
    })

    console.log("Email sent successfully to:", process.env.CONTACT_TO_EMAIL)
    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    }
  }
}
