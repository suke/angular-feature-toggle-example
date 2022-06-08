import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export type FeatureNames = keyof typeof environment.featureToggles;

@Injectable({ providedIn: 'root' })
export class FeatureTogglesService {
  constructor() {}

  isFeatureEnabled(featureName: FeatureNames) {
    return environment.featureToggles[featureName];
  }

  isFooFeatureEnabled() {
    return environment.featureToggles.foo;
  }

  isBarFeatureEnabled() {
    return environment.featureToggles.bar;
  }
}
