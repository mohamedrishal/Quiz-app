import React, { useState, useEffect } from "react";
import QuestionBar from "../components/QuestionBar";
import Time from "../components/Time";
import Result from "../components/Result";
import GameOver from "../components/GameOver";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home({ collect }) {
  // console.log(collect);
  

  const [data, setData] = useState([]);

  useEffect(() => {
    const handleSubmit = (collect) => {
      if (collect.categorie === "IT") {
        setData([
          {
            id: 1,
            question: "What does 'CPU' stand for in the context of a computer?",
            answers: [
              {
                text: "Central Processing Unit",
                correct: true,
              },
              {
                text: "Computer Programming Unit",
                correct: false,
              },
              {
                text: "Central Print Unit",
                correct: false,
              },
              {
                text: "Computer Peripheral Unit",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            question:
              "Which company is known for its Windows operating system?",
            answers: [
              {
                text: "Apple",
                correct: false,
              },
              {
                text: "Google",
                correct: false,
              },
              {
                text: "Microsoft",
                correct: true,
              },
              {
                text: "IBM",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            question: "What does 'URL' stand for in a web address?",
            answers: [
              {
                text: "Universal Resource Locator",
                correct: false,
              },
              {
                text: "Uniform Resource Locator",
                correct: true,
              },
              {
                text: "Universal Remote Locator",
                correct: false,
              },
              {
                text: "Unified Resource Locator",
                correct: false,
              },
            ],
          },
          {
            id: 4,
            question: "Which of the following is an example of a web browser?",
            answers: [
              {
                text: "Java",
                correct: false,
              },
              {
                text: "Microsoft Word",
                correct: false,
              },
              {
                text: "Google Chrome",
                correct: true,
              },
              {
                text: "Photoshop",
                correct: false,
              },
            ],
          },
          {
            id: 5,
            question: "In IT, what does 'HTML' stand for?",
            answers: [
              {
                text: "Hyperlink Text Markup Language",
                correct: false,
              },
              {
                text: "High Technology Modern Language",
                correct: false,
              },
              {
                text: "Hyper Text Markup Language",
                correct: true,
              },
              {
                text: "Human Task Management Language",
                correct: false,
              },
            ],
          },
          {
            id: 6,
            question:
              "What type of software allows you to create and edit documents, spreadsheets, and presentations?",
            answers: [
              {
                text: "Antivirus",
                correct: false,
              },
              {
                text: "Operating System",
                correct: false,
              },
              {
                text: "Office Suite",
                correct: true,
              },
              {
                text: "Database",
                correct: false,
              },
            ],
          },
          {
            id: 7,
            question: "What does 'Wi-Fi' stand for in wireless networking?",
            answers: [
              {
                text: "Wireless Fidelity",
                correct: true,
              },
              {
                text: "Wired Fiber",
                correct: false,
              },
              {
                text: "Wide Area Network",
                correct: false,
              },
              {
                text: "World Internet Foundation",
                correct: false,
              },
            ],
          },
          {
            id: 8,
            question:
              "What is the primary function of a firewall in network security?",
            answers: [
              {
                text: "Print documents",
                correct: false,
              },
              {
                text: "Filter incoming and outgoing network traffic",
                correct: true,
              },
              {
                text: "Make phone calls",
                correct: false,
              },
              {
                text: "Encrypt data",
                correct: false,
              },
            ],
          },
          {
            id: 9,
            question: "Which of the following is not a programming language?",
            answers: [
              {
                text: "Python",
                correct: false,
              },
              {
                text: "JavaScript",
                correct: false,
              },
              {
                text: "SQL",
                correct: false,
              },
              {
                text: "Microsoft Excel",
                correct: true,
              },
            ],
          },
          {
            id: 10,
            question:
              "What is the term for malicious software that encrypts your data and demands a ransom for its release?",
            answers: [
              {
                text: "Virus",
                correct: false,
              },
              {
                text: "Worm",
                correct: false,
              },
              {
                text: "Spyware",
                correct: false,
              },
              {
                text: "Ransomware",
                correct: true,
              },
            ],
          },
        ]);
      } else if (collect.categorie === "science") {
        setData([
          {
            id: 1,
            question: "What is the chemical symbol for water?",
            answers: [
              {
                text: "O2",
                correct: false,
              },
              {
                text: "H2O",
                correct: true,
              },
              {
                text: "CO2",
                correct: false,
              },
              {
                text: "N2",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            question: "Which planet is known as the 'Red Planet'?",
            answers: [
              {
                text: "Venus",
                correct: false,
              },
              {
                text: "Jupiter",
                correct: false,
              },
              {
                text: "Mars",
                correct: true,
              },
              {
                text: "Saturn",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            question:
              "What is the process by which plants make their food using sunlight?",
            answers: [
              {
                text: "Photosynthesis",
                correct: true,
              },
              {
                text: "Respiration",
                correct: false,
              },
              {
                text: "Fermentation",
                correct: false,
              },
              {
                text: "Combustion",
                correct: false,
              },
            ],
          },
          {
            id: 4,
            question: "What is the Earth's largest organ?",
            answers: [
              {
                text: "Liver",
                correct: false,
              },
              {
                text: "Heart",
                correct: false,
              },
              {
                text: "Brain",
                correct: false,
              },
              {
                text: "Skin",
                correct: true,
              },
            ],
          },
          {
            id: 5,
            question:
              "Which gas do plants absorb from the atmosphere during photosynthesis?",
            answers: [
              {
                text: "Carbon dioxide (CO2)",
                correct: true,
              },
              {
                text: "Oxygen (O2)",
                correct: false,
              },
              {
                text: "Nitrogen (N2)",
                correct: false,
              },
              {
                text: "Hydrogen (H2)",
                correct: false,
              },
            ],
          },
          {
            id: 6,
            question:
              "What is the unit of measurement for electrical resistance?",
            answers: [
              {
                text: "Volt",
                correct: false,
              },
              {
                text: "Ampere",
                correct: false,
              },
              {
                text: "Ohm",
                correct: true,
              },
              {
                text: "Watt",
                correct: false,
              },
            ],
          },
          {
            id: 7,
            question:
              "Which subatomic particle carries a positive electric charge?",
            answers: [
              {
                text: "Electron",
                correct: false,
              },
              {
                text: "Neutron",
                correct: false,
              },
              {
                text: "Proton",
                correct: true,
              },
              {
                text: "Photon",
                correct: false,
              },
            ],
          },
          {
            id: 8,
            question: "What is the chemical symbol for gold?",
            answers: [
              {
                text: "Ag",
                correct: false,
              },
              {
                text: "Au",
                correct: true,
              },
              {
                text: "Fe",
                correct: false,
              },
              {
                text: "Cu",
                correct: false,
              },
            ],
          },
          {
            id: 9,
            question:
              "Which gas do humans primarily breathe out when they exhale?",
            answers: [
              {
                text: "Oxygen (O2)",
                correct: false,
              },
              {
                text: "Carbon dioxide (CO2)",
                correct: true,
              },
              {
                text: "Nitrogen (N2)",
                correct: false,
              },
              {
                text: "Hydrogen (H2)",
                correct: false,
              },
            ],
          },
          {
            id: 10,
            question: "What is the largest planet in our solar system?",
            answers: [
              {
                text: "Earth",
                correct: false,
              },
              {
                text: "Mars",
                correct: false,
              },
              {
                text: "Saturn",
                correct: false,
              },
              {
                text: "Jupiter",
                correct: true,
              },
            ],
          },
        ]);
      } else if (collect.categorie === "history") {
        setData([
          {
            id: 1,
            question: "Who is known as the Father of the Indian Nation?",
            answers: [
              {
                text: "Jawaharlal Nehru",
                correct: false,
              },
              {
                text: "Sardar Patel",
                correct: false,
              },
              {
                text: "Mahatma Gandhi",
                correct: true,
              },
              {
                text: "Subhas Chandra Bose",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            question:
              "What was the name of the ancient Indian script used in the Indus Valley Civilization?",
            answers: [
              {
                text: "Devanagari",
                correct: false,
              },
              {
                text: "Sanskrit",
                correct: false,
              },
              {
                text: "Brahmi",
                correct: false,
              },
              {
                text: "Harappan",
                correct: true,
              },
            ],
          },
          {
            id: 3,
            question:
              "Which Mughal emperor is known for commissioning the Taj Mahal?",
            answers: [
              {
                text: "Akbar",
                correct: false,
              },
              {
                text: "Shah Jahan",
                correct: true,
              },
              {
                text: "Babur",
                correct: false,
              },
              {
                text: "Aurangzeb",
                correct: false,
              },
            ],
          },
          {
            id: 4,
            question: "Who was the first Prime Minister of India?",
            answers: [
              {
                text: "Indira Gandhi",
                correct: false,
              },
              {
                text: "Jawaharlal Nehru",
                correct: true,
              },
              {
                text: "Sardar Patel",
                correct: false,
              },
              {
                text: "Rajiv Gandhi",
                correct: false,
              },
            ],
          },
          {
            id: 5,
            question:
              "Which Indian leader is famous for his role in the non-violent struggle for India's independence from British colonial rule?",
            answers: [
              {
                text: "Bhagat Singh",
                correct: false,
              },
              {
                text: "Subhas Chandra Bose",
                correct: false,
              },
              {
                text: "Mahatma Gandhi",
                correct: true,
              },
              {
                text: "Jawaharlal Nehru",
                correct: false,
              },
            ],
          },
          {
            id: 6,
            question: "The Maurya Empire was founded by which Indian emperor?",
            answers: [
              {
                text: "Ashoka",
                correct: false,
              },
              {
                text: "Chandragupta Maurya",
                correct: true,
              },
              {
                text: "Harsha",
                correct: false,
              },
              {
                text: "Akbar",
                correct: false,
              },
            ],
          },
          {
            id: 7,
            question:
              "What event took place on August 15, 1947, marking India's independence from British rule?",
            answers: [
              {
                text: "Jallianwala Bagh Massacre",
                correct: false,
              },
              {
                text: "Quit India Movement",
                correct: false,
              },
              {
                text: "Partition of India",
                correct: false,
              },
              {
                text: "Transfer of Power",
                correct: true,
              },
            ],
          },
          {
            id: 8,
            question:
              "Which river is often referred to as the 'Sorrow of Bengal' due to its frequent devastating floods?",
            answers: [
              {
                text: "Yamuna",
                correct: false,
              },
              {
                text: "Brahmaputra",
                correct: true,
              },
              {
                text: "Ganges",
                correct: false,
              },
              {
                text: "Godavari",
                correct: false,
              },
            ],
          },
          {
            id: 9,
            question:
              "Who was the first woman to serve as the Prime Minister of India?",
            answers: [
              {
                text: "Sushma Swaraj",
                correct: false,
              },
              {
                text: "Indira Gandhi",
                correct: true,
              },
              {
                text: "Sonia Gandhi",
                correct: false,
              },
              {
                text: "Mayawati",
                correct: false,
              },
            ],
          },
          {
            id: 10,
            question: "What is the national emblem of India?",
            answers: [
              {
                text: "Lotus",
                correct: false,
              },
              {
                text: "Ashoka Chakra",
                correct: true,
              },
              {
                text: "Tiger",
                correct: false,
              },
              {
                text: "Peacock",
                correct: false,
              },
            ],
          },
        ]);
      }
    };

    // Call the handleSubmit function inside the useEffect to avoid the "Too many re-renders" error
    handleSubmit(collect);
  }, [collect]);

  const name = collect.name ;

  // console.log(data);

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [score, setScore] = useState(0);
 
  const [click, setClick] = useState(true);

  const handlclickToast = ()=>{
    if(click){
      toast.warning("Pls wait.. ✓ or ✕")
    }
  }

  

  return (
    <div className="">
      <div
        style={{ height: "90vh" }}
        className="main d-flex justify-content-center flex-column w-100"
      >
        {" "}
        {(questionNumber > 10 || stop) ? (
          <>
            { questionNumber > 10 ? <Result score={score} questionNumber={questionNumber} name={name}/> : <GameOver/> }
          </>
        ) : (
          <>
            <div className="top w-100 h-25  d-flex flex-column justify-content-center align-items-center">

              <div
                style={{ width: "70px", height: "70px",marginTop:"12vh" }}
                className="timer border border-primary border-2 shadow d-flex align-items-center justify-content-center fs-4 fw-bolder  rounded-circle"
              >
                <Time setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>

            <div className="container ms-2
             d-flex justify-content-end fw-bolder fs-5">{questionNumber}/10</div>

            <div className="bottom h-100 ">
              <QuestionBar
              handlclickToast={handlclickToast}
              setClick={setClick}
                setScore={setScore}
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>
      <ToastContainer
      position="top-center"
      width={"100%"}
      autoClose={4000}
      theme="dark"
      />
    </div>
  );
}

export default Home;
