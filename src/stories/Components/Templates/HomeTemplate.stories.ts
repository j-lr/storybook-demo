import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import Exercises from "./HomeTemplate";
import HomeTemplate from "./HomeTemplate";

const meta = {
  title: "Components/Templates/HomePageTemplate",
  component: HomeTemplate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: { onLoginClick: fn(), onSignUpClick: fn() },
} satisfies Meta<typeof Exercises>;

export default meta;

type Story = StoryObj<typeof Exercises>;

export const Default: Story = {
  name: "Default",
  args: {
    title: "Web-gym",
  },
};
