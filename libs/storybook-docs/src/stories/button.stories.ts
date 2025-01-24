import { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "@tuuing/button";

const icon =
`
<svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
`

const meta: Meta<ButtonComponent> = {
  title: "Components/Button",
  component: ButtonComponent,
  render: (args) => ({
    props: args,
    template: `
      <tuuing-button [disabled]="disabled" [variant]="variant">
        Tuuing
      </tuuing-button>
    `,
  }),
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    disabled: false,
    variant: "primary",
  },
};

export const WithIcon: Story = {
  args: {
    disabled: false,
    variant: "primary",
  },
  render: (args) => ({
    props: args,
    template: `
      <tuuing-button [disabled]="disabled" [variant]="variant">
        ${icon}
        <span>Login With Email</span>
      </tuuing-button>
    `,
  }),
};

export const JustIcon: Story = {
  args: {
    disabled: false,
    variant: "primary",
  },
  render: (args) => ({
    props: args,
    template: `
      <tuuing-button [disabled]="disabled" [variant]="variant">
        <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z" fill="#FFF" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      </tuuing-button>
    `,
  }),
};
