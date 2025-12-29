"use client"

import React, { useState } from "react"

export default function FaqsAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="group border rounded-2xl overflow-hidden">
            <button
              onClick={() => toggle(i)}
              className="w-full text-left flex items-center justify-between gap-4 p-5 bg-white hover:bg-gray-50"
              aria-expanded={openIndex === i}
            >
              <span className="font-medium text-gray-800">{f.q}</span>
              <span className={`text-primary transform transition-transform ${openIndex === i ? "rotate-45" : "rotate-0"}`}>
                +
              </span>
            </button>

            <div
              className={`px-5 pb-6 transition-all duration-200 bg-white ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              style={{ overflow: "hidden" }}
            >
              <p className="text-gray-600 mt-3">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
