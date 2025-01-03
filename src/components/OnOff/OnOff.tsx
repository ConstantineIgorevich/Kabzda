// type OnOffPropsType = {
//     enable: boolean;
// }

import { useState } from 'react';

// export const OnOff = (props: OnOffPropsType) => {

//     const color = props.enable ? 'green' : 'red';

//     return (
//     <div style={{display: 'flex'}}>
//         {props.enable ? <button style={{backgroundColor: color}}>On</button> : <button>On</button>}
//         {props.enable ? <button>Off</button> : <button style={{backgroundColor: color}}>Off</button>}
//         <div style={{width: '30px', height: '30px', border: '1px solid #000000', borderRadius: '50%', backgroundColor: color}}></div>
//     </div>)
// }

type PropsType = {
    on: boolean;
    onChange: (on: boolean) => void;
};




function OnOff (props: PropsType) {

    console.log("on:", props.on);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white",
        cursor: "pointer",
    };
    
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red",
        cursor: "pointer",
    };
    
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red",
    };

    return (
        <div>
            <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.onChange(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default OnOff;