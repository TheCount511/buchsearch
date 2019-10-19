import React from 'react';
import Cards from './Cards';

const CardsList  =  ({books}) => {
return(<div>{books.map((book, i)=>{
	

	return(<Cards
		key={i}
		title={books[i].volumeInfo.title}
		author={books[i].volumeInfo.authors}
		description={books[i].volumeInfo.description}
		thumbnail={books[i].volumeInfo.imageLinks.thumbnail}
		language= {books[i].volumeInfo.language}

		/>);

})}
</div>
);
}

export default CardsList;