import React from 'react';
import Card from './Card';

const CardList  =  ({books}) => {
	return (<div>{books.map((user, i) => {
	

		return (<Card
		key-={i}
		title={books[i].volumeInfo.title}
		author={books[i].volumeInfo.authors}
		description={books[i].volumeInfo.description}
		thumbnail={books[i].volumeInfo.imageLinks.thumbnail}
		language= {books[i].volumeInfo.language}
  		/>);

})}</div>);
}

export default CardList;  