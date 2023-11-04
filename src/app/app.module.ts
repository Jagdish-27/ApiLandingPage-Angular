import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { TopHighlightComponent } from './components/top-highlight/top-highlight.component';
import { ButtonGetStartedComponent } from './components/button-get-started/button-get-started.component';
import { SearchComponent } from './components/search/search.component';
import { AdvanceStaticsComponent } from './components/advance-statics/advance-statics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GetStartedComponent,
    LayoutComponent,
    HomeComponent,
    TopHighlightComponent,
    ButtonGetStartedComponent,
    SearchComponent,
    AdvanceStaticsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
