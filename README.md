# @yao-react/use-reduce-value

React hook to reduce changed values.

## Installation

```
npm install @yao-react/use-reduce-value
```

```
yarn add @yao-react/use-reduce-value
```

## Getting started

```tsx
export const Demo = () => {
  const [index, setIndex] = useState(0);
  const indexes = useReduceValue(
    (acc, a) => [...acc, a], // reduce
    [], // initAcc
    index // value
  );
  return (
    <div>
      <button onClick={() => setIndex(x => x + 1)}>inc index</button>
      <p>Indexes: {String(indexes)}</p>
    </div>
  );
};
```

## API

| name    | type               | required | description |
| ------- | ------------------ | -------- | ----------- |
| reduce  | (acc, curr) => acc | true     |             |
| initAcc | any                | true     |             |
| value   | any                | true     |             |
| deps    | any[]              | false    |             |

## More words

- only changed value will trigger reduce to produce new acc
- if you want to treat continuous same values as different values for this hook, you can wrap the value as `[value]`
