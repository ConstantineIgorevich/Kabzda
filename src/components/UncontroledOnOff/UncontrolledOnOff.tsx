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
    onChange: (on: boolean) => void;
};




function UncontrolledOnOff (props: PropsType) {

    console.log("OnOff rendering");

    const [on, setOn] = useState(false);

    // console.log("on:", on);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
        cursor: "pointer",
    };
    
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red",
        cursor: "pointer",
    };
    
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    };

    const onClicked = () => {
        props.onChange(true);
        setOn(true);
    }
    const offClicked = () => {
        props.onChange(false);
        setOn(false);
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default UncontrolledOnOff;