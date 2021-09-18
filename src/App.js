import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <Count></Count>
      <ExternalUser></ExternalUser>
    </div>
  );
}

// External User 
function ExternalUser() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>External User</h1>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
// user 
function User(props) {
  return (
    <div className='product'>
      <h2>UserName: {props.name}</h2>
      <p>UserEmail: {props.email}</p>
    </div>
  )
}
// Increase 
function Count() {
  const [count, setCount] = useState(0)
  // handel Increase 
  const handelIncrease = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  // handel decrease 
  const handelDecrease = () => {
    const newCount = count - 1;
    setCount(newCount)
  }
  return (
    <div className="count">
      <h1>Count: {count}</h1>
      <button onClick={handelIncrease}>Increase</button>
      <button onClick={handelDecrease}>Decrease</button>
    </div>
  )
}

function Product(props) {

  return (
    <div className="product">
      <h2>Name: {props.name}</h2>
      <h3>Color: {props.color}</h3>
      <h4>Price: {props.price}</h4>
    </div>
  )
}

/* 
const products = [
    { name: 'Laptop', price: 150000, color: 'Chilver' },
    { name: 'Watch', price: 5000, color: 'Yellow' },
    { name: 'Mobile', price: 13000, color: 'Golden' },
    { name: 'HeadPhone', price: 1200, color: 'Black' },
    { name: 'Lighter', price: 200, color: 'Blue' }
  ]
*/

/* 
      {   
        products.map(product => <Product name={product.name} color={product.color} price={product.price}></Product>)
      }
*/


export default App;
