import { Component, OnInit } from '@angular/core';
import {WordpairService} from '../wordpair.service';
import {Wordpair} from '../model/wordpair';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.css']
})
export class WordlistComponent implements OnInit {

  constructor(public wordpairService: WordpairService) { }

  ngOnInit(): void {
  }
  addWordPairButtonClicked(): void{
    this.wordpairService.addWordPairToWordList(new Wordpair());
  }

  addNewWordpair(newWordPrimaryInput: HTMLInputElement, newWordSecondaryInput: HTMLInputElement): void {
    const wordpair = new Wordpair();
    wordpair.secondaryLanguage = newWordSecondaryInput.value;
    wordpair.primaryLanguage = newWordPrimaryInput.value;
    newWordPrimaryInput.value = '';
    newWordSecondaryInput.value = '';
    this.wordpairService.addWordPairToWordList(wordpair);
  }
}
