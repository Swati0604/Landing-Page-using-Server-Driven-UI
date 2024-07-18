import React, { useEffect, useState } from "react";
// import "./styles.scss"; 

const Navbar = (props) => {

  const {data, attibutes} = props;

  const LeftSection = () => {
    return (
      <div className="left-section valign-wrapper ">
        <div className="logo fw500">
          INTUIT CRAFT.
        </div>
      </div>
    )
  }

  const RightSection = () => {
    return (
      <div className="right-section">
        <div className="menu-items">
            Right Section
        </div>
      </div>
    )
  }

  return (
    <div style={attibutes?.styles}>
      <div className="wrapper valign-wrapper vspace-between">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  )
};

export default Navbar;
