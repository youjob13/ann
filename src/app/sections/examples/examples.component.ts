import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'chirk-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ExamplesComponent {
  @HostBinding('id') readonly id = 'examples';

  constructor(private readonly renderer: Renderer2) {}

  private isZoomed = false;

  public zoomPhoto(element: Element) {
    if (this.isZoomed) {
      this.renderer.addClass(element, 'zoomed');
    } else {
      this.renderer.removeClass(element, 'zoomed');
    }
    this.isZoomed = !this.isZoomed;
  }
}
