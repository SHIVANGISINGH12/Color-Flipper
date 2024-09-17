import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ColorPickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ColorFlipper';
}
