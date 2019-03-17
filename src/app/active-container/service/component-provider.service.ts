import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Content } from '../class/content';

@Injectable({
  providedIn: 'root'
})
export class ComponentProviderService {
  private provider : ReplaySubject<Content>

  constructor() { 
    this.provider = new ReplaySubject()
    console.log('ComponentProviderService Start !')
  }

  getProvider() : ReplaySubject<Content> {
    console.log('ComponentProviderService getProvider !')
    return this.provider;
  }

  setCotent(content : Content) {
    console.log('ComponentProviderService setCotent :' + content );
    this.provider.next(content);
  }
}
