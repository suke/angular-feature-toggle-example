import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureTogglesService, FeatureNames } from './feature-toggles.service';
import { FeatureTogglesDirective } from './feature-toggles.directive';

describe('FeatureTogglesDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let featureTogglesServiceSpy: jasmine.SpyObj<FeatureTogglesService>;
  const spy = jasmine.createSpyObj('FeatureToggleService', [
    'isFeatureEnabled',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FeatureTogglesDirective],
      providers: [{ provide: FeatureTogglesService, useValue: spy }],
      imports: [CommonModule],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    featureTogglesServiceSpy = TestBed.inject(
      FeatureTogglesService
    ) as jasmine.SpyObj<FeatureTogglesService>;
  });

  it('should be rendered if feature enabled', () => {
    featureTogglesServiceSpy.isFeatureEnabled.and.returnValue(true);
    const featureName: FeatureNames = 'foo';
    component.featureName = featureName;
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toBe(featureName);
  });

  it('should not be rendered if feature disabled', () => {
    featureTogglesServiceSpy.isFeatureEnabled.and.returnValue(false);
    const featureName: FeatureNames = 'foo';
    component.featureName = featureName;
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toBe('');
  });
});

@Component({
  selector: 'test-cmp',
  template: '<div *featureToggle="featureName">{{ featureName }}</div>',
})
class TestComponent {
  featureName!: FeatureNames;
}
