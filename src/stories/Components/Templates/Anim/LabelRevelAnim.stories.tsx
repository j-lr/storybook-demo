import type { Meta, StoryObj } from "@storybook/react";

import LabelRevealAnim, { LabelRevealAnimProps } from "./LabelRevealAnim";

const meta = {
  title: "Components/Templates/Anim/LabelRevealAnim",
  component: LabelRevealAnim,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof LabelRevealAnim>;

export default meta;

export const Default: StoryObj<LabelRevealAnimProps> = {
  args: {
    label: "Web-gym",
    maxFontSize: 100,
    animDuration: 1,
    finalOpacity: 1,
  },
};

export const Opacity: StoryObj<LabelRevealAnimProps> = {
  args: {
    label: "Web-gym",
    maxFontSize: 80,
    animDuration: 2,
    finalOpacity: 0.3,
  },
};
