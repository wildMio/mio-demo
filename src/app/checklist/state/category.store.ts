import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Category } from './category.model';

export interface CategoryState extends EntityState<Category> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'category' })
export class CategoryStore extends EntityStore<CategoryState, Category> {

  constructor() {
    super();
  }

}

