import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchFieldComponent } from './header/search-field/search-field.component';
import { SearchFilterComponent } from './header/search-filter/search-filter.component';
import { UserProfileComponent } from './header/user-profile/user-profile.component';
import { BodyVideoFrameComponent } from './body/body-video-frame/body-video-frame.component';
import { VideoStatsComponent } from './body/body-video-frame/video-stats/video-stats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LogoComponent,
    SearchFieldComponent,
    SearchFilterComponent,
    UserProfileComponent,
    BodyVideoFrameComponent,
    VideoStatsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
