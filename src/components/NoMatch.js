import React from "react";
import { useNavigate } from 'react-router-dom';
import skull from "../../assets/imgs/MM_skulls_WEB.jpg";

const NoMatch = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/home');
  };

  return (
    <>
      <div md="6" className="col text-center">
        <div className="row justify-content-center blurb">
            <h3>Nothing to see here...</h3>
            <hr />
            <p className="lead blurb">
              Oops! Thats not quite right....
              <br/><br/>
              <span>you've stumbled upon a page that does not exist!</span>
              <br/><br/>
              <a onClick={handleHomeClick} >return home</a>
            </p>
        </div>
      </div>
      <div className="col-md-6 text-center">
        <img src={skull} className="imageCard" alt="skull logo" fluid />
      </div>
    </>
  );
};

export default NoMatch;