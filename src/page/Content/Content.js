import React from "react";
import "./Content.css";
import Footer from '../Footer/Footer'

const Content = () => {
  return (
    <div className="Content">
      <div className="ContentRigth">
        <div className="ContenImg">
          <img className="logo" src="img/logo/logo.png" alt="" />
        </div>
        <div className="ContenGroup1">
          <h3>Lorem ipsum dolor sit asmet?</h3>
          <div className="Contentextall">
            <p className="Contentext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </p>
          </div>
        </div>
        <div className="ContenGroup2">
          <div className="ListTextConten">
            <h3>Lorem ipsum dolor sit amet</h3>
              <div className="listImg">
              <div className="TextImg">
                <img src="img/logo/img1.png" alt="" className="imglist" />
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc at
                </p>
              </div>
              <p>
                ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
                est ullamcorper id. Aenean consequat condimentum velit ut
                tempor. Nam porta massa in metus bibendum congue. Pellentesque
                ultrices vestibulum mattis.
              </p>
            </div>
          </div>
          <div className="ListTextConten">
            <h3>Lorem ipsum dolor sit amet</h3>
              <div className="listImg">
              <div className="TextImg">
                <img src="img/logo/img2.png" alt="" className="imglist" />
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc at
                </p>
              </div>
              <p>
                ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
                est ullamcorper id. Aenean consequat condimentum velit ut
                tempor. Nam porta massa in metus bibendum congue. Pellentesque
                ultrices vestibulum mattis.
              </p>
            </div>
          </div>
          <div className="ListTextConten">
            <h3>Lorem ipsum dolor sit amet</h3>
              <div className="listImg">
              <div className="TextImg">
                <img src="img/logo/img3.png" alt="" className="imglist" />
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc at
                </p>
              </div>
              <p>
                ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
                est ullamcorper id. Aenean consequat condimentum velit ut
                tempor. Nam porta massa in metus bibendum congue. Pellentesque
                ultrices vestibulum mattis.
              </p>
            </div>
          </div>
        </div>
          <div>
            <Footer></Footer>
          </div>
      </div>
    </div>
  );
};

export default Content;
