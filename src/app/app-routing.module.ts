import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrainingComponent} from './training/training.component';
import {WordlistComponent} from './wordlist/wordlist.component';
import {ExamComponent} from './exam/exam.component';

const routes: Routes = [
  { path: 'words', component: WordlistComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'exam', component: ExamComponent },
  { path: '', component: WordlistComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
