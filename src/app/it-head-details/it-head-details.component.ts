import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {ITEMS} from '../../items';

interface Item{
  sn: number;
  quantity: number;
  name: string;
  location : string;
}

@Component({
  selector: 'app-it-head-details',
  templateUrl: './it-head-details.component.html',
  styleUrls: ['./it-head-details.component.css']
})
export class ITHeadDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
items: Item[] = ITEMS;
  selectedItem: Item;
  form: FormGroup;
  searchText: string;

  sn: number;
  quantity: number;
  name: string;
  location: string;

  addItem(){
    const newItem: Item = {
      sn: this.sn,
      quantity: this.quantity,
      name: this.name,
      location: this.location
    }
    this.items.push(newItem);
  }
  deleteItem(item: Item){
       this.items.splice(this.items.indexOf(item),1)
  }
  

  editItem(item: Item) {
    this.selectedItem = item;
    this.form = new FormGroup({
      sn: new FormControl(item.sn),
      quantity: new FormControl(item.quantity),
      name: new FormControl(item.name),
      location: new FormControl(item.location)
    });
      
  }

 save() {
    this.selectedItem.sn= this.form.value.sn;
    this.selectedItem.quantity= this.form.value.quantity;
    this.selectedItem.name= this.form.value.name;
    this.selectedItem.location= this.form.value.location;
    this.cancel();
  }

  cancel() {
    this.selectedItem = null;
    this.form = null;
  }

}

