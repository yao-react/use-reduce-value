import * as React from 'react';
import { useState } from 'react';
import { Meta } from '@storybook/react';
import { useReduceValue } from '../src';

const meta: Meta = {
  title: 'use-reduce-value',
};

export default meta;

export const UseReduceValue = () => {
  const [index, setIndex] = useState(0);
  const [dep, setDep] = useState(0);
  const logs = useReduceValue<number, number[]>(
    (acc, a) => [...acc, a],
    [],
    index,
    [dep]
  );
  return (
    <div>
      <button onClick={() => setIndex(x => x + 1)}>inc index</button>
      <span> </span>
      <button onClick={() => setDep(x => x + 1)}>change dep</button>
      <p>result: {String(logs)}</p>
    </div>
  );
};
