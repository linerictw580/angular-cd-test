import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultDemoComponent } from './demos/default-demo/default-demo.component';
import { HomeComponent } from './demos/home/home.component';
import { MixedDemoComponent } from './demos/mixed-demo/mixed-demo.component';
import { OnPushDemoComponent } from './demos/on-push-demo/on-push-demo.component';
import { SingleNodeDemoComponent } from './demos/single-node-demo/single-node-demo.component';
import { UserListDemoComponent } from './demos/user-list-demo/user-list-demo.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-list-demo', component: UserListDemoComponent },
  { path: 'single-node-demo', component: SingleNodeDemoComponent },
  { path: 'default-demo', component: DefaultDemoComponent },
  { path: 'on-push-demo', component: OnPushDemoComponent },
  { path: 'mixed-demo', component: MixedDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
