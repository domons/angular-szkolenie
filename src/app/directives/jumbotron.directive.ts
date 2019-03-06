import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appJumbotron]'
})
export class JumbotronDirective implements OnInit {

  constructor(
    private $element: ElementRef
  ) { }

  ngOnInit() {
    const $el: HTMLElement = this.$element.nativeElement;
    $el.classList.add('jumbotron');
  }

}
