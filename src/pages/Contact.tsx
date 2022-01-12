import { ContactMe } from "../components/ContactMe";
import SocialMedia from "../components/SocialMedia";
import React, { FC } from "react";

export const Contact: FC = (props) => {
  return (
    <>
      <SocialMedia />
      <ContactMe />
    </>
  );
};
