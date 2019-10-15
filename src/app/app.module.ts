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
import { AboutTechComponent } from './body/about/about-tech/about-tech.component';
import { AboutTargetComponent } from './body/about/about-target/about-target.component';
import { AboutMemberComponent } from './body/about/about-member/about-member.component';
import { ResIntroComponent } from './body/resources/res-intro/res-intro.component';
import { ResModuleComponent } from './body/resources/res-module/res-module.component';
import { ResToolComponent } from './body/resources/res-tool/res-tool.component';
import { ResExampleComponent } from './body/resources/res-example/res-example.component';
import { BreadcrumbComponent } from './_shared/components/breadcrumb/breadcrumb.component';

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
    CoverComponent,
    AboutTechComponent,
    AboutTargetComponent,
    AboutMemberComponent,
    ResIntroComponent,
    ResModuleComponent,
    ResToolComponent,
    ResExampleComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
