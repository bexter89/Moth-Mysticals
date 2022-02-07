import React, { useState, useContext } from "react";
import { DisplayContext } from '../../components/DisplayContext';
import vase from "../../../assets/imgs/MM_VASE_WEB.jpg;

const JOYeria = () => {
  return (
    <>
    <div className="col-md-6 order-2 order-md-1 text-center">
      <img
        className="imageCard"
        src={vase}
        alt="vase logo"
        fluid
      />
    </div>
    <div className="col-md-6 text-center" md={{ order: 1 }} lg={{ order: 2 }}>
      <div className="row justify-content-center blurb">
        <a name="joyeria"/><h3>JOYERIA</h3>
          <hr />
          <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, repellendus sunt cum, accusamus officiis expedita aperiam culpa voluptates nam maxime obcaecati, voluptatibus alias magnam ducimus velit labore illo voluptate tenetur?
          Aliquam, optio laudantium vel placeat ad accusantium odio? Asperiores pariatur nisi suscipit ab maxime illum facilis eligendi voluptatem nostrum minima non quis, tempore fugiat odio rem provident est natus neque.
          Illo quia, laboriosam reprehenderit eos similique distinctio accusantium esse amet nisi explicabo, optio exercitationem, fuga sit ipsum error minus ut quos numquam? Assumenda, numquam neque! Consequatur porro nobis impedit veniam!
          Inventore corrupti optio debitis maiores pariatur repudiandae odit modi ducimus necessitatibus reprehenderit iure repellendus doloremque expedita ullam, eaque nam. Commodi provident dolorem accusantium! Officiis autem doloribus quod sunt illo eius. Quas vitae qui esse expedita dignissimos repudiandae, dolores iusto aut est libero rerum vero distinctio aliquid dolore velit fugit molestias optio quae facilis adipisci debitis ab? In quibusdam deserunt distinctio!
          </p>
      </div>
    </div>
  </>
  );
};

export default JOYeria;