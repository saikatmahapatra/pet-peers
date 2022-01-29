import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
  providers: [ApiService]
})
export class ListProductComponent implements OnInit {

  pets: any;

  constructor(private apiSvc: ApiService) { }

  ngOnInit(): void {
    this.getListOfPets();
  }

  getListOfPets(){
    return this.pets = [
      {'id': '1', 'name': 'American Eskimo Dog', 'price': '3400'},
      {'id': '2', 'name': 'American Foxhoud', 'price': '6799'},
      {'id': '3', 'name': 'Doverman', 'price': '3500'},
      {'id': '4', 'name': 'Golden Retriver', 'price': '4000'}
    ];
  }

  buyNow(id: any) {
    console.log('Buy now API call' +id);
  }

}
