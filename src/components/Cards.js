import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import './cards.css';


const Cards = ({ title, author, description, number_of_pages, thumbnail, language }) => {
        return (
<div className="card mb-3">
  <div className="row no-gutters">
    	<div className="col-md-2 book-image">
      		<img src={`${thumbnail}`} className="card-img" alt="..."/>
   	 	</div>
    	<div className="col-md-10">
      		<div className="card-body">
     			<div className="row">
    				<div className="col-sm card-title">
      					<h5>{title}The Fault in our Stars</h5>
    				</div>
    				<div className="col-sm card-text">
      					<h6>{author}One of three columns</h6>
    				</div>
  				</div>
        		<div>
        			<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        			<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      			</div>
      	</div>
    </div>
  </div>
</div>
    );
}

export default Cards;