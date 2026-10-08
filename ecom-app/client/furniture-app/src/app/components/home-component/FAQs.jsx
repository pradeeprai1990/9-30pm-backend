"use client"
import React, { useState } from "react";

export default function FAQs() {
  const [active, setActive] = useState(null);

  const faqData = [
    {
      question: "Aenean elit orci, efficitur quis nisl at, accumsan?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      question: "Morbi gravida, nisi id fringilla ultricies, elit lorem ipsum?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      question: "Aenean elit orci, efficitur quis nisl at, accumsan?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      question: "Morbi gravida, nisi id fringilla ultricies, elit lorem ipsum?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      question: "Aenean elit orci, efficitur quis nisl at, accumsan?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
    {
      question: "Morbi gravida, nisi id fringilla ultricies, elit lorem ipsum?",
      answer:
        "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
    },
  ];

  return (
    <div className="max-w-[1140px] mx-auto py-10 px-2">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="mb-4 overflow-hidden"
        >
          <button
            onClick={() =>
              setActive(active === index ? null : index)
            }
            className="w-full flex justify-between items-center p-4 bg-gray-100 text-gray-900 font-bold font-playfair text-sm rounded"
          >
            {item.question}

            <span>
              {active === index ? "-" : "+"}
            </span>
          </button>

          {active === index && (
            <div className="p-4 bg-white text-gray-600 border-1 border-orange-dim">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}