import { Component, OnInit, ViewChild } from '@angular/core';
import logindata from '../data.json';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ToastrService } from 'ngx-toastr';
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

  constructor() { }

  ngOnInit(): void {
    
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userdata, event.previousIndex, event.currentIndex);
  }

  confirmation () {

  }

  deleteRow() {

    document.querySelectorAll('#tableID .select:checked').forEach(e => {
      // console.log("--------",e.parentNode?.parentNode)
      let item: any
      item = e.parentNode?.parentNode
      item.remove()
    });
  }
  
}
