import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }
  solidBar: boolean = false;

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
        const windowScroll = window.pageYOffset;
        if(windowScroll > 0){
            this.solidBar = true;
        } else {
            this.solidBar = false;
        }
  }

}
