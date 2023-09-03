import Home from "./Home";
import Mods from "./Mods";
import Reviews from "./Reviews";
import Lock from "./lock";
import axios from "axios";
import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let [reviewCount,setReviewCount]=useState(6);
  const[courses,setCourses]=useState();
  const [loading1, setLoading1] = useState(true);
  
  useEffect(()=>{
    async function getCourses(){
      try{
        const response=await axios.get('https://lifeatiitk.onrender.com/courses');
        setCourses(response.data);
        setLoading1(false);
      }catch(err){
        console.log(err);
      }
    }
    getCourses();
  },[]);
  
  if(loading1) return (<p style={{display:"flex",justifyContent:"center",fontSize:"50px",alignItems:"center",height:"95vh"}}>It's slow because it's free :)</p>)
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
          {/* {In the code below, we are passing all the required props in respective components.
          We are using components as routes as you will see further} */}
          <Route index element={courses&&<Home courses={courses}/>} />
          <Route path="lock" element={<Lock />} />
          <Route path="Reviews" element={<Reviews courses={courses} reviewCount={reviewCount} setReviewCount={setReviewCount}/>} />
          <Route path="Mods" element={<Mods courses={courses} setCourses={setCourses}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
