import { Component, Inject, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopupBoxComponent } from '../popup-box/popup-box.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email: string;
  sub: any;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupBoxComponent, {
      width: '450px',
      data: { name: this.email }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      console.log(result);
    });
  }

  ngOnInit() {
    this.sub = interval(10000).subscribe((val) => { this.openDialog(); this.sub.unsubscribe(); });
  }

}
