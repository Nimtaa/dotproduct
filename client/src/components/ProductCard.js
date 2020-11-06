import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, message } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';

import axios from 'axios';

import '../assets/ProductCard.css'
import 'antd/dist/antd.css';


const { Meta } = Card;

class ProductCard extends Component{

  constructor(props){
    super(props);
    this.handleUpvote = this.handleUpvote.bind(this);
  };

  handleUpvote(){
    message.info('Upvote!');
    const url = '/products/' + this.props._id + '/upvote' ;
    axios.post(url, {})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  render(){
      return (
        <div className="site-card-border-less-wrapper">
          <Card style={{width : 720, height:120}} hoverable>
          <Button className="product-card-upvote-button" icon= {<CaretUpOutlined />} 
          style={{width: "60px", height: "70px" }} onClick={this.handleUpvote}>
            <br/> {this.props.vote}
          </Button>
          <Meta
            avatar={<img className="product-card-logo" src="../../logo192.png"/>}
            title= {this.props.name}
            description = {this.props.description}
          />
          
          </Card>

        </div>
      )
  }
}
export default ProductCard;
