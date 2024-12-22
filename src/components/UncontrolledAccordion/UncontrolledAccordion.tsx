import React, { useState } from 'react'

type UncontrolledAccordionPropsType = {
  titleValue: string
}

// export function Accordion(props: AccordionPropsType) {
//   console.log("accordion render")
//   if (props.collapsed) {
//     return (
//       <div>
//         <AccordionTitle title={props.titleValue} />
//       </div>
//     )
//   }
//   return (
//     <div>
//       <AccordionTitle title={props.titleValue} />
//       <AccordionBody />
//     </div>
//   )
// }

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

  const [collapsed, setCollapsed] = useState(true);

  console.log("accordion render")
    return (
      <div>
        <AccordionTitle title={props.titleValue} onClickHandler={() => {setCollapsed(!collapsed)}}/>
        {/* условный рендеринг */}
        {!collapsed && <AccordionBody />}
      </div>
    )
}

type AccordionTitlePropsType = {
  title: string,
  onClickHandler: () => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle render")
  return <h3 onClick={props.onClickHandler}>{props.title}</h3>
}

function AccordionBody() {
  console.log("AccordionBody render")
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}