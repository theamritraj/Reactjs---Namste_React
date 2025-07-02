import React from "react";
import './RestaurantCard.css'
import dish_1 from '../../assets/images/dish/1.png';
import dish_2 from '../../assets/images/dish/2.png';
import dish_3 from '../../assets/images/dish/3.png';
import dish_4 from '../../assets/images/dish/4.png';
import dish_5 from '../../assets/images/dish/5.png';
import dish_6 from '../../assets/images/dish/6.png';

const RestaurantCard = ()=>{
return(

  <>
  <div className="resto-card">
    <div className="card">
      <div className="card-header">
        <img src={dish_1} alt="" />

      </div>
      <div className="card-body">
        <p>Burgeer King</p>
        <p>Burgers, American</p>
        <p>4.2 Stars</p>
      </div>
    </div>
  </div>
  </>
)
}
export default RestaurantCard;
