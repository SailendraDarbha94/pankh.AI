import { Component, Input } from '@angular/core';
interface Certificate {
  date: string;
  heading: string;
  logo: string;
  uni: string;
  cert: string;
}

@Component({
  selector: 'app-cert-card',
  templateUrl: './cert-card.component.html',
  styleUrls: ['./cert-card.component.scss']
})
export class CertCardComponent {

  @Input() certificate: Certificate | null = null

}
