import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverComponent } from './body/cover/cover.component';
import { AboutComponent } from './body/about/about.component';
import { VideosComponent } from './body/videos/videos.component';
import { ResourcesComponent } from './body/resources/resources.component';
import { LinksComponent } from './body/links/links.component';


const routes: Routes = [
  { path: '', component: CoverComponent, pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'links', component: LinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
