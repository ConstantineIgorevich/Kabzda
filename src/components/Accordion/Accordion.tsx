import React from 'react'

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
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

export function Accordion(props: AccordionPropsType) {
  console.log("accordion render")
    return (
      <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        {/* условный рендеринг */}
        {!props.collapsed && <AccordionBody />}
      </div>
    )
}

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle render")
  return <h3 onClick={props.onChange}>{props.title}</h3>
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