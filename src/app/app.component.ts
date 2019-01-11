import { Component } from '@angular/core';
import {Select} from '@ngxs/store';
import {ZooState} from '../../projects/zoostate/src/lib/zoo.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-selector-build-error';

  @Select(ZooState.pandas) pandas;
  @Select(ZooState.horses) horses;
  @Select(ZooState.bees) bees;
}
