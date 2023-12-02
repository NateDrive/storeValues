import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.page.html',
  styleUrls: ['./day-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class DayViewPage implements OnInit {
  mealForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.currentDate = new Date().toISOString();
    this.mealForm = this.fb.group({
      breakfast: [''],
      lunch: [''],
      dinner: [''],
      snack: [''],
    });
  }
  currentDate: string;

  ngOnInit() {}
}
