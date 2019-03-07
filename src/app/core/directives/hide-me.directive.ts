import { Directive, ElementRef, OnInit, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHideMe]'
})
export class HideMeDirective implements OnInit {

  @Input() appHideMe: number = null;

  constructor(
    private $element: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    const $el: HTMLElement = this.$element.nativeElement;

    this.renderer.listen(this.$element.nativeElement, 'click', () => {
      setTimeout(() => {
        $el.remove();
      }, this.appHideMe);
    });

  }
}
