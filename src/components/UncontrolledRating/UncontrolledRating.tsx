import { useState } from 'react';

type ValueType = 0 | 1 | 2 | 3 | 4 | 5;


export function UncontrolledRating() {
  console.log("rating render");

  const [value, setValue] = useState<ValueType>(0)

  return (
    <div>
      <Star selected={value > 0} onClickHandler={() => setValue(1)}/>
      <Star selected={value > 1} onClickHandler={() => setValue(2)}/>
      <Star selected={value > 2} onClickHandler={() => setValue(3)}/>
      <Star selected={value > 3} onClickHandler={() => setValue(4)}/>
      <Star selected={value > 4} onClickHandler={() => setValue(5)}/>
    </div>
  );
}

type StarPropsType = {
  selected: boolean;
  onClickHandler: () => void;
}

function Star(props: StarPropsType) {
  console.log("star render")
  return (
    <span onClick={props.onClickHandler}>
      {props.selected ? <b>star </b> : 'star '}
    </span>
  )
}