import { Injectable } from '@angular/core'
import { ApiService } from './api.service'
import { forkJoin, of } from 'rxjs'
import { map, catchError, mergeMap, tap } from 'rxjs/operators'
import { Store } from './store'
import { Node } from 'src/models/node.model'
import { State } from './state'

@Injectable({
  providedIn: 'root',
})
export class NodesStore extends Store<Node[]> {
  constructor(private api: ApiService) {
    super(new State().list)
  }

  public getNodes() {
    return this._getStatus().pipe(
      mergeMap((statuses) => {
        this.setState([...statuses])
        return this._getBlocks().pipe(
          map((blocks) => {
            this.setState([...blocks])
          }),
        )
      }),
    )
  }


  private _getStatus() {
    const status = this.state.map((node) => {
      return this.api.get(`${node.url}/api/v1/status`).pipe(
        catchError((error) =>
          of({
            node_name: false,
          }),
        ),
        map(({ node_name }) => {
          return {
            ...node,
            name: node_name,
            online: !!node_name,
            loading: false,
          }
        }),
      )
    })

    return forkJoin(status)
  }

  private _getBlocks() {
    const status = this.state.map((node) => {
      return this.api.get(`${node.url}/api/v1/blocks`).pipe(
        catchError((error) =>
          of({
            response: null,
          }),
        ),
        map(({ data }) => {
          return {
            ...node,
            loading: false,
            blocks: data,
          }
        }),
      )
    })

    return forkJoin(status)
  }
}
