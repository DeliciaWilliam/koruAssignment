import { Component, OnInit, ViewChild } from '@angular/core';
import logindata from '../data.json';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfirmComponent } from '../confirm/confirm.component';
declare  var $: any;
export interface userData {
  username:String;
  phoneNum: String;
  email: String;
}
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  userdata : userData[] = logindata
  toastrConfig = { positionClass: "toast-bottom-right", closeButton: true, }

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userdata, event.previousIndex, event.currentIndex);
  }

  confirmation () {
    let dialog = this.dialog.open(ConfirmComponent, {
      disableClose: true
    });
  }


  deleteCurRow(index: any) {
    this.userdata.splice(index,1);
  }
  
}
