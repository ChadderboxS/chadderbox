"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { submitContactForm } from "@/app/actions/contact"

export function ContactForm() {
  const { toast } = useToast()
  const [isPending, setIsPending] = useState(false)

  // This is our honeypot field
  const [honeypot, setHoneypot] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    setIsPending(true)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        let description = "Thank you for your message. I'll get back to you soon."

        if (result.preview) {
          description = "This is a preview environment. In production, your message would be sent via Postmark."
        }

        toast({
          title: "Message received!",
          description: description,
        })
        form.reset()
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send message. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <Input id="name" name="name" placeholder="Your name" required />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <Input id="email" name="email" type="email" placeholder="Your email" required />
      </div>

      {/* Honeypot field - hidden from humans but bots will fill it */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website (leave this empty)</label>
        <Input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <Input id="subject" name="subject" placeholder="Subject of your message" required />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <Textarea id="message" name="message" placeholder="Your message" rows={6} required />
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
