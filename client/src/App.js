import React, {Component} from 'react';
import axios from 'axios';

import ProductCard from './components/ProductCard';

class App extends Component{
	state = {
		response: {}
	};

	componentDidMount(){
		axios.get('/products').then((res) =>{
			const data = res.data;
			console.log(data)
			this.setState({response: data[0]});
		})
	}
	render(){
		return (
			<div className="App">
				<ProductCard 
				name={this.state.response.name}
				description = {this.state.response.description}
				vote = {this.state.response.vote}
				_id = {this.state.response._id}/>
			</div>
		)
	}

}
export default App;
