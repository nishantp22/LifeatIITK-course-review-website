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
  const [modList,setModList]=useState([]);    
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://lifeatiitk.onrender.com/courses');
        setCourses(response.data);
        setLoading1(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://lifeatiitk.onrender.com/modReviews');
        setModList(response.data);
        setLoading2(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);



  if(loading1||loading2) return (<p style={{display:"flex",justifyContent:"center",fontSize:"50px",alignItems:"center",height:"95vh"}}>It's slow because it's free :)</p>)
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
