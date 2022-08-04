import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX258_BO1,204,203,200_QL70_ML2_.jpg',
        amount: 700,
      },
      {
        name: 'Pragmatic Programmer',
        author: 'David Thomas',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX258_BO1,204,203,200_QL70_ML2_.jpg',
        amount: 800,
      },
      {
        name: 'Art Of Computer Programming',
        author: 'Donald E. Knuth',
        image: 'https://media.s-bol.com/qP8woW9AnV7/550x473.jpg',
        amount: 18300,
      },
      {
        name: 'Introduction to Algorithms',
        author: 'Thomas H. Cormen',
        image: 'https://media.s-bol.com/J8qQMvXwAYBg/168x189.jpg',
        amount: 1500,
      },
    ];
  }
}

class Name {
  constructor(name: string) {}
}
