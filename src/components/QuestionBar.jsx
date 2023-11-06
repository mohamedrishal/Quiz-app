import React, { useEffect, useState } from "react";
import "./QuestionBar.css";

function QuestionBar({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
  setScore,
  setClick,
  handlclickToast
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState(
    "animation p-3 text-center borderborder-primary fs-4 fw-bolder  rounded-2 shadow"
  );


  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  console.log(data);

  const handleClick = (a) => {
    handlclickToast()
    setClick(true)
    setSelectedAnswer(a);
    setClassName(
      "animation active p-3 text-center borderborder-primary fs-4 fw-bolder  rounded-2 shadow "
    );

    delay(2000, () =>
      setClassName(
        a.correct
          ? "animation  correct p-3 text-center borderborder-primary fs-4 fw-bolder  rounded-2 shadow"
          : "animation  wrong p-3 text-center borderborder-primary fs-4 fw-bolder  rounded-2 shadow "
      )
    );

    delay(5000, () => {
      if (a.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
        setScore((prev) => prev + 1);
      } else {
        setQuestionNumber((prev) => prev + 1);

        // setStop(true)
      }
    });
  };

  return (
    <div className="conatiner h-100 d-flex flex-column align-items-center justify-content-center">
      <div className="w-75 qbar  shadow  border border-primary text-center fs-4 fw-bolder p-4">
        {question?.question}
      </div>
      <div className="w-100 d-flex justify-content-center flex-wrap m-5">
        {question?.answers?.map((a, index) => (
          <div
            key={index}
            style={{ margin: "0px 10px 20px 10px", width: "38rem" }}
            className={
              selectedAnswer === a
                ? className
                : "animation  shadow  p-3  text-center border border-primary fs-4 fw-bolder rounded-2"
            }
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>  
  );
}

export default QuestionBar;
