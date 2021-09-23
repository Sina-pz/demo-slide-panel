import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

// type PaneType = 'left' | 'right' | 'middle';
type PaneType = 'left' | 'right';

@Component({
  selector: 'my-slide-panel',
  styleUrls: [ './slide-panel.component.scss' ],
  templateUrl: './slide-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(10%)' })),
      state('right', style({ transform: 'translateX(-60%)' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class SlidePanelComponent {
  @Input() activePane: PaneType = 'left';
}
