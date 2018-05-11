import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: 'li[appCountclicks]'
})
export class CountclicksDirective {
  counter = 0;
  constructor() { }

  @HostBinding('style.opacity') opacity = .1;
  @HostListener('click', ['$event.target'])
  onClick(ref) {
    console.log('a', ref, 'Number of clicks:', this.counter++);
    this.opacity += .1;
  }

}
