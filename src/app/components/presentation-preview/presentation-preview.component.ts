import { Component, Input } from '@angular/core';
import { SafeUrlPipe } from '../../shared/safe-url.pipe';

@Component({
  selector: 'app-presentation-preview',
  standalone: true,
  imports: [SafeUrlPipe],
  templateUrl: './presentation-preview.component.html',
  styleUrls: ['./presentation-preview.component.scss']
})
export class PresentationPreviewComponent {
  @Input() presentationUrl: string = 'https://www.longhorizon.tech';

  redirect(): void {
    window.open(this.presentationUrl, '_blank');
  }
}
