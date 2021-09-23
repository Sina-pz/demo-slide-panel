import { Component } from '@angular/core';
enum PanelType {
  Left,
Middle,
Right
}
enum PanelsStateType {
First,
Second,
Third
}
@Component({
  selector: 'my-app',
  styleUrls: [ './app.component.scss' ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  isLeftVisible = true;
  isCssAnimVisible = false;
  panelType = PanelType;
  PanelsStateType = PanelsStateType

  isLeftPanelToSmallToLeft = false;
  isLeftPanelToLargeToRight = false;
  isLeftPanelToLeft = false;
  isLeftPanelToRight = false;

  isSecond = false;


  onClick(): void {

  }
  onLeftClick(): void {
this.isLeftPanelToSmallToLeft = true;
this.isSecond = true;
  }
  onMiddleClick(): void {
    this.isLeftPanelToLeft = true;

  }
  onRightClick(): void {

  }

}
