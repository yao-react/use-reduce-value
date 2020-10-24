import { useEffect, useRef } from 'react';
import equals from 'shallowequal';

const initialDeps = [Symbol('InitialDep')];

export function useReduceValue<V, A>(
  reduce: (acc: A, value: V) => A,
  acc: A,
  value: V,
  deps?: any[]
) {
  const prevValueRef = useRef(value);
  const prevAccRef = useRef(acc);
  const prevDepsRef = useRef<typeof deps>(initialDeps);

  const currAcc = !equals(prevDepsRef.current, deps)
    ? reduce(acc, value)
    : prevValueRef.current !== value
    ? reduce(prevAccRef.current as A, value)
    : prevAccRef.current;

  useEffect(() => {
    prevValueRef.current = value;
    prevAccRef.current = currAcc;
    prevDepsRef.current = deps;
  }, [value, currAcc, ...(deps ?? [])]);

  return currAcc;
}
