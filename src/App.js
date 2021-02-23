import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const adobeProducts = [
    {name: 'Acrobat Pro', price:'$9.99'},
    {name: 'Photoshop', price:'$99.99'},
    {name: 'Premiere Pro', price:'$249.99'},
    {name: 'Illustrator', price:'$49.99'},
    {name: 'InDesign', price:'$0.99'},
    {name: 'After Effects', price:'$79.99'},
    {name: 'Animate', price:'$19.99'}
  ]
  const names = adobeProducts.map(product=> product.name)
  return (
    <div className="App">
      <header className="App-header">
        {
          names.map(name=> <Name productName={name}></Name>)
        }
        <p> hello I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        {
          adobeProducts.map(pd=><Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}
function Users() {
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      setUser(data)})
  })
  return(
    <ul>
    {
      user.map(name=><li>{name.name} : {name.username} : {name.phone}</li>)
    }
    </ul>
  )
}



function Counter() {
  const [count, setCount] = useState(0);
  return (<div>
  <h1>Count: {count} </h1>
  <button onClick={() => {
    setCount(count +1)
  }}>Increase</button>
  <button onClick={()=> setCount(count - 1)}>Decrease</button>
  </div>
  )
}


function Name(props) {
  return(
      <h3>{props.productName}</h3>
  )
}

function Product(props) {
  const productStyle = {
    border:'2px solid red',
    borderRadius: '5px',
    backgroundColor:'gray',
    height: '220px',
    width: '220px',
    float: 'left',
    margin: '5px'
    }
    const {name,price} = props.product
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
  
}

export default App;
