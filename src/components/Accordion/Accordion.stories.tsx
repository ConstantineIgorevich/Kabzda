import { Meta } from '@storybook/react/*';

import { Accordion } from './Accordion';
import { useState } from 'react';
 
const meta: Meta<typeof Accordion> = {
  component: Accordion,
};
export default meta;

export const OpenedAccordion = () => {
  return ( <div></div>
  // <Accordion collapsed={false} titleValue='Open accordion'/>
)
}

export const CollapsedAccordion = () => {
  return <div></div>
}

export const AccordionDemo = () => {

const [collapsed, setCollapsed] = useState<boolean>(false);

  return <div></div>
}