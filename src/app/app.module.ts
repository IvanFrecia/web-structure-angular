import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Import your components (adjust paths as needed)
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { LinkedinButtonComponent } from './components/linkedin-button/linkedin-button.component';
import { PresentationPreviewComponent } from './components/presentation-preview/presentation-preview.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SafeUrlPipe } from './shared/safe-url.pipe';

@NgModule({
  declarations: [
    BannerComponent,
    AboutUsComponent,
    NotFoundComponent,
    SafeUrlPipe
  ],
  imports: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LinkedinButtonComponent,
    PresentationPreviewComponent,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  // Remove the bootstrap array as AppComponent is standalone
})
export class AppModule { }
