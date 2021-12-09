import { Component, Input, OnInit } from '@angular/core';
import { Ngo } from '../../models/ngo.model';

@Component({
  selector: 'app-ngo-list',
  templateUrl: './ngo-list.component.html',
  styleUrls: ['./ngo-list.component.scss']
})
export class NgoListComponent implements OnInit {

  @Input()
  ngos: Array<Ngo> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
