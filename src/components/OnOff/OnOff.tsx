type OnOffPropsType = {
    enable: boolean;
}

export const OnOff = (props: OnOffPropsType) => {

    const color = props.enable ? 'green' : 'red';

    return (
    <div style={{display: 'flex'}}>
        {props.enable ? <button style={{backgroundColor: color}}>On</button> : <button>On</button>}
        {props.enable ? <button>Off</button> : <button style={{backgroundColor: color}}>Off</button>}
        <div style={{width: '30px', height: '30px', border: '1px solid #000000', borderRadius: '50%', backgroundColor: color}}></div>
    </div>)
}