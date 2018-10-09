import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native, ShadowDom
})
export class ServerElementComponent implements 
OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement')
  element: {type: string, name: string, content: string};
  @Input()
  name: string;
  @ViewChild('heading')
  header: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }
  
  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }
  
  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }
  
  ngAfterContentChecked() {
    console.log('ngAfterContentInit called');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit called');
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

  

}
