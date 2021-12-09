import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgosService } from 'src/app/features/ngos/services/ngos.service';
import { Pet } from '../../models/pet.model';
import { PetsService } from '../../services/pets.service';

@Component({
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {

  pet?: Pet;
  ngoName?: string;

  constructor(
    private petsService: PetsService,
    private ngosService: NgosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.petsService.getPetById(params['id']).subscribe(pet => {
        this.pet = pet;

          this.ngosService.getNgoById(this.pet.ngoId).subscribe(ngo => {
            this.ngoName = ngo.name;
          });

      });
    });
  }

}
