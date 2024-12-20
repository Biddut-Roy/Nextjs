import { error } from "console";
import React from "react";

const Homepage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    // cache: "force-cache",
    // cache: "no-store", // get a data all time catch
    next: {
      revalidate: 5,
    },
  });
  const shoes = await res.json();

  return (
    <div className="">
      <ul className="grid grid-cols-3 gap-4">
        {shoes.map((shoes) => (
          <div key={shoes.id} className="card bg-base-100  shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        ))}
        ;
      </ul>
    </div>
  );
};

export default Homepage;
