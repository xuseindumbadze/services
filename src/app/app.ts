import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Service } from './service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('servises');

  public allproduct:any;
  public allcategories:any;

  constructor(public API:Service){
    this.ALLproducts()
  }

  ALLproducts(){
    this.API.getAllProducts().subscribe((data:any)=>this.allproduct=data.products)
  }

  

}
