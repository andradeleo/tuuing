import { Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type InputErrorsType = string | string[]

@Component({
  selector: 'tuuing-input',
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() public label: string = "";
  @Input() public type: "text" | "email" | "number" = "text";
  @Input() public id: string = "";
  @Input() public placeholder: string = "";
  @Input() public errors: InputErrorsType = []

  protected hasError: boolean = false;

  public ngOnInit(): void {
    this.hasError = this.errors.length > 0;
    this.errors = Array.isArray(this.errors) ? this.errors : [this.errors];
  }

  protected internalValue: string | number | null = null;
  protected disabled: boolean = false;
  protected onTouched!: VoidFunction;
  protected onChange!: (value: string | number | null) => {};

  public writeValue(obj: any): void {
    this.internalValue = obj;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
