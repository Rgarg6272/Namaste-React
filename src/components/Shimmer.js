import React from "react";

const Shimmer = () => {
  const shimmerUi = [
    {
      title: "card",
    },
    {
      title: "card",
    },
    {
      title: "card",
    },
    {
      title: "card",
    },
    {
      title: "card",
    },
    {
      title: "card",
    },
    {
      title: "card",
    },
  ];
  return (
    <div className="flex flex-wrap justify-around">
      {shimmerUi.map((shimmer, index) => {
        return (
          <div
            key={index}
            className="m-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200"
            style={{
              backgroundColor: "#f0f0f0",
              width: "250px",
              height: "400px",
              overflow: "hidden",
            }}
          >
            {shimmer.title}
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
