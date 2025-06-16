import React, { useEffect, useRef, useState } from "react";

export const useDynamicInputStyling = () => {
   const inputRef = useRef<HTMLInputElement>(null);
   const cursorRef = useRef<HTMLSpanElement>(null);
   const [inputValue, setInputValue] = useState("");

   useEffect(() => {
      const adjustInputWidth = () => {
         if (inputRef.current) {
            const inputElement = inputRef.current;
            const tempSpan = document.createElement("span");
            tempSpan.style.visibility = "hidden";
            tempSpan.style.whiteSpace = "pre";
            tempSpan.style.font = window.getComputedStyle(inputElement).font;
            tempSpan.textContent = inputValue;
            document.body.appendChild(tempSpan);

            const textWidth = tempSpan.offsetWidth;
            document.body.removeChild(tempSpan);

            inputElement.style.width = `${textWidth}px`;
         }
      };
      adjustInputWidth();
   }, [inputValue]);

   useEffect(() => {
      const adjustCursorPosition = () => {
         if (inputRef.current && cursorRef.current) {
            const inputElement = inputRef.current;
            const cursorElement = cursorRef.current;

            const tempSpan = document.createElement("span");
            tempSpan.style.visibility = "hidden";
            tempSpan.style.whiteSpace = "pre";
            tempSpan.style.font = window.getComputedStyle(inputElement).font;
            tempSpan.textContent = inputValue;
            document.body.appendChild(tempSpan);

            const textWidth = tempSpan.offsetWidth;
            document.body.removeChild(tempSpan);

            const inputBorder = parseInt(window.getComputedStyle(inputElement).borderWidth);
            const inputPadding = parseInt(window.getComputedStyle(inputElement).paddingLeft);
            const cursorPosition = textWidth + inputBorder + inputPadding;

            cursorElement.style.left = `${cursorPosition}px`;
         }
      };
      adjustCursorPosition();
   }, [inputValue]);

   const handleInputChange = () => {
      return (event: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(event.target.value);
      };
   };

   return {
      inputValue,
      setInputValue,
      handleInputChange,
      inputRef,
      cursorRef,
   };
};
