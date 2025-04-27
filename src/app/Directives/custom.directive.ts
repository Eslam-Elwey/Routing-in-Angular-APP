import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective {
  constructor(private myRef: ElementRef) {
    console.log(myRef);
    // myRef.nativeElement.style.color = 'white';
    // myRef.nativeElement.style.fontSize = '2rem';
    // myRef.nativeElement.style.backgroundColor = 'green';
    // myRef.nativeElement.style.width = '25%';
    // myRef.nativeElement.style.margin = '15px auto';
    // myRef.nativeElement.style.textAlign = 'center';
    // myRef.nativeElement.style.padding = '10px 15px';

    myRef.nativeElement.style.color = 'green';
    myRef.nativeElement.style.backgroundColor = 'white';
    myRef.nativeElement.style.padding = '15px 20px';
    myRef.nativeElement.style.width = '25%';
    myRef.nativeElement.style.borderRadius = '18px';
    myRef.nativeElement.style.textAlign = 'center';
  }

  @Input('appCustom') infoObj = { bgColor: '', fgColor: '' };

  @HostListener('mouseover') mouseover() {
    this.myRef.nativeElement.style.color = this.infoObj.fgColor;
    this.myRef.nativeElement.style.backgroundColor = this.infoObj.bgColor;
  }
  @HostListener('mouseleave') mouseout() {
    this.myRef.nativeElement.style.color = 'green';
    this.myRef.nativeElement.style.backgroundColor = 'white';
  }
}
