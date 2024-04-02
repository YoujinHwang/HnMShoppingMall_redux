import React from 'react'
import { useEffect,useState } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {
  let{id}=useParams();
  const[product,setProduct]=useState(null);
  const getProductDetail=async ()=> {
    let url=`https://my-json-server.typicode.com/YoujinHwang/HnMShoppingMall/products/${id}`
    let response=await fetch(url);
    let data=await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail();
  },[]);
  return <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt=""/>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice==true?"Conscious choice":""}</div>
          <DropdownButton id="dropdown-basic-button" title="Size">
            
            {product?.size.length > 0 &&
              product.size.map((item) => (
                <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
            ))}
            {/* <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item> */}
          </DropdownButton>
          <Button variant="dark" className="add-button">
              추가
          </Button>
        </Col>
      </Row>
    </Container>
  
}

export default ProductDetail