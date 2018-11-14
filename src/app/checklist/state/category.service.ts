import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { CategoryStore } from './category.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CategoryService {

  constructor(private categoryStore: CategoryStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.categoryStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.categoryStore.add(entity);
    // });
  }

  updateCategory() {
    this.categoryStore.update(state => ({}));
  }

}
