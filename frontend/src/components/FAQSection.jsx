import React, { useState } from 'react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleToggle = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const questions = [
    {
      id: 'question1',
      question: 'How can I get started?',
      answer: 'Getting started is easy! Sign up for an account, and you\'ll have access to our platform\'s features. No credit card required for the initial signup.',
    },
    {
      id: 'question2',
      question: 'What is the pricing structure?',
      answer: 'Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.',
    },
    {
      id: 'question3',
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.',
    },
    {
      id: 'question4',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.',
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Explore Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {questions.map(({ id, question, answer }) => (
            <div
            key={id}
            className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 rounded-xl"
          >
              <button
                type="button"
                onClick={() => handleToggle(id)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">{question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transform ${openQuestion === id ? 'rotate-180' : '-rotate-0'}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className="px-4 pb-5 sm:px-6 sm:pb-6"
                style={{ display: openQuestion === id ? 'block' : 'none' }}
              >
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
            Contact our support
          </span>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
