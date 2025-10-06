import React, { useState } from 'react'

const faqs = [
  {
    question: 'How do I update my billing information?',
    answer:
      'You can update your billing details from your account settings. Go to Billing, click Edit next to your payment method, and save your changes.',
  },
  {
    question: 'How do I buy my plot?',
    answer:
      'Browse available plots in the Listings section, select a plot, and click Buy Now. Follow the guided checkout to complete your purchase securely.',
  },
  {
    question: 'How do I register myself?',
    answer:
      'Click Register on the top right, fill in your details, verify your email, and log in to start using your account.',
  },
  {
    question: 'Is there customer support if I need help?',
    answer:
      'Yes. Our support team is available 24/7 via chat and email. Visit the Contact section to reach us anytime.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section className="py-24 px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="relative">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Trusted by customers in 100+ countries. Find quick answers below.
          </p>
          <div className="relative mt-8">
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="absolute top-4 left-6 w-3 h-3 bg-orange-500" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
            <div className="absolute -bottom-2 left-12 w-3 h-3 bg-orange-500">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-orange-500 transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-500 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
        <div>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            const contentId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`
            return (
              <div key={item.question} className="border-b border-gray-200 py-4">
                <button
                  id={buttonId}
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
                >
                  <span className="text-base lg:text-lg font-semibold text-blue-900 pr-4">
                    {item.question}
                  </span>
                  <span
                    className={`ml-4 text-orange-500 transform transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                  >
                    {/* Chevron icon */}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.4a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
                    </svg>
                  </span>
                </button>
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid overflow-hidden transition-all duration-200 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0">
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
