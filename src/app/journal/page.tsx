"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, X } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Where can I watch?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sula crasport titore ismod nulla.",
  },
  {
    id: 2,
    question: "Where can I watch?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    question: "Where can I watch?",
    answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
]

export default function JournalPage() {
  const [active, setActive] = useState<number | null>(1)

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-15 px-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden">

        {faqs.map((item, index) => {
          const isOpen = active === item.id

          return (
            <motion.div
              key={item.id}
              layout
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="border-b last:border-none"
            >
              <button
                onClick={() =>
                  setActive(isOpen ? null : item.id)
                }
                className="w-full flex items-center justify-between px-8 py-8 text-left"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-bold text-gray-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-lg font-semibold">
                    {item.question}
                  </span>
                </div>

                <div
                  className={`w-9 h-9 flex items-center justify-center rounded-full transition ${
                    isOpen
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {isOpen ? <X size={16} /> : <Plus size={16} />}
                </div>
              </button>

              {isOpen && (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="px-20 pb-8 text-gray-600"
                >
                  {item.answer}
                </motion.div>
              )}
            </motion.div>
          )
        })}

      </div>
    </section>
  )
}
