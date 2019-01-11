import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxsModule} from '@ngxs/store';
import {ZooState} from '../../projects/zoostate/src/lib/zoo.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([ZooState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
