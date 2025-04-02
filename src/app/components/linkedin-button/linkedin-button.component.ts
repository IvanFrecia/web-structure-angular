import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-linkedin-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './linkedin-button.component.html',
  styleUrl: './linkedin-button.component.scss'
})
export class LinkedinButtonComponent {
  @Input() url: string = 'https://www.linkedin.com/company/skylabs-developments';
  @Input() label: string = 'Visit us on LinkedIn';

  redirect(): void {
    window.open(this.url, '_blank');
  }
}
