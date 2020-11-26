import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from './tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(private change_value_form: FormBuilder, private cardService: TicketsService) { }

  cardValue: FormGroup;
  cardTitle: string;
  cardDesc: string;


  ngOnInit(): void {
    this.cardValue = this.change_value_form.group({
      cardTitle: ["", Validators.required],
      cardDesc: ["", Validators.required]
    })
    this.cardService.readCards()

  }

  newCard() {
    this.cardService.addNewCard(this.cardValue.value)
  }


  cardList() {
    console.log(this.cardService.readCards());
  }

}
