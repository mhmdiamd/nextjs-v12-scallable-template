import type { Meta, StoryObj } from '@storybook/react';
import CatCard from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';

const meta = {
  title: 'cards/CatCard',
  component: CatCard,
} satisfies Meta<typeof CatCard>;

export default meta;
type Story = StoryObj<typeof CatCard>;

export const Default: Story = {
  args: {
    ...mockCatCardProps.base,
  },
};
