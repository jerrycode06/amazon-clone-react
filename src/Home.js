import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          className="home__image"
        />
      </div>
      <div className="home__row">
        <Product
          id="001"
          title="Samsung 324L 3 Star Inverter Frost Free Double Door Refrigerator (RT34T4513S8/HL, Elegant Inox, Convertible)"
          price={31990}
          image="https://images-na.ssl-images-amazon.com/images/I/71MPug2uqTL._SL1500_.jpg"
          rating={5}
        />
        <Product
          id="002"
          title="Mi TV 4X 163.9 cm (65 Inches) 4K Ultra HD Android LED TV (Black)"
          price={54999}
          image="https://m.media-amazon.com/images/I/71jL1oKiPTL._AC_UL480_QL65_.jpg"
          rating={4}
        />
        <Product
          id="003"
          title="Solimo Stainless Steel Induction Bottom Dutch Oven with Glass Lid (20cm, 3.25 litres)"
          price={699}
          image="https://m.media-amazon.com/images/I/81y6Q5R0rjL._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="004"
          title="Redmi Note 9 Pro (Aurora Blue, 6GB RAM, 128GB Storage) - Latest 8nm Snapdragon 720G & Gorilla Glass 5 Protection"
          price={16999}
          image="https://images-na.ssl-images-amazon.com/images/I/81pzsRpE5GL._SL1500_.jpg"
          rating={4}
        />
        <Product
          id="005"
          title="Grabin Men's Attractive Half Sleeve T-Shirt's/T-Shirt for Men's"
          price={299}
          image="https://images-na.ssl-images-amazon.com/images/I/812A6CrX4BL._UL1500_.jpg"
          rating={4}
        />
        <Product
          id="006"
          title="Bosch Aquatak 125 1.5-Watt High Pressure Washer (Green)"
          price={10499}
          image="https://images-na.ssl-images-amazon.com/images/I/717wYrO%2Bb0L._SL1500_.jpg"
          rating={4}
        />
        <Product
          id="007"
          title="Case Plus Digital Smart Backlight Battery Operated Alarm Table Clock with Automatic Sensor, Date & Temperature (White Alarm Clock 1 Pack) (Black) (Black Alarm)"
          price={549}
          image="https://images-na.ssl-images-amazon.com/images/I/61eTydzFs3L._SL1408_.jpg"
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id="008"
          title="ASUS ROG Strix GL10DH 2nd Gen AMD 8-Core Ryzen 7-2700 Gaming Desktop (8GB RAM/512GB NVMe SSD/Windows 10/6GB NVIDIA GeForce GTX 1660 Graphics/with Keyboard & Mouse/Iron Gray), GL10DH-IN012T"
          price={77320}
          image="https://images-na.ssl-images-amazon.com/images/I/81qqkBORfRL._SL1500_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
};

export default Home;
