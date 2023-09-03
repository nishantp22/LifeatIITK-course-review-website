import * as React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useState,useEffect } from 'react';
import Footer from './Footer';
// import { useState,useEffect } from 'react';

export default function Mods({courses,setCourses}) {
  const [modList,setModList]=useState();
  const [loading,setLoading]=useState(true);
 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://lifeatiitk.onrender.com/modReviews');
        setModList(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
// the arguments in the function Mods are the various props that we are accepting.
  
function approveReview(review){
  async function removeFromMods(){
    try {
      const response1 = await axios.post(`https://lifeatiitk.onrender.com/approveReview`,review);
      console.log(response1.data);
    } catch (error) {
      console.error("Error approving review:", error);
    } 
  }
  async function addToReviews(){
    try {
      const response2 = await axios.delete(`https://lifeatiitk.onrender.com/rejectReview?ID=${review._id}`);
      console.log(response2.data);
    } catch (error) {
      console.error("Error approving review:", error);
    }
  }
  removeFromMods();
  addToReviews();
  const newCourses=courses.map((course)=>{
    if(course.key===review.key){
      return {...course,reviews:[...course.reviews,review]};
    }
    return course;
  })
  setCourses(newCourses);
  setModList(modList.filter((r)=>r._id!==review._id));
  window.alert("Approved Sucessfully!");                  
}

function rejectReview(review){
  async function removeFromMods(){
    try {
      const response = await axios.delete(`https://lifeatiitk.onrender.com/rejectReview?ID=${review._id}`);
      console.log(response.data);
    } catch (error) {
      console.error("Error rejecting review:", error);
    }
  }
  removeFromMods();
  setModList(modList.filter((r)=>r._id!==review._id));
  window.alert("Rejected Successfully!");
}
  if(loading) return (<p style={{display:"flex",justifyContent:"center",fontSize:"50px",alignItems:"center",height:"95vh"}}>It's slow because it's free :)</p>)
  return (
    <body>
      <Navbar>
      </Navbar>
            <div class="PageHeading">
              <p>Approve/ Reject Reviews</p>
              <p id="smallHeading">What kind of POR is this?</p>
            </div>          
        <div class="r">
            {modList.map((review) => (
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
                  <div class="btn-div">
                    <button class="btn btn-primary" onClick={()=>approveReview(review) } style={{marginTop:"10px"}}>Approve</button>
                    <button class="btn btn-primary" onClick={()=>rejectReview(review)} style={{marginTop:"10px"}}>Reject</button>
                  </div>
                </div>
                </div>
            ))}
            </div>
        <Footer />
      </body>
  );
}