import React from 'react'
import "./Ham.css"
const Ham = () => {
  return (
    <>

<nav class="navbar navbar-light light-blue lighten-4">

 
  <a class="navbar-brand" href="#">Navbar</a>


  <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
        class="fas fa-bars fa-1x"></i></span></button>

 
  <div class="collapse navbar-collapse" id="navbarSupportedContent1">

    
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
 

  </div>


</nav>

    </>
  )
}

export default Ham