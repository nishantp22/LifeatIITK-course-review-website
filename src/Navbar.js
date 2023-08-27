import * as React from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  function goToMods(){
    navigate('/lock')
  }
  function goToHome(){
    navigate('/')
  }
    return ( 
    <nav class="navbar navbar-expand-lg" id='navBar'>
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <p class="nav-link active" aria-current="page" onClick={goToHome}>Home</p>
        </li>
        <li class="nav-item">
          <p class="nav-link active" aria-current="page" onClick={goToMods}>For Moderators</p>
        </li>
      </ul>
    </div>
  </div>
</nav>
     );
}
export default Navbar;