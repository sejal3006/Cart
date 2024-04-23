import { useState } from "react";
import "./App.css";
import Navbar  from "./components/Navbar";
import Card from "./components/Card.js";

function App() {
const [product, setProduct] = useState([
  {
    id : 1,
    imgurl : "https://www.course-api.com/images/cart/phone-1.png",
    name : "Samsung Galaxy S23",
    Quantity : 0,
    price : 50000,
  },
  {
    id : 2,
    imgurl : "https://www.course-api.com/images/cart/phone-2.png",
    name : "Samsung Galaxy pro",
    Quantity : 0,
    price : 30000,
  },
  {
    id : 3,
    imgurl : "https://www.course-api.com/images/cart/phone-3.png",
    name : "Xiaomi Redmi Note 2",
    Quantity : 0,
    price : 50000,
  },
  {
    id : 4,
    imgurl : "https://www.course-api.com/images/cart/phone-4.png",
    name : "POCO M6 RRO Max ",
    Quantity : 0,
    price : 25000,
  }
]);

const [quantity,setQuantity] = useState(0);

  return (
    <div className="App">
      <Navbar quantity={quantity}/>

      <Card
       product= {product}
        setProduct={setProduct}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}

export default App;