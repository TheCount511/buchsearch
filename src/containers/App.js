import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards'

const App = () => {
  return (
  	<div className='container'>
    	<div className=''>
    <header>
    <h1 className="title text-center lg">Buchsearch</h1>
    <SearchBar/>
    </header>
   </div>
    	<Cards/>
 
    </div>
    );
}

export default App;
