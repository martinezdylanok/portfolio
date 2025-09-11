import React, { useState } from "react";

export const useDynamicInputStyling = () => {
   const [inputValue, setInputValue] = useState("");

   const handleInputChange = () => {
      return (event: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(event.target.value);
      };
   };

   return {
      inputValue,
      setInputValue,
      handleInputChange,
   };
};
