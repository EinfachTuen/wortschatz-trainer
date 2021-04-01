import {Component, OnInit} from '@angular/core';
import {WordpairService} from '../wordpair.service';
import {Wordpair} from '../model/wordpair';
import {MenuService} from '../menu.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  knownLanguage: string;
  examWordList: Wordpair[];
  currentWordpair: Wordpair;
  mistakes = 0;
  correct = 0;
  statisticShown = false;
  waitingForStart = true;
  examResult: any;

  constructor(public wordpairService: WordpairService, public menuService: MenuService) {
  }

  ngOnInit(): void {
    this.examWordList = this.wordpairService.wordlist;
    this.knownLanguage = this.wordpairService.getRandomPrimaryOrSecondaryLanguage();
    this.currentWordpair = this.getRandomWordPair();
  }

  checkTranslation(translation: string): void {
    if (this.wordpairService.isTranslationCorrect(translation, this.knownLanguage, this.currentWordpair)) {
      this.correct += 1;
    } else {
      this.mistakes += 1;
    }
    this.setNextWordpair();
  }
  deleteCurrentWordpairFromExamWordList(): void{
    this.examWordList = this.examWordList.filter((wordpairListElement) => {
      return wordpairListElement.uuid !== this.currentWordpair.uuid;
    });
  }
  getRandomWordPair(): Wordpair{
    return this.examWordList[Math.floor(Math.random() * this.examWordList.length)];
  }
  setNextWordpair(): void {
    if (this.examWordList.length > 1) {
      this.deleteCurrentWordpairFromExamWordList();
      this.currentWordpair = this.getRandomWordPair();
    } else {
      this.showStatistic();
    }
  }
  resetExam(): void {
    this.mistakes = 0;
    this.correct = 0;
    this.statisticShown = false;
    this.waitingForStart = true;
    this.menuService.disableMenu = false;
    this.examWordList = this.wordpairService.wordlist;
    this.knownLanguage = this.wordpairService.getRandomPrimaryOrSecondaryLanguage();
  }
  showStatistic(): void {
    this.setStatisticData();
    this.statisticShown = true;
    this.menuService.disableMenu = false;
  }
  setStatisticData(): void {
    this.examResult = {
      labels: ['mistakes', 'correct'],
      datasets: [
        {
          data: [this.mistakes, this.correct],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
          ]
        }]
    };
  }
  startExam(): void {
    this.waitingForStart = false;
    this.menuService.disableMenu = true;
  }
}
