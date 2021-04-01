import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingComponent } from './training.component';
import {Wordpair} from '../model/wordpair';

describe('TrainingComponent', () => {
  let component: TrainingComponent;
  let fixture: ComponentFixture<TrainingComponent>;
  let wordpair: Wordpair;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    wordpair = new Wordpair();
    wordpair.primaryLanguage = 'test';
    wordpair.secondaryLanguage = 'otherLanguage';
    component.wordpair = wordpair;
    component.wordpairService.wordlist = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should updateWordpairAndLanguage', () => {
    component.mistake = true;
    component.wordpairService.loadExampleData();

    component.wordpair = wordpair;
    component.knownLanguage = 'wrong language';
    component.updateWordpairAndLanguage();

    expect(component.mistake).toBeFalse();
    expect(component.wordpair.uuid !== wordpair.uuid).toBeTrue();
    expect(component.knownLanguage === 'primaryLanguage' || 'secondaryLanguage');
  });
  it('should checkTranslation', () => {
    component.checkTranslation('falsch');
    component.knownLanguage = 'primaryLanguage';
    expect(component.mistake).toBeTrue();
    component.checkTranslation(wordpair.secondaryLanguage);
    expect(component.mistake).toBeFalse();
  });
  it('should getUnknownWord', () => {
    component.knownLanguage = 'primaryLanguage';
    expect(component.getUnknownWord()).toEqual(wordpair.secondaryLanguage);
  });
});
