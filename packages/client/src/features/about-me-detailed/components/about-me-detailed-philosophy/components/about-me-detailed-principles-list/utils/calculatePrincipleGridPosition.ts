export interface PrincipleGridPosition {
   row: number;
   col: number;
   borderBottom: string;
}

const COLUMNS_PER_ROW = 4;
const LAST_ROW = 4;

export const calculatePrincipleGridPosition = (index: number): PrincipleGridPosition => {
   const row = Math.floor(index / COLUMNS_PER_ROW) + 1;
   const col = (index % COLUMNS_PER_ROW) + 1;
   const borderBottom = row !== LAST_ROW ? "2px solid currentColor" : "none";

   return {
      row,
      col,
      borderBottom,
   };
};
