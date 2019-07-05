import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { ContactService } from '../Services/contact.service';

@Component({
  selector: 'app-popup-box',
  templateUrl: './popup-box.component.html',
  styleUrls: ['./popup-box.component.css']
})
export class PopupBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HomeComponent>, @Inject(MAT_DIALOG_DATA) public data: IContact, private _contactService: ContactService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  subscribeClick(data: IContact): void {
    this._contactService.postContact(data).subscribe((data: IContact) => console.log(JSON.stringify(data)));
    this.onNoClick();
  }

  ngOnInit() {
  }

}
