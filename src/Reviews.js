import * as React from 'react';
import { useState } from 'react';
import{useLocation} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Reviews({reviewCount,setReviewCount,modList,setModList}) {
  const location=useLocation();
  const course=location.state;
  const [name,setName]=useState('');
  const [prof,setProf]=useState('');
  const [year,setYear]=useState('');
  const [workload,setWorkload]=useState('');
  const [grading,setGrading]=useState('');
  const [difficulty,setDifficulty]=useState('');
  const [teaching,setTeaching]=useState('');
  const [satisfaction,setSatisfaction]=useState('');
  
  /* The below 7 functions are for handling the input provided
  by the user. We are storing the input provided by user in
  the states we declared in App.js and passed as props  */
  function handleName(event) {setName(event.target.value);}
  function handleProf(event){setProf(event.target.value);}
  function handleYearnSem(event){setYear(event.target.value);}
  function handleGrading(event){setGrading(event.target.value);}
  function handleWorkload(event){setWorkload(event.target.value);}
  function handleDifficulty(event){setDifficulty(event.target.value);}
  function handleTeaching(event){setTeaching(event.target.value);}
  function handleSatisfaction(event){setSatisfaction(event.target.value);}
  
  function AddReview(){
    const review={
      "key":course.key,
      "ID":reviewCount+1,
      "Student":name,  
      "Prof":prof,
      "Year_and_Semester": year,
      "Grading_Pattern":grading,
      "Workload":workload,
      "Difficulty":difficulty,
      "Teaching_Style":teaching,
      "Satisfaction":satisfaction
    }
    console.log(review);
    async function postReview(){
      try {
        const response = await axios.post('https://lifeatiitk.onrender.com/submitReview', review);
        console.log('Response:', response.data);
        // Handle successful response
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    }
    postReview();
    window.alert("Sent for Approval from Moderators!");
    //   //setting the states to empty fields after adding a review
    setName(''); setProf(''); setYear(''); setGrading(''); setDifficulty(''); setWorkload(''); setTeaching(''); setSatisfaction('');
    const newReviewCount=reviewCount+1;
    setReviewCount(newReviewCount);
    window.location.reload();
  }

  return (
    <body>
      <Navbar>
      </Navbar>
            <div class="PageHeading">
              <p>{course.name}</p>
              <p id="smallHeading">{course.description}</p>
            </div>          
        <div class="r">
            {course.reviews.map((review) => (
              <div class="card" style={{width: "34rem"}}>
                <div class="card-body">
                  <p class="card-text"><b>Review By : </b>{review.Student}</p>
                  <p class="card-text"> <b>Instructor : </b>{review.Prof}</p>
                  <p class="card-text"> <b>Year and Semester : </b>{review.Year_and_Semester}</p>
                  <p class="card-text"> <b>Workload Description : </b>{review.Workload}</p>
                  <p class="card-text"> <b>Difficulty Level : </b>{review.Difficulty}</p>
                  <p class="card-text"> <b>Grading Pattern : </b>{review.Grading_Pattern}</p>
                  <p class="card-text"> <b>Teaching Style of Instructor : </b>{review.Teaching_Style}</p>
                  <p class="card-text"> <b>Overall Satisfaction : </b>{review.Satisfaction}</p>
                </div>
                </div>

            ))}
            </div>
            <p class="submissionFormHeader">Add a Review</p>
            <div class="submissionForm" maxWidth={16} style= {{display:"flex", justifyContent:"space-between",flexDirection:"row",flexWrap:"wrap"}}>
            <input  value={name} onChange={handleName}className="form" id="Name" placeholder='Name'></input>
            <input value={prof} onChange={handleProf} className="form" id="Prof" placeholder='Instructor'></input>
            <input value={year} onChange={handleYearnSem} className="form" id="Prof" placeholder='Year and Semester'></input>
            <input value={workload}onChange={handleWorkload} className="form" id="Workload" placeholder='Workload Description'></input>
            <input value={difficulty} onChange={handleDifficulty} className="form" id="Difficulty" placeholder='Difficulty Level'></input>
            <input value={grading} onChange={handleGrading} className="form" id="Grading" placeholder='Grading Pattern'></input>
            <input value={teaching} onChange={handleTeaching} className="form" id="Teaching_style" placeholder='Teaching Style of Instructor'></input>
            <input value={satisfaction}onChange={handleSatisfaction} className="form" id="Satisfaction" placeholder='Overall Satisfaction'></input>
            <button type="button" class="btn btn-primary" onClick={AddReview}>Add Review</button>
          </div>
        <Footer />
      </body>
  );
}