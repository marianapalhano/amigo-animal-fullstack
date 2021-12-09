import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adopter } from '../../models/adopter.model';
import { AdoptersService } from '../../services/adopters.service';
import { PetsService } from 'src/app/features/pets/services/pets.service';
import { Pet } from 'src/app/features/pets/models/pet.model';

@Component({
  templateUrl: './adopter-details.component.html',
  styleUrls: ['./adopter-details.component.scss']
})
export class AdopterDetailsComponent implements OnInit {
  adopter?: Adopter;

  myPets: Array<Pet> =[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private adoptersService: AdoptersService,
    private petsService: PetsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.adoptersService.getAdopterById(params['id']).subscribe(adopter => {
        this.adopter = adopter;

        this.petsService.getPets().subscribe(pets => {
          pets.filter(pet => {
            
            this.adopter?.pets.forEach(petId => {
              if (pet.id === petId) {
                this.myPets.push(pet);
              }
            });
          });

        });
        
      });
    });
  }
}