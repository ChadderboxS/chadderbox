"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, Linkedin, Globe, Github } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ProtectProps {
override?: boolean;
}

const iconClassName = "icon h-5 w-5"
const containerClassName = "inline-flex items-center gap-x-2"

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
    <div className={containerClassName}>
      <Mail className={iconClassName} />
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
    <div className={containerClassName}>
      <Phone className={iconClassName} />
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
    <div className={containerClassName}>
      <Linkedin className={iconClassName} />
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

// GitHub component (not obfuscated since it's public anyway)
interface GitHubLinkProps {
  href?: string
}

export function GitHubLink({ href = "https://github.com/ChadderboxS" }: GitHubLinkProps) {
  return (
    <div className={containerClassName}>
      <Github className={iconClassName} />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {href.replace(/^https?:\/\//, "")}
      </a>
    </div>
  )
}


// Personal Site component (not obfuscated since it's public anyway)
export function PersonalLink() {
  return (
    <div className={containerClassName}>
      <Globe className={iconClassName} />
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
