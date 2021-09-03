import { useState } from "react";
function useToggle(initialState = false) {
  const [state, setstate] = useState(initialState);
  const toggle = () => {
    setstate(!state);
  };
  const changeTrue = () => {
    setstate(true);
  };
  const changeFalse = () => {
    setstate(false);
  };
  return [state, toggle, changeTrue, changeFalse];
}
export default useToggle;
