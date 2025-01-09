import { render, screen } from "@testing-library/react";
import FooterContentSocialGithub from "../FooterContentSocialGithub";

describe("FooterContentSocialGithub tests", () => {
   test("renders FooterContentSocialGithub element", () => {
      render(<FooterContentSocialGithub />);
      const FooterContentSocialGithubElement = screen.getByLabelText("Github logo container");
      expect(FooterContentSocialGithubElement).toBeInTheDocument();
   });

   test("renders Github logo image", () => {
      render(<FooterContentSocialGithub />);
      const GithubLogoImage = screen.getByAltText("Github logo");
      expect(GithubLogoImage).toBeInTheDocument();
   });
});
