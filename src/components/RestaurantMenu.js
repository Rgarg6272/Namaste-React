import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../Utils/constants';


const RestaurantMenu = () => {
    const[resInfo, setResInfo] = useState(null);
    const { resId }= useParams();
    console.log(resId)

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
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
