import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-3 items-center justify-center w-full h-screen">
      <button
        className="border-2 border-green-500 p-2 rounded-md"
        onClick={() => dispatch(increment())}
      >
        {" "}
        Increment
      </button>
      <button
        className="border-2 border-green-500 p-2 rounded-md"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        {" "}
        Increment By 5
      </button>
      <h2>{count}</h2>
      <button
        className="border-2 border-red-500 p-2  rounded-md"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
