import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MealStorageService } from '../services/meal-storage.service'; 
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.page.html',
  styleUrls: ['./day-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class DayViewPage implements OnInit {
  mealForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private mealStorageService: MealStorageService
  )  {
    
    this.currentDate = new Date().toISOString();
    this.mealForm = this.fb.group({
      breakfast: [''],
      lunch: [''],
      dinner: [''],
      snack: [''],
    });

    const savedMeal = this.mealStorageService.getSavedMeal();
    const defaultValues = {breakfast: '', lunch: '', dinner: '', snack: ''};
    this.mealForm.setValue({ ...defaultValues, ...savedMeal });
  }
  currentDate: string;

  ngOnInit() {}

  saveMeal() {
    const mealValues = this.mealForm.value;
    console.log('Saved meal:', mealValues);

    // Save the values to the service
    this.mealStorageService.saveMeal(mealValues);
  }
}
