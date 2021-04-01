import * as uuid from 'uuid';

export class Wordpair {
  uuid: string;
  primaryLanguage: string;
  secondaryLanguage: string;

  constructor() {
    this.uuid = uuid.v4();
  }

}
