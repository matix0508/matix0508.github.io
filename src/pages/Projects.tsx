import { ComplexList } from "../components/ComplexList/ComplexList";
import React, { FC } from "react";
import { ListItem } from "../components/ComplexList/ListItem";

export const Projects: FC = () => {
  return (
    <ComplexList>
      <ListItem
        href="https://github.com/matix0508/Finance"
        imageURL="https://aux.iconspalace.com/uploads/currency-dollar-icon-256.png"
        title="Expense Tracker"
        subtitle="In Progress..."
      >
        Expense Tracker to display all information about my budget written in node.js (React, Express)
      </ListItem>
      <ListItem
        href="https://github.com/matix0508/matix0508.github.io"
        imageURL={process.env.PUBLIC_URL + "/avatar.png"}
        title="Portfolio"
        subtitle="In Progress..."
      >
        Portfolio App written in React using Tailwind CSS
      </ListItem>
      <ListItem
        href="#!"
        imageURL="https://iconarchive.com/download/i107344/google/noto-emoji-animals-nature/22234-cow.ico"
        title="Image Labeler"
        subtitle="June 2021"
        disable={true}
      >
        React Flask App to label cows from the birdview for a neural network learning
      </ListItem>
      <ListItem
        href="https://github.com/matix0508/flappy_bird"
        imageURL="https://lh3.googleusercontent.com/wLgwGYEK_SGd46fM0Se5G9G5d3o7CIMY5eaYnWZVlvckw7GnU9SwRoQZvWZ4B4gly3odIkv90iWhZ32GzMvBsaVbgZY=w128-h128-e365-rj-sc0x00ffffff"
        title="Flappy Bird"
        subtitle="August 2020"
      >
        Flappy Bird with AI mode written in Python
      </ListItem>
      <ListItem
        href="https://github.com/matix0508/game_of_life"
        imageURL="https://www.androidfreeware.net/img2/com-baiels-gameoflife.jpg"
        title="Conway's Game of Life"
        subtitle="November 2021"
      >
        Game of Life written in Rust
      </ListItem>
      <ListItem
        href="https://github.com/matix0508/englishpoint"
        imageURL="https://icon-library.com/images/icon-english/icon-english-9.jpg"
        title="School Managment System"
        subtitle="July 2020"
      >
        Django App for Language School that manages students, their parents and payments
      </ListItem>
      <ListItem 
      href="https://github.com/matix0508"
      imageURL="https://img.pngio.com/github-logo-icon-of-glyph-style-available-in-svg-png-eps-ai-github-icon-png-256_256.png"
      title="Other Projects"
      subtitle=""
      >
        Many other projects, some of them are available publically

      </ListItem>


    </ComplexList>
  );
};
