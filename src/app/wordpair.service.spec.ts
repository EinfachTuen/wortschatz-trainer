import {TestBed} from '@angular/core/testing';

import {WordpairService} from './wordpair.service';
import {Wordpair} from './model/wordpair';

describe('WordpairService', () => {
  let service: WordpairService;
  let testWordPair: Wordpair;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordpairService);
  });
  beforeEach(() => {
    service.wordlist = [];
    testWordPair = new Wordpair();
    testWordPair.primaryLanguage = 'test';
    testWordPair.secondaryLanguage = 'otherLanguage';
    service.wordlist.push(testWordPair);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should addwordPairToWordList succesful', () => {
    service.wordlist = [];
    service.addWordPairToWordList(new Wordpair());
    expect(service.wordlist.length).toEqual(1);
  });
  it('should updateWordlistFromStorage succesful', () => {
    const wordlist = [];
    wordlist.push(testWordPair);

    localStorage.setItem('wordlist', JSON.stringify(wordlist));
    service.updateWordlistFromStorage();
    expect(service.wordlist[0].primaryLanguage).toEqual(testWordPair.primaryLanguage);
  });
  it('should saveWordlistInStorage', () => {
    service.saveWordlistInStorage();
    expect(JSON.parse(localStorage.getItem('wordlist'))[0].primaryLanguage).toEqual(testWordPair.primaryLanguage);
  });
  it('should deleteWordPairFromList', () => {
    service.deleteWordPairFromList(testWordPair);
    expect(service.wordlist.length).toEqual(0);
  });
  it('should getRandomWordpairFromList', () => {
    service.wordlist.push(testWordPair);
    expect(service.getRandomWordpairFromList().secondaryLanguage).toEqual(testWordPair.secondaryLanguage);
  });
  it('should getRandomPrimaryOrSecondaryLanguage', () => {
    const language = service.getRandomPrimaryOrSecondaryLanguage();
    expect(language === 'primaryLanguage' || language === 'secondaryLanguage').toBeTrue();
  });
  it('should getUnknownWord', () => {
    const knownLanguage = 'primaryLanguage';
    expect(service.getUnknownWord(knownLanguage, testWordPair)).toEqual('otherLanguage');
  });
  it('should isTranslationCorrect', () => {
    const knownLanguage = 'primaryLanguage';
    const translation1 = 'falsch';
    const translation2 = 'otherLanguage';

    expect(service.isTranslationCorrect(translation1, knownLanguage, testWordPair)).toBeFalse();
    expect(service.isTranslationCorrect(translation2, knownLanguage, testWordPair)).toBeTrue();
  });
  it('should loadExampleData', () => {
    service.wordlist = [];
    service.loadExampleData();
    expect(service.wordlist[0].primaryLanguage).toEqual('ja');
  });
  it('should emptyWordlist', () => {
    service.emptyWordlist();
    expect(service.wordlist.length).toEqual(0);
  });
  it('should getUnknownLanguage', () => {
    expect(service.getUnknownLanguage('primaryLanguage')).toEqual('secondaryLanguage');
  });
});
