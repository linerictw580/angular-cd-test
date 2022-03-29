import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { DefaultDemoComponent } from './default-demo/default-demo.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NodeComponent } from './components/node/node.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { OnPushNodeComponent } from './components/on-push-node/on-push-node.component';
import { OnPushDemoComponent } from './on-push-demo/on-push-demo.component';
import { NodeBaseComponent } from './components/node-base/node-base.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { NgOutButtonComponent } from './components/ng-out-button/ng-out-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultDemoComponent,
    NodeComponent,
    OnPushNodeComponent,
    OnPushDemoComponent,
    NodeBaseComponent,
    TodolistComponent,
    NgOutButtonComponent
  ],
  imports: [
    BrowserModule,
    // NoopAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
