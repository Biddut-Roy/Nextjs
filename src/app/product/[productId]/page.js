import React from "react";

const DynamicProduct = ({ params }) => {
  const { productId } = params;

  return <div>Dynamic Product page: {productId} </div>;
};

export default DynamicProduct;
