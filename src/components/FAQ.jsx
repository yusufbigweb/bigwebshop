import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What fabric are your t-shirts made of?",
    answer:
      "Our t-shirts are made from premium quality cotton that is soft, breathable, and durable.",
  },
  {
    id: 2,
    question: "How long does delivery take?",
    answer:
      "Orders are usually delivered within 3–7 working days depending on your location.",
  },
  {
    id: 3,
    question: "Do you offer cash on delivery?",
    answer:
      "Yes, we offer Cash on Delivery (COD) on most products across India.",
  },
  {
    id: 4,
    question: "What is your return policy?",
    answer:
      "We offer easy returns within 7 days of delivery for unused and unworn products.",
  },
  {
    id: 5,
    question: "How can I contact customer support?",
    answer:
      "You can contact our support team via email or WhatsApp. We usually respond within 24 hours.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-8">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border rounded-lg overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-sm md:text-base font-medium"
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-5 pb-4 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
