import React from "react";
import IU5 from "./IU-5.png";

const Spinner = (props) => {
    return (
        <div style={{
            background: "#ddd",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            zIndex: 999,
            left: 0,
            top: 0,
        }}>
            <img style={{
                alignitems: "center",
                justifycontent: "center",
            }} src={IU5}/>
        </div>
    );
};


export default Spinner;