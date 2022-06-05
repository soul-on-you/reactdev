import React from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { counterSlice } from "../store/reducers/CounterSlice";
import Button from "./UI/Button/Button";

export interface ICounterProps {}

export default function Counter(props: ICounterProps) {
  const { increment, decrement } = counterSlice.actions;
  const { counter } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="counter__container">
      <h3 style={{ marginBottom: 20 }}>Счетчик: {counter}</h3>
      <div className="counter__wrapper">
        <Button onClick={() => dispatch(increment(1))}>Добавить</Button>
        <Button onClick={() => dispatch(decrement(1))}>Вычесть</Button>
      </div>
    </div>
  );
}
