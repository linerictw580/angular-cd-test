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
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { DefaultDemoComponent } from './demos/default-demo/default-demo.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { DefaultNodeComponent } from './components/default-node/default-node.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OnPushNodeComponent } from './components/on-push-node/on-push-node.component';
import { OnPushDemoComponent } from './demos/on-push-demo/on-push-demo.component';
import { NodeBaseComponent } from './components/node-base/node-base.component';
import { NoCdButtonComponent } from './components/no-cd-button/no-cd-button.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './demos/home/home.component';
import { SingleNodeDemoComponent } from './demos/single-node-demo/single-node-demo.component';
import { MixedDemoComponent } from './demos/mixed-demo/mixed-demo.component';
import { UserListDemoComponent } from './demos/user-list-demo/user-list-demo.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultDemoComponent,
    DefaultNodeComponent,
    OnPushNodeComponent,
    OnPushDemoComponent,
    NodeBaseComponent,
    NoCdButtonComponent,
    SidenavComponent,
    ToolbarComponent,
    HomeComponent,
    SingleNodeDemoComponent,
    MixedDemoComponent,
    UserListDemoComponent,
    UserListComponent,
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
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
