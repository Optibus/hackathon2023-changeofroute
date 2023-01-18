import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WarningBox from "./WarningBox";

export default {
  title: "Warning Box",
  component: WarningBox,
} as ComponentMeta<typeof WarningBox>;

const Template: ComponentStory<typeof WarningBox> = (args) => (
  <WarningBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  startDate: new Date("2022-12-17"),
  endDate: new Date("2023-01-25"),
  lines: [
    {
      code: "20",
      color: "#A7FFDA",
    },
    {
      code: "5",
      color: "#E8A7FF",
    },
  ],
};
