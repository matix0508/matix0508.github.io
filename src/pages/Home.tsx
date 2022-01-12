import React, { FC } from "react";
import { ShowCase } from "../components/ShowCase";
import { Lang } from "../Types/Lang";

interface IHomeProps {
  lang: Lang;
}

export const Home: FC<IHomeProps> = (props) => {
  return <ShowCase lang={props.lang} />;
};
