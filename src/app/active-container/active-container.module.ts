import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveContainerRouterModule } from './active-container-router.module';
import { ContainerComponent } from './component/container/container.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { BlockAComponent } from './component/block-a/block-a.component';
import { BlockBComponent } from './component/block-b/block-b.component';
import { ActiveComponentDirective } from './directive/active-component.directive';

@NgModule({
  declarations: [
    ContainerComponent, 
    TopBarComponent, 
    BlockAComponent, 
    BlockBComponent, 
    ActiveComponentDirective
  ],
  imports: [
    CommonModule,
    ActiveContainerRouterModule
  ],
  entryComponents: [ BlockAComponent, BlockBComponent ]
})
export class ActiveContainerModule { }
