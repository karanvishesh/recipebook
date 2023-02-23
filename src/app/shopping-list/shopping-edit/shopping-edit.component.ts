import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInpuRef: ElementRef = new ElementRef('');
  @ViewChild('amountInput') amountInputRef: ElementRef = new ElementRef('');
  constructor(public shoppingListService: ShoppingListService) {}
  onAddItem() {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.nameInpuRef.nativeElement.value,
        this.amountInputRef.nativeElement.value
      )
    );
  }
}
