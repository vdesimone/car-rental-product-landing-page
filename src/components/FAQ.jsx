import { useState } from "react";
import Footer from "./Footer";

function FAQ() {

  const questions = [
    {id: 1, q: "Do you require auto insurance to rent a vehicle?", a: "Yes, renters must have valid auto insurance that covers rental vehicles. If you don't have personal auto insurance, you may purchase rental insurance through us."},
    {id: 2, q: "What are your hours of operation?", a: "Our hours of operation are Monday to Friday from 9 AM to 6 PM, and Saturday to Sunday from 10 AM to 4 PM."},
    {id: 3, q: "Do you offer delivery?", a: "Yes, we offer delivery services within a certain radius. Delivery fees may apply based on the distance."},
    {id: 4, q: "What types of vehicles do you offer?", a: "We offer a wide variety of vehicles including sedans and SUVs. Please check our website for the full inventory."},
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <>
      <div id="faq" className="full-screen-section faq-section">
        <div className="faq-content">
          <h2>Frequently Asked Questions</h2>
          <div className="questions">
            {questions.map((question, index) => {
              const isLastQuestion = index === questions.length - 1;
              const isActive = activeQuestion === question.id;

              return (
                <div key={question.id} className="question">
                  <div onClick={() => toggleAnswer(question.id)} className="question-header">
                    <h3>{question.q}</h3>
                    <span>
                      <i className={`ri-${isActive ? 'indeterminate-circle-fill' : 'add-circle-fill'}`}></i>
                    </span>
                  </div>
                  <div className={`answer ${isActive ? "show" : ""}`}>
                    <p>{question.a}</p>
                  </div>
                  {!isLastQuestion && <hr className="solid" />}
                </div>
              );
            })}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default FAQ;