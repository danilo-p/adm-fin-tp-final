import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tab = "app-portfolio-replicante";

  selecionaTab(tab) {
    this.tab = tab;
  }
}
