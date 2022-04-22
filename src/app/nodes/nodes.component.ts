import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { NodesStore } from '../services/nodesStore.service'

@Component({
  selector: 'app-node-list',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css'],
})
export class NodesComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = []
  constructor(public store: NodesStore) {}

  ngOnInit() {
    this.subscriptions.push(this.store.getNodes().subscribe())
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }
}
