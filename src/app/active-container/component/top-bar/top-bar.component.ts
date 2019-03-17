import { Component, OnInit } from '@angular/core';
import { ComponentProviderService } from '../../service/component-provider.service'
import { Content } from '../../class/content'
import { BlockAComponent } from '../block-a/block-a.component'
import { BlockBComponent } from '../block-b/block-b.component'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    private provider : ComponentProviderService
  ) { 
    console.log('TopBarComponent constructor')
  }

  ngOnInit() {
    console.log('TopBarComponent init')
  }

  clickBlockA() {
    console.log('TopBarComponent clickBlockA')
    this.provider.setCotent(new Content(BlockAComponent))
  }

  clickBlockB() {
    console.log('TopBarComponent clickBlockB')
    this.provider.setCotent(new Content(BlockBComponent))
  }

}
