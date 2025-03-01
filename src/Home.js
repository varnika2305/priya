import React from "react";
import "./Home.css";
import tshirt1 from'./Black T-Shirt.webp';
import tshirt2 from'./Green Sweater.webp';

import tshirt3 from'./Blue Jacket.webp';

import tshirt4 from'./Red Hoodie.webp';

const Navbar = () => (
  
  <nav className="navbar">
    <div className='Homepage'>
      <h1>WELCOME</h1>
    <h2>jiomart</h2>
  </div>
  <div className="parent">
    <div className="roote">
      <p>HOME</p>
    </div>
    </div>
    <div className="root2">
      <p>CONTACT</p>
    </div>
    <div className="r
coot3">
    <p>ABOUT</p>
  </div>
  <div className="root4">
  <p>LOGIN</p>
</div>
<h2></h2>
</nav>

);

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card">
          <img src={tshirt1} alt="Black T-Shirt" />
          <h3>Black T-Shirt</h3>
          <p>$1900</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <img src={tshirt2} alt="Green Sweater" />
          <h3>Green Sweater</h3>
          <p>$2500</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <img src={tshirt3} alt="Blue Jacket" />
          <h3>Blue Jacket</h3>
          <p>$1650</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <img src={tshirt4} alt="Red Hoodie" />
          <h3>Red Hoodie</h3>
          <p>$2800</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

