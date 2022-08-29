import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../PresentationRegisterMVP/services/register.service';
import { Router } from '@angular/router';
import { Seller } from '../PresentationRegisterMVP/models/seller.mode';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-PresentationRegister',
  templateUrl: './register.components.html',
})
export class RegisterComponent implements OnInit {
  public Sellers: Seller[] = [];

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerService.getAllSellers().subscribe((resp: any) => {
      console.log(resp);
      this.Sellers = resp;
    });
  }

  edit(item: any) {
    console.log('item: ', item);
    this.router.navigateByUrl(`/edit/${item.code}`);
  }

  remove(item: any) {
    this.registerService.DeleteSeller(item.code);
  }


  newp() {
    this.router.navigateByUrl(`/edit/${0}`);
  }
}
