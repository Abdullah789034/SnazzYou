import React, { useState } from "react";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (tabIndex) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };

  return (
    <div className="flex flex-col items-center py-8" id="faq">
      <div className="max-w-4xl w-full px-4">
        <div className="mb-6 text-center">
          <h2
            className="md:text-4xl text-xl font-extrabold font-['Montserrat']"
            style={{ color: "#262F37" }}
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
        <div className="accordion">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <div
                className={`flex items-center p-4 gap-5 cursor-pointer transition ease-in duration-300 ${
                  activeTab === index + 1 ? "bg-gray-200" : "bg-white"
                }`}
                style={{
                  backgroundColor:
                    activeTab === index + 1 ? "#262F37" : "#262F37",
                }}
                onClick={() => toggleTab(index + 1)}
                role="button"
                aria-expanded={activeTab === index + 1}
              >
                <span className="text-lg" style={{ color: "#FAEC6A" }}>
                  {activeTab === index + 1 ? (
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                        fill="#FAEC6A"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                        fill="#FAEC6A"
                      />
                    </svg>
                  )}
                </span>
                <span className="text-2xl font-semibold font-['Montserrat'] text-white">
                  {item.question.toUpperCase()}
                </span>
              </div>
              <div
                className={`p-4 ${
                  activeTab === index + 1 ? "block" : "hidden"
                }`}
                style={{ backgroundColor: "white", transition: "ease-in 0.3s" }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What is Capital Club?",
    answer:
      "Capital Club is a leading investment firm specializing in cryptocurrency investments. We offer tailored investment solutions to help clients navigate the dynamic world of digital assets and achieve their financial goals through strategic portfolio management and expert guidance.",
  },
  {
    question: "How does Capital Club work?",
    answer:
      "At Capital Club, we leverage our expertise and deep understanding of the cryptocurrency market to construct diversified investment portfolios. Clients can choose from a range of cryptocurrency investment options based on their risk tolerance, financial objectives, and time horizon. Our experienced team actively manages these portfolios to maximize returns while mitigating risk.",
  },
  {
    question:
      "What types of cryptocurrency investments does Capital Club offer?",
    answer:
      "We offer a variety of cryptocurrency investment options, including direct investments in popular cryptocurrencies such as Bitcoin (BTC), Ethereum (ETH), and other altcoins. Additionally, we provide access to investment vehicles such as cryptocurrency funds, index funds, and managed accounts, allowing clients to participate in the broader cryptocurrency market.",
  },
  {
    question: "How can I invest with Capital Club?",
    answer:
      "Investing with Capital Club is straightforward. You can get started by contacting our team to discuss your cryptocurrency investment goals and preferences. Once we have a clear understanding of your objectives, we'll work with you to customize an investment strategy that aligns with your needs. From there, you can open an account and fund it according to the chosen investment strategy.",
  },
  {
    question:
      "What are the fees associated with investing in cryptocurrency with Capital Club?",
    answer:
      "At Capital Club, we are aligned with our clients' interests in maximizing profits. We operate on a performance-based fee structure, where fees are deducted from the profits generated through our investment strategies. This means that we only charge fees when our clients see positive returns on their investments. Our fee structure is transparent and designed to incentivize both our clients and our firm to achieve the best possible outcomes. By aligning our interests with yours, we are committed to delivering value and ensuring that our success is directly tied to yours.",
  },
  {
    question:
      "How does Capital Club ensure security with Web3 while clients keep assets in their wallets?",
    answer:
      "Utilizing Web3 technology, clients maintain full control of their assets by connecting their wallets securely to our platform. Through this connection, clients can access our investment services without transferring funds. Our decentralized approach prioritizes client autonomy and security, empowering them to execute preferred investment strategies directly from their wallets.",
  },
  {
    question:
      "Can I track the performance of my cryptocurrency investments with Capital Club?",
    answer:
      "Once clients connect their wallets to our website's Web3 platform, they gain access to a transparent and real-time dashboard reflecting their investments. This dashboard provides continuous updates, ensuring clients are informed about their investment performance at all times. Our commitment to transparency means clients have full visibility into their portfolio's progress, empowering them with the information needed to make informed decisions.",
  },
];

export default FAQ;
