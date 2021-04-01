import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamComponent } from './exam.component';
import {Wordpair} from '../model/wordpair';

describe('ExamComponent', () => {
  let component: ExamComponent;
  let fixture: ComponentFixture<ExamComponent>;
  let wordpair: Wordpair;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    wordpair = new Wordpair();
    wordpair.primaryLanguage = 'test';
    wordpair.secondaryLanguage = 'otherLanguage';
    component.currentWordpair = wordpair;
    component.mistakes = 0;
    component.correct = 0;
    component.examWordList = [];
    component.wordpairService.wordlist = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should checkTranslation', () => {
    component.knownLanguage = 'primaryLanguage';
    expect(component.mistakes).toEqual(0);
    component.checkTranslation('blabla');
    expect(component.mistakes).toEqual(1);
    expect(component.correct).toEqual(0);
    component.checkTranslation( wordpair.secondaryLanguage);
    expect(component.mistakes).toEqual(1);
    expect(component.correct).toEqual(1);
  });
  it('should deleteCurrentWordpairFromExamWordList', () => {
    component.examWordList.push(wordpair);
    expect(component.examWordList.length).toEqual(1);
    component.deleteCurrentWordpairFromExamWordList();
    expect(component.examWordList.length).toEqual(0);
  });
  it('should getRandomWordPair', () => {
    component.examWordList.push(wordpair);
    expect(component.getRandomWordPair()).toBeInstanceOf(Wordpair);
  });
  it('should setNextWordpair', () => {
    const newWordPair = new Wordpair();
    component.examWordList.push(newWordPair);
    component.setNextWordpair();
    expect(newWordPair === component.currentWordpair).toBeFalse();
    component.setNextWordpair();
    expect(component.statisticShown).toBeTrue();
  });
  it('should resetExam', () => {
    component.mistakes = 1;
    component.correct = 2;
    component.statisticShown = true;
    component.waitingForStart = false;
    component.menuService.disableMenu = true;
    component.examWordList = [];
    component.wordpairService.loadExampleData();
    component.resetExam();
    expect(component.mistakes).toEqual(0);
    expect(component.correct).toEqual(0);
    expect(component.statisticShown).toEqual(false);
    expect(component.waitingForStart).toEqual(true);
    expect(component.menuService.disableMenu).toEqual(false);
    expect(component.examWordList).toEqual(component.wordpairService.wordlist);
  });
  it('should showStatistic', () => {
    component.examResult = {};
    component.statisticShown = false;
    component.menuService.disableMenu = true;
    component.showStatistic();
    expect(component.statisticShown).toEqual(true);
    expect(component.examResult.labels[0]).toEqual('mistakes');
    expect(component.menuService.disableMenu).toEqual(false);
  });
  it('should setStatisticData', () => {
    component.examResult = {};
    component.setStatisticData();
    expect(component.examResult.datasets[0].data[0]).toEqual(0);
    expect(component.examResult.datasets[0].data[1]).toEqual(0);
    expect(component.examResult.labels[0]).toEqual('mistakes');
    expect(component.examResult.labels[1]).toEqual('correct');
  });
  it('should setStatisticData', () => {
    component.waitingForStart = true;
    component.menuService.disableMenu = false;
    component.startExam();

    expect(component.waitingForStart).toEqual(false);
    expect(component.menuService.disableMenu).toEqual(true);

  });
});
