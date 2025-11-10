import { PHILOSOPHY_COLUMNS, PHILOSOPHY_PRINCIPLES } from "../../../../../about-me/data/aboutMeData";
import { calculatePrincipleGridPosition } from "./utils/calculatePrincipleGridPosition";

const AboutMeDetailedPrinciplesList = () => {
   return (
      <div className="about-me-detailed__philosophy-principles-list flex flex-col justify-center px-25">
         <ul className="about-me-detailed__philosophy-principles-list-header grid grid-cols-4 text-left font-hanken-grotesk text-heading">
            {PHILOSOPHY_COLUMNS.map((column) => (
               <li key={column} className="about-me-detailed__philosophy-principles-list-header-item p-[0.625rem]">
                  {column}
               </li>
            ))}
         </ul>
         <ul className="about-me-detailed__philosophy-principles-list-items text-lg text-left font-hanken-grotesk grid grid-cols-4 grid-rows-4 w-fit border-t-[5px] border-b-[5px] text-heading border-heading">
            {PHILOSOPHY_PRINCIPLES.map((text, index) => {
               const { row, col, borderBottom } = calculatePrincipleGridPosition(index);
               return (
                  <li key={index} className="about-me-detailed__philosophy-principles-list-item" style={{ gridRow: row, gridColumn: col, borderBottom, padding: "0.625rem" }}>
                     {text}
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default AboutMeDetailedPrinciplesList;
