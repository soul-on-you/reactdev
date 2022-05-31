import React from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { counterSlice } from "../store/reducers/CounterSlice";

export interface ICounterProps {}

export default function Counter(props: ICounterProps) {
  const { increment, decrement } = counterSlice.actions;
  const { counter } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "20%",
        padding: 20,
      }}
    >
      <h3 style={{marginBottom:20}}>Счетчик: {counter}</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "30%",
          alignItems: "center",
        }}
      >
        <button className="btn" onClick={() => dispatch(increment(1))}>
          Добавить
        </button>
        <button className="btn" onClick={() => dispatch(decrement(1))}>
          Вычесть
        </button>
      </div>
    </div>
  );
}
