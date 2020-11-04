import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Card, Button } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';

import axios from 'axios';

import '../assets/ProductCard.css'
import 'antd/dist/antd.css';


const { Meta } = Card;

class ProductCard extends Component{   
    render(){
        return (
          <div className="site-card-border-less-wrapper">
            <Card style={{width : 720, height:120}} hoverable>
            <Button className="product-card-upvote-button" icon= {<CaretUpOutlined />} style={{width: "60px", height: "70px" }}>
              <br/> ۲۱۵
            </Button>
            <Meta
              avatar={<img className="product-card-logo" src="../../logo192.png"/>}
              title="نام محصول"
              description = "توضیحات آن که در این زمینه کار‌های زیادی انجام می‌دهدو خیلی به شرکت شما کمک شایانی خواهد نمود"
            />
            
            </Card>

          </div>
        )
    }
}
export default ProductCard;
