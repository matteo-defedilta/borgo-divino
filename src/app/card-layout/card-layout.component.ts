import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from '../cards/cards.service';

import { Card } from "../interfaces/card";


@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss']
})
export class CardLayoutComponent implements OnInit {

  constructor(
    private cardService: CardsService,
    private router: Router,
  ) { }

  cards: Card[] = [];
  @Input() cardSelector: string;

  ngOnInit(): void {
    this.cardService.readCards().subscribe(collection => {
      let newCards = collection.map((data) => ({ ...data.payload.doc.data(), id: data.payload.doc.id }))
      .filter((x) => !this.cards.map(c => c.id).includes(x.id));

      this.cards = [ ...this.cards, ...newCards];      
    });
  }

  deleteCard = (card) => {
    this.cardService.deleteCards(card);
  }
}
