import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Pet } from 'src/app/features/pets/models/pet.model';
import { MsgDialogComponent } from 'src/app/shared/dialogs/msg-dialog/msg-dialog.component';
import { Adopter } from '../../models/adopter.model';
import { AdoptersService } from '../../services/adopters.service';

@Component({
  selector: 'app-adopter',
  templateUrl: './adopter.component.html',
  styleUrls: ['./adopter.component.scss']
})
export class AdopterComponent implements OnInit {
  @Input()
  adopter?: Adopter;

  @Input()
  card: boolean = true;

  @Input()
  myPets?: Array<Pet>;

  constructor(
    private adoptersService: AdoptersService, 
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  navigateToDetails() {
    this.router.navigateByUrl(`adopter-details/${this.adopter?.id}`);
  }

  removeAdopter() {
    if (this.adopter) {
      this.adoptersService.removeAdopter(this.adopter.id).subscribe(result => {
        this.dialog.open(MsgDialogComponent, {
          width: '320px',
          data: { title: 'Sucesso', message: 'Adotante excluído.'}          
        });
      }, err => {
        console.log(err);
      });

    }
  }
}
