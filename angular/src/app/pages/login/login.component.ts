import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isFirstActive = false;
  cta = 'K objednání vyšetření';

  constructor() {}

  ngOnInit(): void {}

  onClickIsFirstActive(event: Event) {
    if (this.isFirstActive) {
      this.isFirstActive = false;
      this.cta = 'K objednání vyšetření';
    } else {
      this.isFirstActive = true;
      this.cta = 'K objednání receptu';
    }
  }
}
