import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  message:any;

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>) { }

  ngOnInit(): void {
  }

  deleteRow() {
    // window.alert("demo");
    this.dialogRef.close();
     document.querySelectorAll('#tableID .select:checked').forEach(e => {
       // console.log("--------",e.parentNode?.parentNode)
       let item: any
       item = e.parentNode?.parentNode
       item.remove()
     });
   }

}
