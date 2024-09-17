import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.css'
})
export class ColorPickerComponent {

  @ViewChild('container1') _container : any;
  @ViewChild('colorFlipperDiv') colorFlipper : any;

  selectColor(color:string){
    this._container.nativeElement.style.backgroundColor = color;
  }

  randomColorGenerator(){
    const red : number = Math.round(Math.random()*255);
    const green : number = Math.round(Math.random()*255);
    const blue : number = Math.round(Math.random()*255);

    const randomColor:string = `rgb(${red}, ${green}, ${blue})`;
    this._container.nativeElement.style.backgroundColor = randomColor;
    this.colorFlipper.nativeElement.style.backgroundColor = randomColor;
    this.colorFlipper.nativeElement.style.border = randomColor;
    this.colorFlipper.nativeElement.style.color = "black";
  }
  
}
