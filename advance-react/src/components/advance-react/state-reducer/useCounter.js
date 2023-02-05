import { useReducer } from "react";
const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: state.count - 1,
      };

    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};
export default function useCounter(
  { initial = 0 } = {},
  reducer = counterReducer
) {
  const [{ count }, dispatch] = useReducer(reducer, { count: initial });
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  return {
    count,
    handleIncrement,
    handleDecrement,
  };
}
