import React, {Component} from 'react';
import axios from 'axios';

import ProductCard from './components/ProductCard';
import {List} from 'antd';

class App extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			products: []
		};
	}

	componentDidMount(){
		axios.get('/products').then((res) =>{
			const data = res.data;
			console.log(data)
			this.setState({products: data});
		})
	}


	render(){
		return (
			<div className="App">
				<List
				dataSource={this.state.products}
				renderItem={p => (
						<ProductCard 
						name={p.name}
						description = {p.description}
						vote = {p.vote}
						_id = {p._id} />
					)}
				/>
			</div>
		)
	}

}
export default App;
