import { Component, Input, OnInit } from '@angular/core';
import { Ngo } from '../../models/ngo.model';

@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.scss']
})
export class NgoComponent implements OnInit {
  @Input()
  ngo?: Ngo;

  constructor() { }

  ngOnInit(): void {
  }

}
