import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Output() sendDataEvent = new EventEmitter();

  myRegForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    Descr: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    link: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required, Validators.min(5)]),
    rate: new FormControl<number|null>(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
  });

  productSubmitVal:boolean = false ;

  //name
  nameValid: boolean = false;

  hideNameValid() {
    if(!this.productSubmitVal)
    {
      this.nameValid = false;
    }
    else
    {
      this.nameValid =true;
    }
  }
  showNameValid() {
    this.nameValid = true;
  }

  //descr
  descrValid: boolean = false;

  hideDescrValid() {
    if(!this.productSubmitVal)
    {
      this.descrValid = false;
    }
    else
    {
      this.descrValid =true;
    }
  }
  showDescrValid() {
    this.descrValid = true;
  }

  //price
  priceValid: boolean = false;

  hidePriceValid() {
    if(!this.productSubmitVal)
    {
      this.priceValid = false;
    }
    else
    {
      this.priceValid =true;
    }
  }
  showPriceValid() {
    this.priceValid = true;
  }

  //rate
  rateValid: boolean = false;

  hideRateValid() {
    if(!this.productSubmitVal)
    {
      this.rateValid = false;
    }
    else
    {
      this.rateValid =true;
    }
  }
  showRateValid() {
    this.rateValid = true;
  }

  get nameStatus() {
    return this.myRegForm.controls['name'].valid;
  }
  get descStatus() {
    return this.myRegForm.controls['Descr'].valid;
  }
  get imageStatus() {
    return this.myRegForm.controls['link'].valid;
  }
  get priceStatus() {
    return this.myRegForm.controls['price'].valid;
  }
  get rateStatus() {
    return this.myRegForm.controls['rate'].valid;
  }

  addProduct() {
    //send data to parent
    if (this.myRegForm.valid) {
      let sendObj = this.myRegForm.value ;
      console.log(sendObj);
      this.sendDataEvent.emit(sendObj);
      this.clearform();
      this.productSubmitVal = false ;
    } else {
      console.log('Data Entry wrong!!');
      this.displayErrorCause() ;
      this.productSubmitVal = true ;
    }

    console.log(this.myRegForm);
    console.log('form', this.myRegForm.value);
  }
  clearform() {
    this.myRegForm.reset();
    console.log('Cleared');
  }

  displayErrorCause() {
    if (!this.nameStatus) {
      this.nameValid = true;
    }

    if (!this.descStatus) {
      this.descrValid = true;
    }

    if (!this.priceStatus) {
      this.priceValid = true;
    }

    if (!this.rateStatus) {
      this.rateValid = true;
    }
  }
}
