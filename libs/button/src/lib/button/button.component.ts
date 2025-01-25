import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tuuing-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() public disabled: boolean = false;
  @Input() public variant: "primary" | "secondary" | "destructive" = "primary";
  @Input() public type: "submit" | "button" | "reset" = "button";
}
