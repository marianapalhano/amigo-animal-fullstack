import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  @Input()
  pets?: Array<Pet>;

  constructor() { }

  ngOnInit(): void {
  }

}
