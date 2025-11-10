const replaceIndex = (index: number, PROJECT_LETTERS: string[]) => {
   const replacedIndex = index + (1 % PROJECT_LETTERS.length);
   return replacedIndex;
};

export default replaceIndex;
