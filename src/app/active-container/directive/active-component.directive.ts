import { Directive, ViewContainerRef, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { Content } from '../class/content'

@Directive({
  selector: '[appActiveComponent]'
})
export class ActiveComponentDirective {
  @Input('appActiveComponent') content : Content

  constructor(
    private view : ViewContainerRef,
    private factory : ComponentFactoryResolver
  ) { }

  ngOnInit() {
    console.log('ActiveComponentDirective init' + this.content)
    let componentFactory = this.factory.resolveComponentFactory(this.content.componet)
    this.view.createComponent(componentFactory)
  }
}
