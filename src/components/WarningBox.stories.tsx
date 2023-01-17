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
