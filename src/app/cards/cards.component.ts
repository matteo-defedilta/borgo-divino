import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(private change_value_form: FormBuilder, private cardService: CardsService) { }

  cSelector = "createCard";

  cardValue: FormGroup;
  cardTitle: string;
  cardDesc: string;
  cardImg: string;


  ngOnInit(): void {
    this.cardValue = this.change_value_form.group({
      cardTitle: ["", Validators.required],
      cardDesc: ["", Validators.required],
      cardImg: ["", Validators.required]
    })
  }

  newCard() {
    this.cardService.addNewCard(this.cardValue.value)
  }
}
