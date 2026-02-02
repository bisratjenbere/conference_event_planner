import React, { useState, useEffect } from 'react';
import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {
  

  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <h3 className="preheading">Total cost for the event</h3>
        </div>
        <div>
          <h2 id="pre_fee_cost_display" className="price">
           
          </h2>
         
            <div>
             
            </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCost;
