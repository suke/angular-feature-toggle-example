import {
  Directive,
  OnInit,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { FeatureTogglesService, FeatureNames } from './feature-toggles.service';

@Directive({
  selector: '[featureToggle]',
})
export class FeatureTogglesDirective implements OnInit {
  @Input()
  set featureToggle(featureName: FeatureNames) {
    this.featureName = featureName;
  }
  private featureName!: FeatureNames;

  constructor(
    private vc: ViewContainerRef,
    private tpl: TemplateRef<any>,
    private featureTogglesService: FeatureTogglesService
  ) {}

  ngOnInit(): void {
    if (this.featureTogglesService.isFeatureEnabled(this.featureName)) {
      this.vc.createEmbeddedView(this.tpl);
    } else {
      this.vc.clear();
    }
  }
}
