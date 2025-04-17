"use client"

export function LetterToNextTeam() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">Inside the System: How I Build, Lead, and Grow</h1>
      <p className="italic text-lg mb-8">From Chad Stilwell, People-First Product & Technology Leader</p>
      <hr className="border-t border-gray-300 mb-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">👋 INTRO</h2>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic space-y-4">
          <p>Hi, I’m Chad.</p>
          <p>I’m not going to list bullet points about KPIs, revenue growth, or how many teams I’ve scaled (I can do that elsewhere).</p>
          <p>This is about something different — something more real. It’s about leadership. What it looks like. What it <em>feels</em> like.</p>
          <p>So instead of telling you who I am as a leader, I’ll let the people I’ve worked with do it for me.</p>
        </blockquote>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🧭 People First. Always.</h2>
        <Quote text="Your kindness, grace, and humility encouraged us all to do and show the same. I never felt scared to be myself at AGORA because of you. Should I ever rise into a leadership role, I aspire to be a leader like you." author="Dallas Scott, Sr. Full Stack Developer" />
        <Quote text="It’s the honest truth sir. You were the reason I stayed on through the interview process and took the position. FRANKLY, I worked for Chad, not Agora — and I will follow you to your next place." author="Trevor Gale, Engineering Manager" />
        <Quote text="You encourage me to be myself, and you've been an example of who I want to be. You love your wife, your son, and you kick ass as our leader. You wear the fun clothes and shoes without giving a fuck — and gave me the courage to do the same." author="Michael Simpson, VP of Information Technology" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📈 Growth Is the Job</h2>
        <Quote text="You took a chance on me and gave me the tools and space to grow. I will always be grateful." author="Dallas Scott, Sr. Full Stack Developer" />
        <Quote text="You continually enabled my success and made the employees matter just as much as the business." author="Brandon Mogg, Director of Data Integrity" />
        <Quote text="I’ve had mentors who made me a better tech professional — but you helped me become a better man." author="Michael Simpson, VP of Information Technology" />
        <Quote text="I’m so grateful for the chance you took on me. I’ve learned so much from you in this short time. I’d work with you any day." author="Lauren Chapman, Product Manager" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🏗️ Culture Is the Product</h2>
        <Quote text="The culture you built is unprecedented compared to my many stops over the years. You made this a place people actually wanted to work — and I’d work for you again in a heartbeat." author="Chris Sachnik, Data Architect" />
        <Quote text="It was the most fun I’ve ever had and an awesome thing to be a part of — from the people to the projects." author="Daniel Schaefer, Tech Lead" />
        <Quote text="You were the reason I took the job in the first place. Your interview sold me. And yeah... I’ll ride those sweet, sweet coattails if you’ll have me." author="Ryan Mendenhall, Sr. Designer & Certified Cybersecurity Pro" />
        <Quote text="I’m thankful every damn day that I stumbled into the privilege of working with this team you built." author="Michael Simpson, VP of Information Technology" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🧠 WHAT I BELIEVE</h2>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic space-y-4">
          <p>I believe people do their best work when they’re challenged and cared for.</p>
          <p>I believe in building tight-knit teams that get shit done, take care of each other, and have fun doing it.</p>
          <p>I believe culture <em>isn’t</em> a perk — it’s the product. And when it’s done right, outcomes follow.</p>
        </blockquote>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🔍 WHAT I’M LOOKING FOR</h2>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic space-y-4">
          <p>I’m looking for the next place where I can build.</p>
          <p>A place that values humans over hierarchy, speed over perfection, and impact over ego.</p>
          <p>If that’s the kind of team you’re building — let’s talk.</p>
        </blockquote>
      </section>
    </div>
  );
}

function Quote({ text, author }) {
  return (
    <div className="mb-6">
      <p className="italic mb-1">"{text}"</p>
      <p className="font-semibold">— {author}</p>
    </div>
  );
}
