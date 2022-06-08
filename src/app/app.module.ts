import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureTogglesModule } from './feature-toggles/feature-toggles.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeatureTogglesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
