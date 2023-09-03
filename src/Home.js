import * as React from 'react';
import{useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'

export default function Home({courses}){
  const navigate=useNavigate();
  
  
function transfer(id){
    navigate('/Reviews',{state:(id)});
    window.scrollTo(0, 0);
  }
  
  return (
    <body>
      <Navbar></Navbar>
            <div class="PageHeading">
              <p>Life@IITK</p>
              <p id="smallHeading">Dont Forget the 1 while chasing 0's</p>
            </div>          
          <div class="r">
          {courses.map((course) => (
                <div class="card" style={{width: "22rem"}}>
                    <img src={course.image} width="100%" height="200px" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">{course.name}</h5>
                      <p class="card-text">{course.title}</p>
                     </div>
                      <button id="homeRdrBtn"onClick={()=>transfer(course.key)} class="btn btn-primary revs">View Reviews</button>
                  </div>
          ))}
          </div>
          <Footer/>
      </body>
  );
}