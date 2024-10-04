import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import LabelFilter from "./LabelFilter";

const meta = {
  title: "Components/LabelFilter",
  component: LabelFilter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LabelFilter>;

export default meta;

type Story = StoryObj<typeof LabelFilter>;

export const Default: Story = {
  name: "Default",
  args: {
    label: "Filter",
    clickListener: action("clicked"),
  },
};

export const Primary: Story = {
  name: "Primary",
  args: {
    label: "Primary Filter",
    isPrimary: true,
    clickListener: action("clicked"),
  },
};

export const Secondary: Story = {
  name: "Non Primary",
  args: {
    label: "Secondary Filter",
    clickListener: action("clicked"),
  },
};

export const Selected: Story = {
  name: "Selected",
  args: {
    label: "Selected Filter",
    isSelected: true,
    clickListener: action("clicked"),
  },
};
