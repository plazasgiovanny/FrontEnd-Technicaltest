import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Seller } from '../PresentationRegisterMVP/models/seller.mode';
import { RegisterService } from '../PresentationRegisterMVP/services/register.service';

@Component({
  selector: 'app-seller-edit',
  templateUrl: './seller-edit.component.html',
  styleUrls: ['./seller-edit.component.scss'],
})
export class SellerEditComponent implements OnInit {
  formGroup: FormGroup;
  seller: Seller;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((prms: any) => {
      if (prms.params.code !=0) {
        this.registerService
          .getAllSellerByCode(prms.params.code)
          .subscribe((s) => {
            this.seller = s;
            this.createForm();
          });
      } else {
        this.seller = this.newInstance();
        this.createForm();
      }
    });
  }

  newInstance() {
    return new Seller();
  }
  createForm() {
    this.formGroup = this.fb.group({
      code: [this.seller.code, Validators.required],
      name: [this.seller.name, Validators.required],
      lastName: [this.seller.lasT_NAME, Validators.required],
      document: [this.seller.document, Validators.required],

    });
  }

  submit() {
    if (this.formGroup.invalid) {
      return;
    }
    var SellerUpdate :Seller = this.newInstance()



    SellerUpdate.code= this.seller.code == undefined?this.formGroup.controls.document.value:this.seller.code
    SellerUpdate.document= this.formGroup.controls.document.value
    SellerUpdate.name=this.formGroup.controls.name.value
    SellerUpdate.lasT_NAME=this.formGroup.controls.lastName.value
    SellerUpdate.citY_ID =this.seller.citY_ID == undefined||this.seller.citY_ID==0 ?1:this.seller.citY_ID


    if(this.seller.code != undefined){
      this.registerService.getUpdateSeller(this.seller.code, SellerUpdate).subscribe();

    }
    else{
      this.registerService.SaveSeller( SellerUpdate).subscribe();

    }
    this.goBack();
    // Guadar
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
