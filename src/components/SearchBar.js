import React from 'react';
import './searchbar.css';

const SearchBar = ({searchQuery, searchButton, searchChange})=>{
	return(
		<div className='searchbar text-center align-middle'>
		<input className="searchfield" type='search' placeholder='enter a book title' onChange={searchChange}/>
		<button type="button" className="searchButton" onClick={searchButton}>Search</button>
		</div>	
		);
}

export default SearchBar;