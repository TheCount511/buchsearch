
import React from 'react';
import './card.css';


const Card = ({ title, author, description, thumbnail, language }) => {
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
      					<h5>{title}</h5>
    				</div>
    				<div className="col-sm card-text">
      					<h6>{author}</h6>
    				</div>
  				</div>
        		<div>
        			<p className="card-text">{description}</p>
        			<p className="card-text"><small className="text-muted">Language: {language}</small></p>
      			</div>
      	</div>
    </div>
  </div>
</div>
    );
}

export default Card;