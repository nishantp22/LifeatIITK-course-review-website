import Home from "./Home";
import Mods from "./Mods";
import Reviews from "./Reviews";
import Lock from "./lock";
import "./style.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,                //importing these since we are trying to implement routing
} from 'react-router-dom';

function App() {
let [modList,setModList]=useState([]);    //list of all the reviews pending for approval from moderator
const [courses,setCourses]=useState(null);

useEffect(()=>{
  fetch("http://localhost:8000/courses")
  .then(res=>{
    return res.json();
  })
  .then(data=>{
    setCourses(data);
  })
},[])
let [reviewCount,setReviewCount]=useState(6);
  
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
          {/* {In the code below, we are passing all the required props in respective components.
          We are using components as routes as you will see further} */}
          <Route index element={courses&&<Home data={courses}/>} />
          <Route path="lock" element={<Lock />} />
          <Route path="Reviews" element={<Reviews reviewCount={reviewCount} setReviewCount={setReviewCount} modList={modList} setModList={setModList}/>} />
          <Route path="Mods" element={<Mods modList={modList} setModList={setModList} data={courses} setCourses={setCourses}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
