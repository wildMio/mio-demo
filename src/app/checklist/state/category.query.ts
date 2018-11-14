import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CategoryStore, CategoryState } from './category.store';
import { Category } from './category.model';

@Injectable({ providedIn: 'root' })
export class CategoryQuery extends QueryEntity<CategoryState, Category> {

  constructor(protected store: CategoryStore) {
    super(store);
  }

}
