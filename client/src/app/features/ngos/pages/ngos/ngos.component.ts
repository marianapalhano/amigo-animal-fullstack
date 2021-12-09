import { Component, OnInit } from '@angular/core';
import { Ngo } from '../../models/ngo.model';
import { NgosService } from '../../services/ngos.service';

@Component({
  templateUrl: './ngos.component.html',
  styleUrls: ['./ngos.component.scss']
})
export class NgosComponent implements OnInit {

  ngos: Array<Ngo> = [];

  constructor(private ngosService: NgosService) { }

  ngOnInit(): void {
    this.ngosService.getNgos().subscribe(ngos => {
      this.ngos = ngos;
    });
  }

}
