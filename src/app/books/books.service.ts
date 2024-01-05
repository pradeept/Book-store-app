import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}
  getBooks() {
    return [
      {
        name: 'Ikigai',
        author: 'Hector Gracia',
        src: 'https://m.media-amazon.com/images/I/51xwGSNX-EL._SY445_SX342_.jpg',
        cost: 352,
      },
      {
        name: 'No Longer Human',
        author: 'Osamu Dazai',
        src: 'https://m.media-amazon.com/images/I/61WikOg1SQL._SL1500_.jpg',
        cost: 309,
      },
      {
        name: 'The Subtle Art Of Not Giving a F',
        author: 'Mark Mansoon',
        src: 'https://m.media-amazon.com/images/I/511vJPN7p5L._SY445_SX342_.jpg',
        cost: 316,
      },
    ];
  }
}
