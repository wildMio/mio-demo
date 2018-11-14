import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material/material.module';

import { ChecklistRoutingModule } from './checklist-routing.module';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    ChecklistRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class ChecklistModule { }
