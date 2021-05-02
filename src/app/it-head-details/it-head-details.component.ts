import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {DEVICES} from '../mock-data';
import {Device} from '../model/device';



@Component({
  selector: 'app-it-head-details',
  templateUrl: './it-head-details.component.html',
  styleUrls: ['./it-head-details.component.css']
})
export class ITHeadDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
devices: Device[] = DEVICES;
  selecteddevice: Device;
  form: FormGroup;
  searchText: string;

  DID: number;
  deviceName: string;
  assignedUID: number;

  addDevice(){
    const newDevice: Device = {
      DID: this.DID,
      deviceName: this.deviceName,
      assignedUID: this.assignedUID,
    }
    this.devices.push(newDevice);
  }
  deleteDevice(device: Device){
       this.devices.splice(this.devices.indexOf(device),1)
  }
  

  editDevice(device: Device) {
    this.selecteddevice = device;
    this.form = new FormGroup({
      DID: new FormControl(device.DID),
      deviceName: new FormControl(device.deviceName),
      assignedUID: new FormControl(device.assignedUID),
    });
      
  }

 save() {
    this.selecteddevice.DID= this.form.value.DID;
    this.selecteddevice.deviceName= this.form.value.deviceName;
    this.selecteddevice.assignedUID= this.form.value.assignedUID;
    this.cancel();
  }

  cancel() {
    this.selecteddevice = null;
    this.form = null;
  }

}

