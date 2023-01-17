import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StopsLine from "./StopsLine";

export default {
  title: "Stops Line",
  component: StopsLine,
} as ComponentMeta<typeof StopsLine>;

const Template: ComponentStory<typeof StopsLine> = (args) => (
  <StopsLine {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: "#0038ff",
  stops: [
    {
      id: "1",
      name: "Stop one",
      geometry: {
        type: "Point",
        coordinates: [],
      },
    },
    {
      id: "2",
      name: "Stop two",
      geometry: {
        type: "Point",
        coordinates: [],
      },
    },
    {
      id: "3",
      name: "Stop three",
      geometry: {
        type: "Point",
        coordinates: [],
      },
      isCancelled: true,
    },
    {
      id: "4",
      name: "Stop four",
      geometry: {
        type: "Point",
        coordinates: [],
      },
    },
  ],
  currentStopId: "2",
};
