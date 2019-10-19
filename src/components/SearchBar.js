import React from 'react';
import './searchbar.css'

const SearchBar = ({searchfield, searchButton})=>{
	return(
		<div className='searchbar text-center align-middle'>
		<input className="searchfield" type='search' placeholder='enter a book title' />
		<button type="button" className="searchButton" onClick={searchButton}>Search</button>
		</div>	
		);
}

export default SearchBar;