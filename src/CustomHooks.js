import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [searchOn, setSearchOn] = useState(false);

  const onBlur = () => {
    setSearchOn(false);
    setValue("");
  };

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return { onBlur, onChange, value, searchOn, setSearchOn, setValue };
};
