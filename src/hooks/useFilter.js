import { useState } from "react";

export default (initialVal) => {
  const [filter, setFilter] = useState(initialVal);
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  return [filter, handleChange];
};
