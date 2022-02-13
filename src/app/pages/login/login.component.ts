import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  title = 'Objednávkový systém'
  first = ['Chci se', 'objednat na vyšetření']
  second = ['Chci si', 'objednat recept']
  first_active = false
  second_active = true
  cta = 'K objednání vyšetření'
  
  constructor() {
  }

  ngOnInit(): void {
  }

  onClickFirst(event: Event) {
    if (this.first_active) {
      this.first_active = false
      this.second_active = true
      this.cta = 'K objednání vyšetření'
    } 
  }

  onClickSecond(event: Event) {
    if (this.second_active) {
      this.first_active = true
      this.second_active = false
      this.cta = 'K objednání receptu'
    }
  }

}
