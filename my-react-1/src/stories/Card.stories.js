// src/stories/Card.stories.js
import React from "react";
import Card from "../Card"; // Correct import path

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Card Title",
  content: "This is the card content sunil.",
};

export const WithLongerContent = Template.bind({});
WithLongerContent.args = {
  title: "Card Title",
  content:
    "This is the card content. It has a bit more text to show how the card handles longer content.",
};
