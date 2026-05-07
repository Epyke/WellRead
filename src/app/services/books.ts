import { Injectable } from '@angular/core';
import { BookStatus } from '../models/book-status';

@Injectable({providedIn: 'root',})
export class Books {
  private books = [
  {
    id: '1',
    title: "L'Odyssée",
    cover: 'assets/books/odysse.jpg',
    author: 'Isabelle Pandazopoulos',
    publisher: 'Folio Junior',
    year: '2019',
    isbn: '978-2075127028',
    genre: 'Mythologie',
    pages: 128,
    language: 'Français',
    global: 4.5,
    description: 'Une adaptation accessible du chef-d’œuvre d’Homère.',
    userInteraction: {
      status: BookStatus.Nenhum,
      favorite: false,
      score: -1,
      actualPageNumber: 0,

    }
  },
  {
    id: '2',
    title: 'Un sac de billes',
    cover: 'assets/books/unsacdebilles.jpg',
    author: 'Joseph Joffo',
    publisher: 'Le Livre de Poche',
    year: '1973',
    isbn: '978-2253004318',
    genre: 'Autobiographie',
    pages: 256,
    language: 'Français',
    global: 4.7,
    description: 'Le périple de deux frères juifs dans la France occupée.',
    userInteraction: {
      status: BookStatus.Nenhum,
      favorite: false,
      score: -1,
      actualPageNumber: 0
    }
  },
  {
    id: '3',
    title: 'Robinson Crusoé',
    cover: 'assets/books/robinsonetcrusoe.jpg',
    author: 'Daniel Defoe',
    publisher: 'Hatier',
    year: '2017',
    isbn: '978-2401027664',
    genre: 'Aventure',
    pages: 192,
    language: 'Français',
    global: 4.2,
    description: 'La survie d’un homme seul sur une île déserte.',
    userInteraction: {
      status: BookStatus.Lendo,
      favorite: false,
      score: 2,
      actualPageNumber: 10
    }
  },
  {
    id: '4',
    title: 'La planète des singes',
    cover: 'assets/books/planetedessinges.jpg',
    author: 'Pierre Boulle',
    publisher: 'Pocket',
    year: '2001',
    isbn: '978-2266118187',
    genre: 'Science-Fiction',
    pages: 192,
    language: 'Français',
    global: 4.6,
    description: 'Un monde où les singes dominent l’humanité.',
    userInteraction: {
      status: BookStatus.Lendo,
      favorite: true,
      score: 4,
      actualPageNumber: 120
    }
  }
  ];
  
  getAll() {
    return this.books;
  }

  getById(id: string) {
    return this.books.find(book => book.id === id);
  }

  updateInteraction(id: string, data: any) {
  const book = this.books.find(b => b.id === id);
  if (book) book.userInteraction = { ...book.userInteraction, ...data };
}
}
