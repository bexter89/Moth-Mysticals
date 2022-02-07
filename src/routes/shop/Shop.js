import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet"
import { DisplayContext } from '../../components/DisplayContext';
import vase from "../../../assets/imgs/MM_VASE_WEB.jpg";

const Shop = () => {
  const { displayNavState } = useContext(DisplayContext);
  const [displayNav, setDisplayNav] = displayNavState;

  useEffect(() => {
    setDisplayNav(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Shop - Moth Mysticals</title>
        <meta
          name="description"
          content="Shop Moth Mysticals"
        />
      </Helmet>
      <h1>SHOP</h1>
      <hr />
      <div className="col-md-6 text-center">
        <img src={vase} className="imageCard" alt="vase" fluid />
      </div>
      <div className="col-md-6 text-center">
        <div className="row justify-content-center blurb">
            <section>
            <h2>JOYería</h2>
              some text will eventually go here!
            </section>
        </div>
      </div>
    </>
  );
};

export default Shop;