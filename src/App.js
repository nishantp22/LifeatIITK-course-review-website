import Home from "./Home";
import MTH111_112 from "./MTH111_112";
import MTH113_114 from "./MTH113_114";
import ESC111_112 from "./ESC111_112";
import TA111 from "./TA111";              //importing all the ncessary components
import PHY114 from "./PHY114";
import CHM112_113 from "./CHM112_113";
import Mods from "./Mods";
import Lock from "./lock";
import "./style.css";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,                //importing these since we are trying to implement routing
} from 'react-router-dom';

function App() {
let [modList,setModList]=useState([]);    //list of all the reviews pending for approval from moderator

 /*state(array) containing all approved reviews of MTH113/114. 
 I have hardcoded the first entry so that website looks good*/
let [reviewsMTH113_114,setReviewsMTH113_114] =useState([{
  key:1,
  ID:1,
  Student:'Nishant Pandey',  
  Prof:'Pooja Singla/ T Muthukumar',
  Year_and_Semester : '2022-23 2nd sem',
  Grading_Pattern:'As expected from an MTH Course',
  WorkLoad:'Weekly assignments with 2 quizzes, one midsem and one endsem',
  Difficulty:'Moderate. But definitely easier than MTH111/112',
  Teaching_Style:'Both of them are very enthusiastic profs. They Put their heart in teaching',
  Satisfaction: 'Satisfied'
}]);

 /*array containing all approved reviews of PHY114. 
 I have hardcoded the first entry so that website looks good*/
let [reviewsPHY114,setReviewsPHY114] =useState([{
  key:2,
  ID:1,
  Student:'Nishant Pandey',
  Prof:'Anand Kumar Jha',
  Year_and_Semester : '2022-23 2nd sem',
  Grading_Pattern:"AK Jha's grading is decent",
  WorkLoad:'4 quizzes,directly from weekly assignments, one midsem and one endsem',
  Difficulty:'Easy to moderate',
  Teaching_Style:"Prof has a really good sense of humour. You'll enjoy going to classes",
  Satisfaction: 'Satisfied'
}]);

 /*array containing all approved reviews of ESC111/112. 
 I have hardcoded the first entry so that website looks good*/
let [reviewsESC111_112,setReviewsESC111_112] =useState([{
  key:3,
  ID:1,
  Student:'Nishant Pandey',
  Prof:'Nisheeth Srivastava/ Anil Seth',
  Year_and_Semester : '2022-23 1st sem',
  Grading_Pattern:'B-C centric. 18 got an A* and 59 got an A in 112.',
  WorkLoad:'Weekly quizzes, one midsem and one endsem',
  Difficulty:'Moderate. But requires regular practice',
  Teaching_Style:'Both of them are decent',
  Satisfaction: 'Satisfied'
}]);

 /*array containing all approved reviews of MTH111/112. 
 I have hardcoded the first entry so that website looks good*/
let [reviewsMTH111_112,setReviewsMTH111_112] =useState([{
  key:4,
  ID:1,
  Student:'Nishant Pandey',
  Prof:'Arijit Ganguly/ Kaushik Bal',
  Year_and_Semester : '2022-23 1st sem',
  Grading_Pattern:'Only 3 out of 1200 got an A. Majorly C centric',
  WorkLoad:'Weekly assignments with 2 quizzes, one midsem and one endsem',
  Difficulty:'Moderate. Although you may find the process of rigorous proof writing a bit boring',
  Teaching_Style:'Arijit : Who let him become a prof? Kaushik Bal : Very enthusiastic prof. Puts his heart in teaching',
  Satisfaction: 'MTH111: Not satisfied. MTH112: Somewhat satisfied'
}]);

 /*array containing all approved reviews of TA111. 
 I have hardcoded the first entry so that website looks good*/
let [reviewsTA111,setReviewsTA111] =useState([{
  key:5,
  ID:1,
  Student:'Nishant Pandey',
  Prof:'Salil Goel',
  Year_and_Semester : '2022-23 2nd sem',
  Grading_Pattern:"Can't Comment as course is not complete yet",
  WorkLoad:'Weekly Labs and Home Assignments, one midsem and one endsem',
  Difficulty:'Moderate',
  Teaching_Style:"Can't comment about anything other than that it's an IC course, so you have to complete it somehow",
  Satisfaction: 'Not yet'
}]);

 /*array containing all approved reviews of CHM112/113. 
 I have hardcoded the first entry so that website looks good*/
let [reviewsCHM112_113,setReviewsCHM112_113] =useState([{
  key:6,
  ID:1,
  Student:'Nishant Pandey',
  Prof:'Madhav Ranganathan/ Pratik sen/ Appu/ Parthas',
  Year_and_Semester : '2022-23 2nd sem',
  Grading_Pattern:"Can't Comment as course is not complete yet",
  WorkLoad:'Weekly Assignments, one midsem and one endsem',
  Difficulty:'Moderate. Assignments are easy but quizzes and midsem/endsem are deadly',
  Teaching_Style:"All of them are decent enough",
  Satisfaction: 'Yep'
}]);
//We will pass all these lists as props in respective components.

/*These are the states of various fields of the 'Add a Review' form. Will pass them as
props and update them based on input from user*/ 
const [count,setCount]=useState(7);   //count of the total reviews on the website(will use it to identify each review uniquely)
const [Name,setName]=useState('');
const [Prof,setProf]=useState('');
const [YearnSem,setYearnSem]=useState('');
const [Grading,setGrading]=useState('');
const [Workload,setWorkload]=useState('');
const [Difficulty,setDifficulty]=useState('');
const [Teaching,setTeaching]=useState('');
const [Satisfaction,setSatisfaction]=useState('');
  
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
          {/* {In the code below, we are passing all the required props in respective components.
          We are using components as routes as you will see further} */}
          <Route index element={<Home />} />
          <Route path="lock" element={<Lock />} />
          <Route path="Mods" element={<Mods count={count} setCount={setCount} modList={modList} setModList={setModList} reviewsCHM112_113={reviewsCHM112_113}
          setReviewsCHM112_113={setReviewsCHM112_113} reviewsMTH111_112={reviewsMTH111_112} setReviewsMTH111_112={setReviewsMTH111_112}
          reviewsESC111_112={reviewsESC111_112} setReviewsESC111_112={setReviewsESC111_112} reviewsMTH113_114={reviewsMTH113_114}
          setReviewsMTH113_114={setReviewsMTH113_114} reviewsPHY114={reviewsPHY114} setReviewsPHY114={setReviewsPHY114}
          reviewsTA111={reviewsTA111} setReviewsTA111={setReviewsTA111}/>}/>

          <Route path="MTH111_112" element={<MTH111_112 count={count} setCount={setCount} Name={Name} Prof={Prof} YearnSem={YearnSem} Grading={Grading} Workload={Workload}
           Teaching={Teaching} Difficulty={Difficulty} Satisfaction={Satisfaction} setName={setName} setProf={setProf} setYearnSem={setYearnSem}
           setDifficulty={setDifficulty} setWorkload={setWorkload} setTeaching={setTeaching} setGrading={setGrading} setSatisfaction={setSatisfaction}
           reviews={reviewsMTH111_112} setReviews={setReviewsMTH111_112} modList={modList} setModList={setModList}/>}/>
          
          <Route path="MTH113_114" element={<MTH113_114 count={count} setCount={setCount} Name={Name} Prof={Prof} YearnSem={YearnSem} Grading={Grading} Workload={Workload}
           Teaching={Teaching} Difficulty={Difficulty} Satisfaction={Satisfaction} setName={setName} setProf={setProf} setYearnSem={setYearnSem}
           setDifficulty={setDifficulty} setWorkload={setWorkload} setTeaching={setTeaching} setGrading={setGrading} setSatisfaction={setSatisfaction}
          reviews={reviewsMTH113_114} setReviews={setReviewsMTH113_114} modList={modList} setModList={setModList}/>} />
          
          <Route path="ESC111_112" element={<ESC111_112 count={count} setCount={setCount} Name={Name} Prof={Prof} YearnSem={YearnSem} Grading={Grading} Workload={Workload}
           Teaching={Teaching} Difficulty={Difficulty} Satisfaction={Satisfaction} setName={setName} setProf={setProf} setYearnSem={setYearnSem}
           setDifficulty={setDifficulty} setWorkload={setWorkload} setTeaching={setTeaching} setGrading={setGrading} setSatisfaction={setSatisfaction}
           reviews={reviewsESC111_112} setReviews={setReviewsESC111_112} modList={modList} setModList={setModList}/>} />
          
          <Route path="TA111" element={<TA111 count={count} setCount={setCount} Name={Name} Prof={Prof} YearnSem={YearnSem} Grading={Grading} Workload={Workload}
           Teaching={Teaching} Difficulty={Difficulty} Satisfaction={Satisfaction} setName={setName} setProf={setProf} setYearnSem={setYearnSem}
           setDifficulty={setDifficulty} setWorkload={setWorkload} setTeaching={setTeaching} setGrading={setGrading} setSatisfaction={setSatisfaction}
          reviews={reviewsTA111} setReviews={setReviewsTA111} modList={modList} setModList={setModList}/>} />
          
          <Route path="PHY114" element={<PHY114 count={count} setCount={setCount} Name={Name} Prof={Prof} YearnSem={YearnSem} Grading={Grading} Workload={Workload}
           Teaching={Teaching} Difficulty={Difficulty} Satisfaction={Satisfaction} setName={setName} setProf={setProf} setYearnSem={setYearnSem}
           setDifficulty={setDifficulty} setWorkload={setWorkload} setTeaching={setTeaching} setGrading={setGrading} setSatisfaction={setSatisfaction}
          reviews={reviewsPHY114} setReviews={setReviewsPHY114} modList={modList} setModList={setModList}/>} />
          
          <Route path="CHM112_113" element={<CHM112_113 count={count} setCount={setCount} Name={Name} Prof={Prof} YearnSem={YearnSem} Grading={Grading} Workload={Workload}
           Teaching={Teaching} Difficulty={Difficulty} Satisfaction={Satisfaction} setName={setName} setProf={setProf} setYearnSem={setYearnSem}
           setDifficulty={setDifficulty} setWorkload={setWorkload} setTeaching={setTeaching} setGrading={setGrading} setSatisfaction={setSatisfaction} 
          reviews={reviewsCHM112_113} setReviews={setReviewsCHM112_113} modList={modList} setModList={setModList}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
