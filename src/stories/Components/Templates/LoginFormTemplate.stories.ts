import type { Meta, StoryObj } from "@storybook/react";
import LoginFormTemplate from "./LoginFormTemplate";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Templates/LoginFormTemplate",
  component: LoginFormTemplate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: { onLoginClick: fn(), onSignUpClick: fn() },
} satisfies Meta<typeof LoginFormTemplate>;

export default meta;

type Story = StoryObj<typeof LoginFormTemplate>;

export const Default: Story = {
  name: "Default",
  args: {
    title: "Web-gym",
  },
};
export const Error: Story = {
  name: "Error",
  args: {
    title: "Web-gym",
    errorMessage: "Invalid credentials",
  },
};

export const WithAutoFocus: Story = {
  name: "With Auto Focus",
  args: {},
};
