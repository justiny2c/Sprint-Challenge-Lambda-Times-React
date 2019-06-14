import React from 'react';
import styled from 'styled-components';

const Tab = props => { 
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/



  return (
    <Tabs
      className = "tabs">
    <div
      className={props.tab === props.selectedTab ? "tab active-tab" : "tab"}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
    </Tabs>
  );

}

const Tabs = styled.div `
  display: flex;
  flex-flow:
  // width: 100%;
`

// Make sure you include PropTypes on your props.

export default Tab;
