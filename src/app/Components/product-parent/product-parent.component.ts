import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { DisplayProductComponent } from '../display-product/display-product.component';


@Component({
  selector: 'app-product-parent',
  imports: [ProductComponent,DisplayProductComponent],
  templateUrl: './product-parent.component.html',
  styles: ``
})
export class ProductParentComponent {
  studentData : {name:string , age:number|null, id:number|null} = {name:"" , age : null , id:null} ;
  productInfo:any ;

  receiveData(dataCont:any)
  {
    this.productInfo = dataCont ;
    console.log("App",this.productInfo) ;
  }


}
