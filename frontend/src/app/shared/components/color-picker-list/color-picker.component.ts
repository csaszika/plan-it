import { Component, forwardRef, Input, NgModule, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'pi-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true,
    },
  ],
})
export class ColorPickerComponent implements ControlValueAccessor {
  @Input() colors!: Array<string>;

  private currentColor: string = '';

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  onChange(color: string): void {
    this.currentColor = color;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onTouched(): void {}

  writeValue(color: string): void {
    this.currentColor = color;
  }
}

@NgModule({
  declarations: [ColorPickerComponent],
  imports: [CommonModule, MatMenuModule, MatIconModule],
  exports: [ColorPickerComponent],
})
export class ColorPickerModule {}
