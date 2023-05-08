import type { Meta, StoryObj } from '@storybook/react';
import PrimaryLayout from './PrimaryLayout';
import { mockPrimaryLayoutProps } from './PrimaryLayout.mocks';

const meta = {
  title: 'layouts/PrimaryLayout',
  component: PrimaryLayout,
} satisfies Meta<typeof PrimaryLayout>;

export default meta;
type Story = StoryObj<typeof PrimaryLayout>;

export const Default: Story = {
  args: {
    ...mockPrimaryLayoutProps.base,
  },
};
