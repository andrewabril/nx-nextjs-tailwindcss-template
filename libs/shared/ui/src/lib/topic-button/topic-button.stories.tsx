import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { TopicButton, TopicButtonProps } from './topic-button';

export default {
  component: TopicButton,
  title: 'TopicButton',
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
} as Meta;

const Template: Story<TopicButtonProps> = (args) => {
  const [clickedTopic, setClickedTopic] = useState<string | null>(null);
  return (
    <div className="p-20 bg-gray-100">
      <TopicButton
        {...args}
        onClick={(topicName) => setClickedTopic(topicName)}
      />
      {clickedTopic && <div>Button has been clicked: {clickedTopic}</div>}
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  topicName: 'Next.js',
};
