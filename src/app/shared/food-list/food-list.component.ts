import { Component, OnInit } from '@angular/core';

//Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<string>=[];

  constructor(private foodListService: FoodListService) {
    this.foodList = this.foodListService.foodList();
   }

  ngOnInit(): void {
  }

}