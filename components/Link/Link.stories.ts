import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Link, { LinkProps } from './Link'

const meta = {
    title: 'Molecules/Link',
    tags: ['autodocs'],
    component: Link,
    argTypes: {},
} satisfies Meta<LinkProps>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Link',
        href: '/',
    },
}
