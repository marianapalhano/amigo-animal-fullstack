import { Component, OnInit } from '@angular/core';
import { Adopter } from '../../models/adopter.model';
import { AdoptersService } from '../../services/adopters.service';

@Component({
  selector: 'app-adopter-list',
  templateUrl: './adopter-list.component.html',
  styleUrls: ['./adopter-list.component.scss']
})
export class AdopterListComponent implements OnInit {
  adopters?: Array<Adopter> = [];
  filteredAdopters?: Array<Adopter> = [];
  searchBy?: string = 'name';

  constructor(private adoptersService: AdoptersService) { }

  ngOnInit(): void {
    this.adoptersService.getAdopters().subscribe(adopters => {
      this.adopters = adopters;
      this.filteredAdopters = this.adopters;
    });
    
  }

  searchAdopter(event: any) {
    const term = event?.target.value;

    if (this.searchBy === 'name') {
      this.filteredAdopters = this.adopters?.filter(adopter => {
        return adopter.name.toUpperCase().search(term.toUpperCase()) > -1;
      });
    } else if (this.searchBy === 'id') {
        this.filteredAdopters = this.adopters?.filter(adopter => {
          return adopter.id === parseInt(term);
        });
    }

    if (this.filteredAdopters?.length === 0 && term.length === 0) {
      this.filteredAdopters = this.adopters;
    } 
  }
}