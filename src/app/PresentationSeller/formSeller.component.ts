import { Component, Input, OnInit } from '@angular/core';
import { RegisterService } from '../PresentationRegisterMVP/services/register.service';

@Component({
  selector: 'appformSeller',
  templateUrl: './formSeller.component.html',
})
export class formSellerComponent implements OnInit {
  @Input() Seller: Array<any> = [];
  constructor() {}

  ngOnInit(): void {}
}
