import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../interfaces/card';
import { CardPageService } from './card-page.service';


@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {

  constructor(
    private router: Router,
    private cardPageService: CardPageService
  ) { }

  singleCard: Card

  ngOnInit(): void {
    this.cardPageService.readCard(this.router.url.substring(1)).get().subscribe(doc => {
      this.singleCard = doc.data()
    });
  }
}
