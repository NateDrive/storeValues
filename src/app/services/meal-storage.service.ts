import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealStorageService {
  private savedMeal: any = {};

  saveMeal(meal: any) {
    this.savedMeal = meal;
  }

  getSavedMeal() {
    return this.savedMeal;
  }
}
