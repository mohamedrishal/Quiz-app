import React from "react";
import img from '../assets/win .png'
import { Link } from "react-router-dom";

function Result({score,questionNumber,name}) {

 

  return (
 <div className="d-flex justify-content-center align-items-center h-100 flex-column container">
        <div className="d-flex justify-content-center align-items-center h-100 animate__animated animate__flip">
    
          <div
            style={{ height: "35rem", width: "28rem", borderRadius: "50px" }}
            className=" shadow border border-1 border-primary justify-content-center d-flex flex-column align-items-center"
          >
            <img className="img-fluid w-50 animate__animated animate__flip" src={img} alt="" />
            <h2><i>Congrats! {name}</i></h2>
            <div className="fw-bolder fs-2 text-success">{score>0 && score }0% Score</div>
            <h4>Quiz Completed successfully</h4>
            <p className="fs-5 p-4 w-75">You attempt <span className="text-primary">10 questions</span> and from that <span className="text-success">{score} answers</span> is correct</p>
          </div>
    
        </div>
    
    <div>
    <Link to={'/'} className='text-decoration-none btn btn-primary rounded px-5 p-3 d-flex align-items-center fs-5 fw-bold'>
    <i class="fa-solid fa-arrow-left me-3"></i> Home
    </Link>
    </div>
 </div>
  );
}

export default Result;
