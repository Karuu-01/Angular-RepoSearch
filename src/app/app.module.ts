import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoFormComponent } from './repo-form/repo-form.component';
import { HighlightDirective } from './highlight.directive';
import { DateCreatePipe } from './date-create.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RepoFormComponent,
    HighlightDirective,
    DateCreatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
