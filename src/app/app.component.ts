import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isRecipeView: boolean = true;
  title = 'recipebook';
  updateView(status: boolean) {
    this.isRecipeView = status;
  }
}
