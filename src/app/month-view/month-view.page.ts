import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.page.html',
  styleUrls: ['./month-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MonthViewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
