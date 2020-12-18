import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../interfaces/card';
import { CardPageService } from './card-page.service';


@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cardPageService: CardPageService
  ) { }

  singleCard: Card

  ngOnInit(): void {
    this.cardPageService.readCard(this.route.snapshot.paramMap.get('id')).get().subscribe(doc => {
      this.singleCard = doc.data()
    });
  }
}
