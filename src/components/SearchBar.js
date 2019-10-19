import React from 'react';
import './searchbar.css'

const SearchBar = ({searchQuery, searchButton})=>{
	return(
		<div className='searchbar text-center align-middle'>
		<input className="searchfield" type='search' placeholder='enter a book title' />
		<input type="submit" value="search" className="searchButton" onClick={searchButton}/>
		</div>	
		);
}

export default SearchBar;