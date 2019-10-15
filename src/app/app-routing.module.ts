import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverComponent } from './body/cover/cover.component';
import { AboutComponent } from './body/about/about.component';
import { VideosComponent } from './body/videos/videos.component';
import { ResourcesComponent } from './body/resources/resources.component';
import { LinksComponent } from './body/links/links.component';
import { AboutTechComponent } from './body/about/about-tech/about-tech.component';
import { AboutTargetComponent } from './body/about/about-target/about-target.component';
import { AboutMemberComponent } from './body/about/about-member/about-member.component';
import { ResModuleComponent } from './body/resources/res-module/res-module.component';
import { ResIntroComponent } from './body/resources/res-intro/res-intro.component';
import { ResToolComponent } from './body/resources/res-tool/res-tool.component';
import { ResExampleComponent } from './body/resources/res-example/res-example.component';


const routes: Routes = [
  { path: '', redirectTo: 'cover', pathMatch: 'full'},
  { path: 'cover', component: CoverComponent },
  { path: 'about', component: AboutComponent, children: [
    { path: '', redirectTo: 'tech', pathMatch: 'full' },
    { path: 'tech', component: AboutTechComponent },
    { path: 'target', component: AboutTargetComponent },
    { path: 'member', component: AboutMemberComponent }
  ]},
  { path: 'videos', component: VideosComponent },
  { path: 'resources', component: ResourcesComponent, children: [
    { path: '', redirectTo: 'intro', pathMatch: 'full' },
    { path: 'intro', component: ResIntroComponent },
    { path: 'module', component: ResModuleComponent },
    { path: 'tool', component: ResToolComponent },
    { path: 'example', component: ResExampleComponent }
  ]},
  { path: 'links', component: LinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
