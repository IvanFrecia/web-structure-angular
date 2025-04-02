import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { PreviewComponent } from '../../components/preview/preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, PreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
