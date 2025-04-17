"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, Linkedin, Globe } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ProtectProps {
override?: boolian;
}

// Email protection component
export function ProtectedEmail({ override = false }: ProtectProps) {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [showEmail, setShowEmail] = useState(() => override)

  //if (override) {() => setShowEmail(true)}

  useEffect(() => {
    // Assemble the email only on the client side
    const parts = ["chad", "@", "chadder", ".", "box"]
    setEmail(parts.join(""))
  }, [])

  const handleClick = () => {
    setShowEmail(true)
    // Copy to clipboard when clicked
    navigator.clipboard
      .writeText(email)
      .then(() => {
        console.log("Email copied to clipboard")
        toast({
          title: "Email Copied!",
          description: "...to your clipboard. There are so many Chads in chad@chadder.box, it’s basically a group chat with himself.",
        })
      })
      .catch((err) => {
        console.error("Could not copy email: ", err)
        toast({
          title: "Error",
          description: `Something went wrong. Please try again later. ${err}`,
          variant: "destructive"
        })
      })
  }

  return (
    <div className="flex items-center space-x-2">
      <Mail className="h-4 w-4 flex-shrink-0" />
      <button
        onClick={handleClick}
        className="text-base hover:underline focus:outline-none"
        aria-label="Show and copy email address"
      >
        {showEmail ? <span>{email}</span> : <span>Click to reveal email</span>}
      </button>
    </div>
  )
}

// Phone protection component
export function ProtectedPhone({ override = false }: ProtectProps) {
  const { toast } = useToast()
  const [phone, setPhone] = useState("")
  const [showPhone, setShowPhone] = useState(() => override)

  useEffect(() => {
    // Assemble the phone only on the client side
    const parts = ["817", "964", "7397"]
    setPhone(parts.join("-"))
  }, [])

  const handleClick = () => {
    setShowPhone(true)
    // Copy to clipboard when clicked
    navigator.clipboard
      .writeText(phone.replace(/-/g, ""))
      .then(() => {
        console.log("Phone copied to clipboard")
        toast({
          title: "E.T. Phone Home",
          description: "...and copied to clipboard",
        })
      })
      .catch((err) => {
        console.error("Could not copy phone: ", err)
        toast({
          title: "Error",
          description: `Something went wrong. Please try again later. ${err}`,
          variant: "destructive"
        })
      })
  }

  return (
    <div className="flex items-center">
      <Phone className="h-4 w-4 mr-2" />
      <button
        onClick={handleClick}
        className="text-left hover:underline focus:outline-none"
        aria-label="Show and copy phone number"
      >
        {showPhone ? <span>{phone}</span> : <span>Click to reveal phone number</span>}
      </button>
    </div>
  )
}

// LinkedIn component (not obfuscated since it's public anyway)
export function LinkedInLink() {
  return (
    <div className="flex items-center">
      <Linkedin className="h-4 w-4 mr-2" />
      <a
        href="https://linkedin.com/in/chad-stilwell"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        linkedin.com/in/chad-stilwell
      </a>
    </div>
  )
}

// Personal Site component (not obfuscated since it's public anyway)
export function PersonalLink() {
  return (
    <div className="flex items-center">
      <Globe className="h-4 w-4 mr-2" />
      <a
        href="https://www.chadstilwell.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        chadstilwell.com
      </a>
    </div>
  )
}
