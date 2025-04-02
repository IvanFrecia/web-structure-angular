import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  // You can add properties such as the image URL or tagline here.
  brandingImage: string = 'assets/branding-image.jpg';  // Replace with your actual image path.
  tagline: string = 'Innovating the Future of Web Development';
}
