import React from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Utils/useRestaurantMenu';


const RestaurantMenu = () => {
    const { resId }= useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log(resId)

    if(resInfo === null) return <Shimmer/>
    
    const { name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)
  

  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h3>{cuisines} - {costForTwoMessage}</h3>
      <h1>Menu</h1>
      <ul>
        {
            itemCards.map((item) => {
                return(
                    <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.defaultPrice/100 || item.card.info.price/100} </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default RestaurantMenu;
