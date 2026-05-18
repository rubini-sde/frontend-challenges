import type { Meta, StoryObj } from "@storybook/react";
import CounterButton from "./CounterButton";

const meta: Meta<typeof CounterButton> = {
  component: CounterButton,
  title: "UI/CounterButton",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Challenge:** Build a counter button that increments a count on each click.
    `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CounterButton>;

export const Default: Story = {};

export const WithInitialCount: Story = {
  args: {
    initialCount: 5,
  },
};
