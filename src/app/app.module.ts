import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './body/about/about.component';
import { VideosComponent } from './body/videos/videos.component';
import { ResourcesComponent } from './body/resources/resources.component';
import { LinksComponent } from './body/links/links.component';
import { CoverComponent } from './body/cover/cover.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    BodyComponent,
    AboutComponent,
    VideosComponent,
    ResourcesComponent,
    LinksComponent,
    CoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
