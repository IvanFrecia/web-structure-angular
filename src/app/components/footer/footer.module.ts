import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
