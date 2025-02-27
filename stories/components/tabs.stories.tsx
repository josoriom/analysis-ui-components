import { useState } from 'react';

import { Tabs, TabItem } from '@/components';

export default {
  title: 'Components / Tabs',
};

export function Horizontal() {
  const items: Array<TabItem> = [
    { id: '1h', title: '1H', content: 'Hello, World! [a]' },
    { id: '13c', title: '13C', content: 'Hello, World! [b]' },
    { id: '1h,1h', title: '1H,1H', content: 'Hello, World! [c]' },
    { id: '1h,13c', title: '1H,13C', content: 'Hello, World! [d]' },
  ];

  const [state, setState] = useState(items[1]);

  function handleClick(item: TabItem) {
    setState(item);
  }

  return (
    <Tabs
      orientation="horizontal"
      items={items}
      opened={state}
      onClick={handleClick}
    />
  );
}

export function ManyTabs({ orientation }) {
  const items: Array<TabItem> = [
    { id: 'a', title: '1H', content: 'Hello, World! [a]' },
    { id: 'b', title: '13C', content: 'Hello, World! [b]' },
    { id: 'c', title: '1H,1H', content: 'Hello, World! [c]' },
    { id: 'd', title: '1H,13C', content: 'Hello, World! [d]' },
    { id: 'e', title: '1H,13C', content: 'Hello, World! [e]' },
    { id: 'f', title: '13C', content: 'Hello, World! [f]' },
    { id: 'g', title: '1H,1H', content: 'Hello, World! [g]' },
    { id: 'h', title: '1H,13C', content: 'Hello, World! [h]' },
    { id: 'i', title: '1H,1H', content: 'Hello, World! [i]' },
    { id: 'j', title: '13C', content: 'Hello, World! [j]' },
    { id: 'k', title: '1H,13C', content: 'Hello, World! [k]' },
    { id: 'l', title: '1H,13C', content: 'Hello, World! [l]' },
    { id: 'm', title: '13C', content: 'Hello, World! [m]' },
    { id: 'n', title: '1H,1H', content: 'Hello, World! [n]' },
    { id: 'o', title: '1H,13C', content: 'Hello, World! [o]' },
    { id: 'p', title: '1H,13C', content: 'Hello, World! [p]' },
  ];

  const [state, setState] = useState(items[1]);

  function handleClick(item: TabItem) {
    setState(item);
  }

  return (
    <Tabs
      orientation={orientation}
      items={items}
      opened={state}
      onClick={handleClick}
    />
  );
}
ManyTabs.args = {
  orientation: 'horizontal',
};
export function Vertical() {
  const items: Array<TabItem> = [
    { id: 'controllers', title: 'Controllers', content: 'Hello, World!' },
    {
      id: 'formatting',
      title: 'Controllers a',
      content: 'Hello, World!',
    },
    { id: 'display', title: 'Controllers', content: 'Hello, World!' },
  ];

  const [state, setState] = useState(items[1]);

  function handleClick(item: TabItem) {
    setState(item);
  }

  return (
    <Tabs
      orientation="vertical"
      items={items}
      opened={state}
      onClick={handleClick}
    />
  );
}
