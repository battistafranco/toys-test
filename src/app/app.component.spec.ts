import { MatExpansionModule } from '@angular/material/expansion'
// TODO
import { TestBed, async } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { NodeComponent } from './node/node.component'
import { NodesComponent } from './nodes/nodes.component'
import { StatusComponent } from './status/status.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NodeComponent,
        NodesComponent,
        StatusComponent,
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatExpansionModule,
      ],
    }).compileComponents()
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})
