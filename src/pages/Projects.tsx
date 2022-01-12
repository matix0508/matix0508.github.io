import { ComplexList } from "../components/ComplexList/ComplexList";
import React, { FC } from "react";
import { ListItem } from "../components/ComplexList/ListItem";

export const Projects: FC = () => {
  return (
    <ComplexList>
      <ListItem
        href="https://github.com/matix0508/flappy_bird"
        imageURL="https://lh3.googleusercontent.com/wLgwGYEK_SGd46fM0Se5G9G5d3o7CIMY5eaYnWZVlvckw7GnU9SwRoQZvWZ4B4gly3odIkv90iWhZ32GzMvBsaVbgZY=w128-h128-e365-rj-sc0x00ffffff"
        title="Flappy Bird"
        subtitle="AI Powered"
      >
        Based (but not copied) from tutorial
      </ListItem>
    </ComplexList>
  );
};
