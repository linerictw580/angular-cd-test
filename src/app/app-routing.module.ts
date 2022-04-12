import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultDemoComponent } from './demos/default-demo/default-demo.component';
import { HomeComponent } from './demos/home/home.component';
import { OnPushDemoComponent } from './demos/on-push-demo/on-push-demo.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'default-demo', component: DefaultDemoComponent },
  { path: 'on-push-demo', component: OnPushDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
