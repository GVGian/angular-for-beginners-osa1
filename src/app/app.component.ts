import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  data = {
    title: 'Angular'
  };

  onLogoClicked() {
    alert('Terve');
  }

  onKeyUp(newTitle:string) {
this.data.title = newTitle;
  }
}

