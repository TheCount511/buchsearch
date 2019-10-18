import React from 'react';
import './searchbar.css'

const SearchBar = ({searchfield, searchChange})=>{
	return(
		<div className='searchbar text-center align-middle'>
		<input className="searchfield" type='search' placeholder='enter a book title' onChange={searchChange}/>
		<input type="submit" value="search" className="searchButton"/>
		</div>	
		);
}

export default SearchBar;