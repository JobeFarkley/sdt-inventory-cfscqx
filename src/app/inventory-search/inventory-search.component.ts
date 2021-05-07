import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {DEVICES} from '../mock-data';
import {Device} from '../model/device';

@Component({
  selector: 'app-inventory-search',
  templateUrl: './inventory-search.component.html',
  styleUrls: ['./inventory-search.component.css']
})
export class InventorySearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  devices: Device[] = DEVICES;
  selectedDevice: Device;
  form: FormGroup;
  searchText: string;

  DID: number;
  deviceName: string;
  assignedUID: number;

  deleteDevice(device: Device){
       this.devices.splice(this.devices.indexOf(device),1)
  }
  

  editDevice(device: Device) {
    this.selectedDevice = device;
    this.form = new FormGroup({
      DID: new FormControl(device.DID),
      deviceName: new FormControl(device.deviceName),
      assignedUID: new FormControl(device.assignedUID),
    });
      
  }

 save() {
    this.selectedDevice.DID= this.form.value.DID;
    this.selectedDevice.deviceName= this.form.value.deviceName;
    this.selectedDevice.assignedUID= this.form.value.assignedUID;
    this.cancel();
  }

  cancel() {
    this.selectedDevice = null;
    this.form = null;
  }
}