import { Component } from '@angular/core';
import { SafeUrlPipe } from "../../shared/safe-url.pipe";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  imports: [SafeUrlPipe],
  standalone: true
})
export class PreviewComponent {
  // URL for LongHorizon
  longHorizonUrl: string = 'https://www.longhorizon.tech';

  redirect() {
    // Redirect the browser to the LongHorizon URL
    window.open(this.longHorizonUrl, '_blank');
  }
}
