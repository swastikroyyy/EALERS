import { Tabs } from "antd";

import "./All.css";
import React from "react";
import All from "./All";
const { TabPane } = Tabs;

const Items = () => {
  const operations = <div className="me-4 d-flex align-items-center justify-content-center" style={{background:"#E4E8EB", width: "40px",
  height: "40px"}}> <img
  alt=""
  src="./images/arrow.png"
  width="15"
  height="15"
  className="d-flex align-items-center justify-content-center "
  style={{  boxSizing: "border-box",
  

   }}
  
/></div>
  return (
    <Tabs defaultActiveKey="1" style={{ color: "black" }} tabBarExtraContent={operations}>
      <TabPane
        tab={
          <span
            style={{
              marginLeft: "80px",
              marginRight: "80px",
              fontWeight: "bold",
            }}
          >
            <img
              alt=""
              src="./images/all.svg"
              width="20"
              height="20"
              className="d-inline-block align-middle"
              
            />&nbsp;
             All
          </span>
        }
        key="1"
      >
        <All idx={0} />
      </TabPane>
      <TabPane
        tab={
          <span
            style={{
              marginLeft: "80px",
              marginRight: "80px",
              fontWeight: "bold",
            }}
          >
            <img
              alt=""
              src="./images/menu.png"
              width="20"
              height="20"
              className="d-inline-block align-middle"
             
            />&nbsp;
            Menu 1
          </span>
        }
        key="2"
      >
        <All idx={1} />
      </TabPane>
      <TabPane
        tab={
          <span
            style={{
              marginLeft: "80px",
              marginRight: "80px",
              fontWeight: "bold",
            }}
          >
            <img
              alt=""
              src="./images/menu.png"
              width="20"
              height="20"
              className="d-inline-block align-middle"
              
            />&nbsp;
            Menu 2
          </span>
        }
        key="3"
      >
        <All idx={2} />
      </TabPane>
      <TabPane
        tab={
          <span
            style={{
              marginLeft: "80px",
              marginRight: "80px",
              fontWeight: "bold",
            }}
          >
            <img
              alt=""
              src="./images/menu.png"
              width="20"
              height="20"
              className="d-inline-block align-middle"
             
            />&nbsp;
            Menu 3
          </span>
        }
        key="4"
      >
        <All idx={3} />
      </TabPane>
      <TabPane
        tab={
          <span
            style={{
              marginLeft: "80px",
              marginRight: "80px",
              fontWeight: "bold",
            }}
          >
            <img
              alt=""
              src="./images/menu.png"
              width="20"
              height="20"
              className="d-inline-block align-middle"
              
            />&nbsp;
            Menu 4
          </span>
        }
        key="5"
      >
        <All idx={4} />
      </TabPane>
    </Tabs>
  );
};

export default Items;
