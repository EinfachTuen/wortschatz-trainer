import {Injectable} from '@angular/core';
import {Wordpair} from './model/wordpair';
import wordListExample from './mockdata/wordlist.mock.json';

@Injectable({
  providedIn: 'root'
})
export class WordpairService {
  public wordlist: Wordpair[] = [];
  private wordListExample: Wordpair[] = wordListExample; // necessary cause it comes as from json import
  public languages = {
    primaryLanguage: 'Deutsch',
    secondaryLanguage: 'Chinesisch'
  };

  constructor() {
    this.updateWordlistFromStorage();
  }
  addWordPairToWordList(wordpair: Wordpair): void {
    this.wordlist = [...this.wordlist, wordpair];
    this.saveWordlistInStorage();
  }
  updateWordlistFromStorage(): void {
    this.wordlist = JSON.parse(localStorage.getItem('wordlist'));
    if (!this.wordlist) {
      this.wordlist = [];
    }
  }
  saveWordlistInStorage(): void {
    localStorage.setItem('wordlist', JSON.stringify(this.wordlist));
  }
  deleteWordPairFromList(wordpairToDelete: Wordpair): void { // can be refactored to use list as dictionary
    this.wordlist = this.wordlist.filter((wordpairListElement) => {
      return wordpairListElement.uuid !== wordpairToDelete.uuid;
    });
    this.saveWordlistInStorage();
  }
  updateWordPairInList(wordpair: Wordpair): void {
    const wordpairIndex = this.wordlist.findIndex((ele => ele.uuid === wordpair.uuid));
    this.wordlist[wordpairIndex] = wordpair;
    this.saveWordlistInStorage();
  }

  getRandomWordpairFromList(): Wordpair {
    const wordpairArray = this.wordlist;
    const randomIndex = Math.floor(Math.random() * wordpairArray.length);
    return wordpairArray[randomIndex];
  }
  getRandomPrimaryOrSecondaryLanguage(): string {
    if (Math.random() < 0.5){
      return 'primaryLanguage';
    } else {
      return 'secondaryLanguage';
    }
  }
  getUnknownWord(knownLanguage: string, wordpair: Wordpair): string{
    return wordpair[this.getUnknownLanguage(knownLanguage)];
  }
  isTranslationCorrect(translation: string, knownLanguage: string, wordpair: Wordpair): boolean {
    return this.getUnknownWord(knownLanguage, wordpair) === translation;
  }
  loadExampleData(): void{
    this.wordlist = this.wordListExample;
  }
  emptyWordlist(): void{
    this.wordlist = [];
  }
  getUnknownLanguage(knownLanguage: string): string{
    return knownLanguage ===  'primaryLanguage' ?  'secondaryLanguage' : 'primaryLanguage';
  }
}
