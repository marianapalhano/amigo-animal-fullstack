import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './msg-dialog.component.html',
  styleUrls: ['./msg-dialog.component.scss']
})
export class MsgDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title:string, message: string }) { }

  ngOnInit(): void {
  }

}
