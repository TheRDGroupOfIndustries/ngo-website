import React, { useState } from 'react';

const FAQsFactsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "Who was Mahapandit Rahul Sankrityayan?",
      answer: "He was a scholar, historian, philosopher, and the father of Hindi travel literature, known for his vast knowledge and writings across languages and disciplines."
    },
    {
      id: 2,
      question: "What does the center do?",
      answer: "The center focuses on research, education, and cultural preservation activities related to Mahapandit Rahul Sankrityayan's work and philosophy."
    },
    {
      id: 3,
      question: "How can I get involved?",
      answer: "You can participate in our seminars, workshops, research programs, or volunteer for various cultural and educational activities."
    },
    {
      id: 4,
      question: "Is the center open to students and researchers?",
      answer: "Yes, the center welcomes students, researchers, and scholars who are interested in literature, history, philosophy, and cultural studies."
    },
    {
      id: 5,
      question: "How is the organization funded?",
      answer: "The organization operates through donations, grants, government support, and fundraising activities to maintain its research and cultural programs."
    }
  ];

  const facts = [
    {
      label: "Established:",
      value: "2002"
    },
    {
      label: "Focus Areas:",
      value: "Literature, History, Philosophy, Education, Women Empowerment, Rural Development."
    },
    {
      label: "Key Activities:",
      value: "National seminars, cultural events, educational workshops"
    },
    {
      label: "Leadership:",
      value: "Dr. Sangeeta Srivastava (Secretary), Prithvipal Panday (Chairman)"
    },
    {
      label: "Location:",
      value: "K-57/125, Navapura, Varanasi, Uttar Pradesh"
    },
    {
      label: "Registered NGO:",
      value: "Under Societies Registration Act, 1860 (Reg. No. 2267/2012-13)"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ's Section */}
          <div>
            <div className="mb-8">
              <h2 className="font-inter font-bold text-[70px] leading-[100%] tracking-[-0.06em]">
                FAQ's 
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left py-4 flex items-center justify-between hover:text-orange-400 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <span className="text-orange-400 font-bold text-lg mr-3">
                        {faq.id}
                      </span>
                      <span className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-200 ${
                          activeIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  
                  {activeIndex === index && (
                    <div className="pb-4 pl-8">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Facts Section */}
          <div>
            <div className="mb-8">
              <h2 className="font-inter font-bold text-[70px] leading-[100%] tracking-[-0.06em] text-right">
                FACTS
              </h2>
            </div>
            
            <div className="space-y-6">
              {facts.map((fact, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {fact.label}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsFactsSection;