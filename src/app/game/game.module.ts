import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { SnakeComponent } from './snake/snake.component';

@NgModule({
  declarations: [SnakeComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
