import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { DefaultDemoComponent } from './demos/default-demo/default-demo.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { NodeComponent } from './components/node/node.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OnPushNodeComponent } from './components/on-push-node/on-push-node.component';
import { OnPushDemoComponent } from './demos/on-push-demo/on-push-demo.component';
import { NodeBaseComponent } from './components/node-base/node-base.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { NoCdButtonComponent } from './components/no-cd-button/no-cd-button.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './demos/home/home.component';
import { SingleNodeDemoComponent } from './demos/single-node-demo/single-node-demo.component';
import { MixedDemoComponent } from './demos/mixed-demo/mixed-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultDemoComponent,
    NodeComponent,
    OnPushNodeComponent,
    OnPushDemoComponent,
    NodeBaseComponent,
    TodolistComponent,
    NoCdButtonComponent,
    SidenavComponent,
    ToolbarComponent,
    HomeComponent,
    SingleNodeDemoComponent,
    MixedDemoComponent,
  ],
  imports: [
    BrowserModule,
    // NoopAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
