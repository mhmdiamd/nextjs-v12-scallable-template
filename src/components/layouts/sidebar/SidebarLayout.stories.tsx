import type { Meta, StoryObj } from '@storybook/react';
import SidebarLayout from './SidebarLayout';
import { mockSidebarLayoutProps } from './SidebarLayout.mocks';

const meta = {
  title: 'layouts/SidebarLayout',
  component: SidebarLayout,
} satisfies Meta<typeof SidebarLayout>;

export default meta;
type Story = StoryObj<typeof SidebarLayout>;

export const Default: Story = {
  args: {
    ...mockSidebarLayoutProps.base,
  },
};
