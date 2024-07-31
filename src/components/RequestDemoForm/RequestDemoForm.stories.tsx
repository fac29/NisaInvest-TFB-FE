import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RequestDemoForm } from './RequestDemoForm';

const meta: Meta<typeof RequestDemoForm> = {
  title: 'Forms/RequestDemoForm',
  component: RequestDemoForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RequestDemoForm>;

export const Default: Story = {
  render: () => <RequestDemoForm />,
};

export const Filled: Story = {
  render: () => {
    // You can add logic here to pre-fill the form if needed
    return <RequestDemoForm />;
  },
};