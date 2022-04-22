import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { NodesComponent } from './nodes/nodes.component';
import { StatusComponent } from './status/status.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [AppComponent, NodeComponent, NodesComponent, StatusComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatExpansionModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
