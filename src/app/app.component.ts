import { Component } from '@angular/core';
import { FeatureTogglesModule } from './feature-toggles/feature-toggles.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-feature-toggles';
}
