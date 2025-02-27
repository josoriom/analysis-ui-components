import { useState } from 'react';

import {
  Accordion,
  AccordionProvider,
  SplitPane,
  SplitPaneProps,
  SplitPaneSize,
} from '@/components';

export default {
  title: 'Components / SplitPane',
};

const directionArgType = {
  options: ['horizontal', 'vertical'],
  control: { type: 'radio' },
};

const sideArgType = {
  options: ['start', 'end'],
  control: { type: 'radio' },
};

export function Control(props: Omit<SplitPaneProps, 'children'>) {
  const [toggle, setToggle] = useState<boolean | null>(null);
  const [resize, setResize] = useState<SplitPaneSize | null>(null);
  return (
    <div style={{ backgroundColor: 'greenyellow', height: 400, width: 600 }}>
      <SplitPane onToggle={setToggle} onResize={setResize} {...props}>
        <div>A</div>
        <div>
          <div>
            {'Last toggle event: '}
            {toggle === null ? 'none' : toggle ? 'true' : 'false'}
          </div>
          <div>
            {'Last resize event: '}
            {resize === null ? 'none' : resize}
          </div>
        </div>
      </SplitPane>
    </div>
  );
}

Control.args = {
  initialSize: '50%',
  initialClosed: false,
};

Control.argTypes = {
  direction: directionArgType,
  controlledSide: sideArgType,
};

export function Vertical() {
  return (
    <div style={{ backgroundColor: 'rgba(165, 180, 252)', height: 400 }}>
      <SplitPane direction="vertical" initialSize="200px">
        <div>A</div>
        <div>B</div>
      </SplitPane>
    </div>
  );
}

export function Horizontal() {
  return (
    <div style={{ backgroundColor: 'rgba(147, 197, 253)', height: 200 }}>
      <SplitPane direction="horizontal" initialSize="30%">
        <div>A</div>
        <div>B</div>
      </SplitPane>
    </div>
  );
}

export function Inception() {
  return (
    <div style={{ backgroundColor: 'rgba(209, 213, 219)', height: 400 }}>
      <SplitPane direction="horizontal">
        <SplitPane direction="vertical">
          <p>A</p>

          <AccordionProvider>
            <Accordion>
              <Accordion.Item title="A">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis distinctio ducimus beatae iure! Vel, laudantium.
                  Cum, aliquam officiis numquam rerum voluptatem repellat
                  quibusdam incidunt enim officia tenetur corrupti qui quia.
                </p>
              </Accordion.Item>
              <Accordion.Item title="B">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis distinctio ducimus beatae iure! Vel, laudantium.
                  Cum, aliquam officiis numquam rerum voluptatem repellat
                  quibusdam incidunt enim officia tenetur corrupti qui quia.
                </p>
              </Accordion.Item>
              <Accordion.Item title="C">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis distinctio ducimus beatae iure! Vel, laudantium.
                  Cum, aliquam officiis numquam rerum voluptatem repellat
                  quibusdam incidunt enim officia tenetur corrupti qui quia.
                </p>
              </Accordion.Item>
            </Accordion>
          </AccordionProvider>
        </SplitPane>
        <SplitPane direction="vertical">
          <p>C</p>
          <SplitPane direction="vertical">
            <p>D</p>
            <p>E</p>
          </SplitPane>
        </SplitPane>
      </SplitPane>
    </div>
  );
}

export function WithEvilChild() {
  return (
    <div
      style={{
        backgroundColor: 'rgba(251, 207, 232)',
        width: 800,
        height: 300,
      }}
    >
      <SplitPane direction="horizontal" initialSize="300px">
        <div>I am a good child. 😊</div>
        <div
          style={{
            backgroundColor: 'rgba(252, 165, 165)',
            width: 300,
            whiteSpace: 'nowrap',
            overflow: 'auto',
          }}
        >
          I am an evil child. My size will stay at 300px 😈
        </div>
      </SplitPane>
    </div>
  );
}

export function WithMinimalSize(props: Omit<SplitPaneProps, 'children'>) {
  const { controlledSide, initialClosed } = props;
  const nbPx = String(initialClosed);
  return (
    <div
      style={{
        width: '100%',
        height: 'calc(100vh - 2.1rem)',
      }}
    >
      <SplitPane {...props}>
        <div style={{ backgroundColor: 'rgba(252, 165, 165)', width: '100%' }}>
          {controlledSide === 'start' &&
            `Close when container size less Than ${nbPx}px`}
        </div>
        <div style={{ backgroundColor: 'rgba(147, 197, 253)', width: '100%' }}>
          {controlledSide === 'end' &&
            `Close when container size less Than ${nbPx}px`}
        </div>
      </SplitPane>
    </div>
  );
}

WithMinimalSize.args = {
  initialSize: '500px',
  initialClosed: 600,
};

WithMinimalSize.argTypes = {
  direction: directionArgType,
  controlledSide: sideArgType,
};
