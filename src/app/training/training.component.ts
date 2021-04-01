import { Component, OnInit } from '@angular/core';
import {WordpairService} from '../wordpair.service';
import {Wordpair} from '../model/wordpair';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  public wordpair: Wordpair;
  public knownLanguage: string;
  public mistake: boolean;

  constructor(public wordpairService: WordpairService) { }

  ngOnInit(): void {
    this.updateWordpairAndLanguage();
  }
  updateWordpairAndLanguage(): void{
    this.mistake = false;
    this.wordpair = this.wordpairService.getRandomWordpairFromList();
    this.knownLanguage = this.wordpairService.getRandomPrimaryOrSecondaryLanguage();
  }

  checkTranslation(translation: string): void{
    if (this.wordpairService.isTranslationCorrect(translation, this.knownLanguage, this.wordpair)) {
      this.updateWordpairAndLanguage();
    } else{
      this.mistake = true;
    }
  }

  getUnknownWord(): string {
    return this.wordpairService.getUnknownWord(this.knownLanguage, this.wordpair);
  }
}
