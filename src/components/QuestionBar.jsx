import React, { useEffect, useState } from "react";
import "./QuestionBar.css";
import useSound from 'use-sound';
import click from '../assets/click.mp3'
import inCorrect from '../assets/incorrect.mp3'
import correctA from '../assets/magical-hit-45356.mp3'


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
    "animation p-3 text-center borderborder-primary fs-5 fw-bolder  rounded-2 shadow"
  );

  const [letClick] = useSound(click)
  const [letCorrect] = useSound(correctA)
  const [letWrong] = useSound(inCorrect)
 


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
    letClick();
    handlclickToast()
    setClick(true)
    setSelectedAnswer(a);
    setClassName(
      "animation active p-3 text-center borderborder-primary fs-5 fw-bolder  rounded-2 shadow "
    );

    delay(1500, () =>
      setClassName(
        a.correct
          ? "animation  correct p-3 text-center borderborder-primary fs-5 fw-bolder  rounded-2 shadow"
          : "animation  wrong p-3 text-center borderborder-primary fs-5 fw-bolder  rounded-2 shadow "
      )
    );

    delay(3000, () => {
      if (a.correct) {
        letCorrect();
      delay(4000,()=>{
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
        setScore((prev) => prev + 1);
      })
      } else {
        letWrong();
        delay(4000,()=>{
          setQuestionNumber((prev) => prev + 1);

      })
        // setStop(true)
      }
    });
  };

  return (
    <div className="conatiner h-100 d-flex flex-column align-items-center justify-content-center">
      <div className="w-75 qbar  shadow  border border-primary text-center fs-5 fw-bolder p-4">
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
                : "animation  shadow  p-3  text-center border border-primary fs-5 fw-bolder rounded-2"
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
