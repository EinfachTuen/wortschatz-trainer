import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabMenuModule } from 'primeng/tabmenu';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {CardModule} from 'primeng/card';
import { WordlistComponent } from './wordlist/wordlist.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {TrainingComponent } from './training/training.component';
import {AppRoutingModule} from './app-routing.module';
import { ExamComponent } from './exam/exam.component';
import {ChartModule} from 'primeng/chart';
import {RippleModule} from 'primeng/ripple';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WordlistComponent,
    TrainingComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    CardModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    AppRoutingModule,
    ChartModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
