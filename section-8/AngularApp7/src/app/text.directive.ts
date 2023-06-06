import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color='green';
    el.nativeElement.style.backgroundColor='yellow';
    el.nativeElement.style.fontStyle='italic';
    el.nativeElement.style.textAlign='center';
    el.nativeElement.style.textShadow='1px 3px black';
  }
  
}
