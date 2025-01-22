import { AfterViewInit, Component, forwardRef, Injector, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

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
export class InputComponent implements ControlValueAccessor, AfterViewInit {
  @Input() public label: string = "";
  @Input() public type: "text" | "email" | "number" = "text";
  @Input() public id: string = "";
  @Input() public placeholder: string = "";

  constructor(private injector: Injector) {}

  public ngAfterViewInit(): void {
    const ngControl: NgControl = this.injector.get(NgControl, { self: true, optional: true });
    if (ngControl) {
      this.control = ngControl.control as FormControl;
    }
  }

  public onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.internalValue = input.value;
    this.onChange(this.internalValue);
  }

  public getInputErrors(): boolean {
    if (this.control) {
      return this.control?.invalid && this.control?.touched;
    }

    return false;
  }

  protected control: FormControl | null = null;
  protected internalValue: string | number | null = null;
  protected disabled: boolean = false;
  protected onTouched: VoidFunction = () => {};
  protected onChange: (value: string | number | null) => void = (value: string | number | null) => {};

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
