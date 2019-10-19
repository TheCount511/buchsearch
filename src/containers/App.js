import React, {Component} from 'react';
import './App.css';
import SearchBar from '../components/SearchBar';
import CardsList from '../components/CardsList'



class App extends Component {
	constructor(){
		super()
		this.state = {
			books: [],
			searchfield:''
		}
	}

	onClickButton = (event) => {
		this.setState({searchfield: event.target.value})
	}

componentDidMount(){
	fetch('https://www.googleapis.com/books/v1/volumes?q=9%20lives')
	.then(response => response.json())
	.then(bookslist => this.setState({books: bookslist}));
}

componentDidMount(){
	console.log('check');
}

	render(){

  return (
  	<div className='container'>
	    <div className=''>
	    	<header>
	    		<h1 className="title text-center lg">Buchsearch</h1>
	    		<SearchBar/>
	    	</header>
	   </div>
    	<CardsList books={this.state.books}/>
    </div>
    )
}
}
export default App;
