import React from 'react';
import Tab from './Tab';
import {tabData} from "../../data";




const Tabs = props => {
  return (
   <div> 
         <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
            props.tabs.map ( tab => {
              return (
                <Tab  
                  tab = {tab}
                  selectTabHandler={props.selectTabHandler}
                  selectedTab = {props.selectedTab}
                  />
              )
            })}
    </div>
   );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
