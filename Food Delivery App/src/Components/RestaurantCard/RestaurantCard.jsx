import React from "react";
import './RestaurantCard.css'
//import dish_1 from '../../assets/images/dish/burger.jpg';
import dish_2 from '../../assets/images/dish/2.png';
import dish_3 from '../../assets/images/dish/3.png';
import dish_4 from '../../assets/images/dish/4.png';
import dish_5 from '../../assets/images/dish/5.png';
import dish_6 from '../../assets/images/dish/6.png';
import dish_7 from '../../assets/images/dish/1.png';

const RestaurantCard = ()=>{
  const burgerKing = {
    name : "Burger King",
    Image: "../../assets/images/dish/6.png",
    cusines : ["Burger", "American"],
    rating : "4.2"
  }
return(

  <>
  <div className="resto-card">
    <div className="card">
      <div className="card-header">
        <img src={dish_5} alt="" />
      </div>
      <div className="card-body">
       <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(",")}</h3>
        <h4>{burgerKing.rating}</h4>
      </div>
    </div>

    <div className="card">
      <div className="card-header">
        <img src={dish_6} alt="" />
      </div>
      <div className="card-body">
       <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(",")}</h3>
        <h4>{burgerKing.rating}</h4>
      </div>
    </div>

    <div className="card">
      <div className="card-header">
        <img src={dish_2} alt="" />
      </div>
      <div className="card-body">
       <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(",")}</h3>
        <h4>{burgerKing.rating}</h4>
      </div>
    </div>

    <div className="card">
      <div className="card-header">
        <img src={dish_3} alt="" />
      </div>
      <div className="card-body">
       <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(",")}</h3>
        <h4>{burgerKing.rating}</h4>
      </div>
    </div>

    <div className="card">
      <div className="card-header">
        <img src={dish_4} alt="" />
      </div>
      <div className="card-body">
       <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(",")}</h3>
        <h4>{burgerKing.rating}</h4>
      </div>
    </div>

    <div className="card">
      <div className="card-header">
        <img src={dish_6} alt="" />
      </div>
      <div className="card-body">
       <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(",")}</h3>
        <h4>{burgerKing.rating}</h4>
      </div>
    </div>

    <div className="card">
      <div className="card-header">
        <img src={dish_7} alt="" />
      </div>
      <div className="card-body">
       <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(",")}</h3>
        <h4>{burgerKing.rating}</h4>
      </div>
    </div>

    <div className="card">
      <div className="card-header">
        <img src={dish_6} alt="" />
      </div>
      <div className="card-body">
       <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(",")}</h3>
        <h4>{burgerKing.rating}</h4>
      </div>
    </div>


    <div className="card">
      <div className="card-header">
        <img src={dish_5} alt="" />
      </div>
      <div className="card-body">
       <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(",")}</h3>
        <h4>{burgerKing.rating}</h4>
      </div>
    </div>


    <div className="card">
      <div className="card-header">
        <img src={dish_4} alt="" />
      </div>
      <div className="card-body">
       <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(",")}</h3>
        <h4>{burgerKing.rating}</h4>
      </div>
    </div>

    <div className="card">
      <div className="card-header">
        <img src={dish_3} alt="" />
      </div>
      <div className="card-body">
       <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(",")}</h3>
        <h4>{burgerKing.rating}</h4>
      </div>
    </div>

    <div className="card">
      <div className="card-header">
        <img src={dish_2} alt="" />
      </div>
      <div className="card-body">
       <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(",")}</h3>
        <h4>{burgerKing.rating}</h4>
      </div>
    </div>
  </div>
  </>
)
}
export default RestaurantCard;
