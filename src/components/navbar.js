import React from "react"

const Navbar = () => {
    return(
        <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Contacts Page</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarColor01">
   
    <form class="d-flex ms-auto">
      <input class="form-control me-sm-5" type="search" placeholder="Search by Email Id"/>
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>       
        </>
    )
}

export default Navbar;