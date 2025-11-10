import type React from "react";

export const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>): void => {
   e.preventDefault();
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
};
