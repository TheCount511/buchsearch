import React from 'react';
import Card from './Card';

const CardList  =  ({books}) => {
	
	return (
		<div>{
			books.map((user, i) => {
				let thumbnaill ='No Image'
				if (typeof books[i].volumeInfo.imageLinks != 'undefined') {
					thumbnaill = books[i].volumeInfo.imageLinks.thumbnail
				}
					
		return(
			<Card
		key={i}
		title={books[i].volumeInfo.title}
		author={books[i].volumeInfo.authors}
		description={books[i].volumeInfo.description}
		thumbnail = {thumbnaill}
		language= {books[i].volumeInfo.language}
  		/>);

})}</div>);
}

export default CardList;  