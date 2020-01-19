import React, {Component} from 'react';
import './App.css';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList'
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {
	constructor(){
		super()
		this.state = {
			books: [],
			searchQuery:'',
			valv: ''
		}
	}

onSearchChange=(event)=> {this.setState({valve: event.target.value})}
onClickButton = (event) => {this.setState({searchQuery: this.state.valve})}
		
		componentDidMount(){	
	fetch(`https://www.googleapis.com/books/v1/volumes?q=`)
	.then(response => response.json())
	.then(bookslist => this.setState({books: bookslist.items}));
}

componentDidUpdate(prevProps, prevState, snapshot) {
   if(this.state.searchQuery !== prevState.searchQuery) {
       // fetch ...
       fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}`)
	.then(response => response.json())
	.then(bookslist => this.setState({books: bookslist.items}));
   }
}

	render(){
		const {books, searchQuery} =this.state
		console.log(searchQuery);
  return (
  	<div className='container'>
	    <div className=''>
	    	<header>
	    		<h1 className="title text-center lg">Buchsearch</h1>
	    		<SearchBar searchButton={this.onClickButton} searchChange={this.onSearchChange}/>
	    	</header>
	   </div>
	   <ErrorBoundary>
	   {typeof books == 'undefined'?<h1>Enter a book search query</h1>:<CardList books={this.state.books}/>}</ErrorBoundary>   	   
    </div>
    )
}
}
export default App;
