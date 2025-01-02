import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating, RatingValueType } from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';
import UncontrolledOnOff from './components/UncontroledOnOff/UncontrolledOnOff';


function App() {

  console.log("App rendering")

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className='App'>
      {/* <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} />*/}
      <OnOff on={switchOn} onChange={setSwitchOn}/>
      <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
      <UncontrolledAccordion titleValue={'Title'} />
      <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
      <UncontrolledRating />
      <Rating value={ratingValue} onClick={setRatingValue}/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string,
}

function PageTitle(props: PageTitlePropsType) {
  return (
    <h1>
      {props.title}
    </ h1>
  )
}

export default App;
