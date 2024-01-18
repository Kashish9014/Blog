import React from 'react';

export default function Banner() {
  return (
    <div className="container mt-4 pb-5">
      <div className="row">
       
        <div className="col-md-5">
          <img
            src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
            alt="Banner Image"
            className="img-fluid"
          />
        </div>

       
        <div className="col-md-7">
          <div className="content">
            <h2  style={{color:"#800080", fontSize: "46", fontWeight:"700"}}>Articles For <span>Front-End Developers</span></h2>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
             Accusantium, suscipit! Iure maxime nisi.
              repellat illo temporibus 
             </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}