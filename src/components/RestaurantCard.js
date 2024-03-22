import React from "react";
import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200"
      style={{
        backgroundColor: "#f0f0f0",
        width: "250px",
        height: "400px",
        overflow: "hidden",
      }}
    >
      <img
        alt="res-img"
        className="rounded-lg"
        style={{ width: "100%", height: "180px" }}
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData?.info?.sla?.deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
