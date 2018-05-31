import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: 'logoutdialog',
  templateUrl: 'logoutdialog.component.html',

})
export class logoutdialogcomponent {

  constructor(

    public dialogRef: MatDialogRef<logoutdialogcomponent>,
    private router: Router) { }

  onNoClick(): void {

    this.dialogRef.close();
  }
  get() {

    this.router.navigateByUrl('/login');

    this.dialogRef.close();
  }


}
