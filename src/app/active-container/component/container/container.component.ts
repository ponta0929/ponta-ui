import { Component, OnInit, OnDestroy } from '@angular/core';
import { Content } from '../../class/content'
import { ComponentProviderService } from '../../service/component-provider.service'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  private components : Array<Content>

  constructor(
    private provider : ComponentProviderService
  ) { 
    console.log('ContainerComponent constructor')
    this.components = []
  }

  ngOnInit() {
    console.log('ContainerComponent init')
    this.provider.getProvider().subscribe(
      (content: Content) => {
        this.addComponets(content)
      }
    )
  }

  ngOnDestroy(): void {
    this.provider.getProvider().unsubscribe()
  }

  addComponets(content : Content) {
    console.log('ContainerComponent add ' + content)
    this.components.push(content)
  }

}
