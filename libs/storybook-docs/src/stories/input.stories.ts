import { type Meta, type StoryObj } from "@storybook/angular";
import { InputComponent } from "@tuuing/input";

const meta: Meta<InputComponent> = {
  title: "Components/Input",
  component: InputComponent,
}

export default meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    id: "default-input",
    label: "Name",
    placeholder: "Your Name",
    type: "text"
  }
}

export const WithError: Story = {
  args: {
    id: "error-input",
    label: "Email",
    type: "email",
    errors: ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, deserunt."]
  }
}