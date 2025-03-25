import React from "react";

const FOOTER_SCROLL_UP_ARIA_LABEL: string = "Footer scroll up container";
const FOOTER_SCROLL_UP_TEXT: string = "Back to the top";
const FOOTER_ARROW_ICON_LIGHT_MODE: string = "./footer/arrow_icon_light_mode.svg";
const FOOTER_ARROW_ICON_DARK_MODE: string = "./footer/arrow_icon_dark_mode.svg";
const FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT: string = "Arrow icon";

const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
   e.preventDefault();
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
};

export { FOOTER_ARROW_ICON_LIGHT_MODE, FOOTER_ARROW_ICON_DARK_MODE, FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT, FOOTER_SCROLL_UP_ARIA_LABEL, FOOTER_SCROLL_UP_TEXT, scrollToTop };
