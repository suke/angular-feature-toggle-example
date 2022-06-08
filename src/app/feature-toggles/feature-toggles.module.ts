import { NgModule } from '@angular/core';

import { FeatureTogglesDirective } from './feature-toggles.directive';

@NgModule({
  declarations: [FeatureTogglesDirective],
  exports: [FeatureTogglesDirective],
})
export class FeatureTogglesModule {}
