import { Component } from '@angular/core';
import { ContactComponent as ContactFormComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
