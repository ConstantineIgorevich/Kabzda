

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5,
};

export function Rating(props: RatingPropsType) {
  console.log("rating render")

  return (
    <div>
      <Star selected={props.value > 0} />
      <Star selected={props.value > 1} />
      <Star selected={props.value > 2} />
      <Star selected={props.value > 3} />
      <Star selected={props.value > 4} />
    </div>
  );
}

type StarPropsType = {
  selected: boolean,
}

function Star(props: StarPropsType) {
  console.log("star render")
  if (props.selected === true) {
    return <span><b>star</b> </span>
  } else {
    return <span>star </span>
  }
}