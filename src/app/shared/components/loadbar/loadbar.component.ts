import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loadbar',
  templateUrl: './loadbar.component.html',
  styleUrls: ['./loadbar.component.scss']
})
export class LoadbarComponent {
  @Input("show") isLoading = true
}
