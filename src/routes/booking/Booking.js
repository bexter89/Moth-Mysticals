import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { DisplayContext } from "../../components/DisplayContext";
import './booking.css'
import lungs from "../../../assets/imgs/MM_LUNGS_WEB.jpg";

const Booking = () => {
  const { displayNavState } = useContext(DisplayContext);
  const [displayNav, setDisplayNav] = displayNavState;
  useEffect(() => {
    setDisplayNav(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Booking - Moth Mysticals</title>
        <meta
          name="description"
          content="Book a Service"
        />
      </Helmet>
      <a name="about"/>
      <h1>BOOKING</h1>
      <hr />
      <div className="col-md-6 text-center">
        <div className="row justify-content-center">
          <p className="lead blurb">
            Please reach out via e-mail for inquiries:
            <br />
            <a href="mailto:mothmysticals@gmail.com?subject=MM Booking Inquiry&body=Hello Gabee! I'd like information on booking a session. I'm interested in...">
              Send Inquiry
            </a>
          </p>
          <section className='blurb'>
            <h2>TAROT OFFERINGS:</h2>
            <dl>
              <dt>
                <span>$88</span> - 1hr tarot reading
              </dt>
              <dt>
                <span>$44</span> - 30min tarot reading
              </dt>
            </dl>
            Pay to @mothmysticals (Venmo preferred).
            <br />
            Tips are always welcome but never required.
            <br />
            <span>
              Please inquire for community rates for LGBTQIA/BIPOC. 🌈
            </span>
            <br />
            <br />
            <strong>
              “No shows” for appointments will be charged in full; no
              exceptions. Please cancel at least 24hrs before our scheduled
              meeting time.
            </strong>
          </section>
        </div>
      </div>
      <div md="6" className="text-center">
        <img src={lungs} className="imageCard fluid" alt="lungs"/>
      </div>
    </>
  );
};

export default Booking;
