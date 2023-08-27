import * as React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Mods({modList}) {
// the arguments in the function Mods are the various props that we are accepting.
  
async function approveReview(review){ 
  try {
    const response1 = await axios.post(`https://lifeatiitk.onrender.com/approveReview`,review);
    console.log(response1.data);
    const response2 = await axios.delete(`https://lifeatiitk.onrender.com/rejectReview?ID=${review._id}`);
    console.log(response2.data);
    window.location.reload(); // This can be improved by updating the state instead of a full page reload
    window.alert("Approved Sucessfully!");
  } catch (error) {
    console.error("Error approving review:", error);
  }
                  
}
async function rejectReview(review){
  try {
    const response = await axios.delete(`https://lifeatiitk.onrender.com/rejectReview?ID=${review._id}`);
    console.log(response.data);
    window.alert("Rejected Successfully!");
    window.location.reload(); // This can be improved by updating the state instead of a full page reload
  } catch (error) {
    console.error("Error rejecting review:", error);
  }
}
  
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