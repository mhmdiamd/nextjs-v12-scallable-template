import type { Meta, StoryObj } from '@storybook/react';
import BaseTemplate from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

const meta = {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
} satisfies Meta<typeof BaseTemplate>;

export default meta;
type Story = StoryObj<typeof BaseTemplate>;

export const Default: Story = {
  args: {
    ...mockBaseTemplateProps.base,
  },
};
