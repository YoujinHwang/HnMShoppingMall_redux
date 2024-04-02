import React from 'react'
import { useEffect,useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container,Row,Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
const ProductAll = () => {
  let [productList, setProductList]=useState([]);
  const [query, setQuery]=useSearchParams();

  const getProducts=async ()=>{
    let searchQuery=query.get('q')||""; //null이 추가되어야 하는 이유는?
    console.log("쿼리값은?", searchQuery);
    let url=`https://my-json-server.typicode.com/YoujinHwang/HnMShoppingMall/products?q=${searchQuery}`;
    let response=await fetch(url);
    let data=await response.json();
    setProductList(data);
  }
  useEffect(()=>{
    getProducts()
  },[query]);
  return (
      <Container>
        <Row>
          {productList.map((menu)=>(
            <Col lg={3} sm={12} key={menu.id}>
              <ProductCard item={menu}/></Col>
          ))}
         
        </Row>
      </Container>
      // <ProductCard/>
   
  )
}

export default ProductAll;