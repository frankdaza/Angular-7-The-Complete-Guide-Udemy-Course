import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  display: boolean;
  listParagraphs: Array<number>;
  message: string;
  serial: number;

  constructor() { }

  ngOnInit() {
    this.display = false;
    this.message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Ipsa nesciunt praesentium quo unde architecto distinctio 
      fuga eligendi possimus explicabo illum laborum saepe, 
      hic velit corrupti odio dolore nisi, vel rerum.`;
      this.listParagraphs = new Array<number>();
      this.serial = 1;
  }

  onDisplay() {
    this.display = !this.display;
    this.listParagraphs.push(this.serial++);
    }

}
