import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter/converter.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

// route to converter component
const routes: Routes = [{ path: '', component: ConverterComponent }];

@NgModule({
  declarations: [ConverterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [ConverterComponent, RouterModule],
})
export class ConverterModule {}
