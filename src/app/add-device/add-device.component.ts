import { Component, OnInit } from '@angular/core';
import {DEVICES} from '../mock-data';
import {Device} from '../model/device'; 

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  devices: Device[] = DEVICES;

  DID: number;
  deviceName: string;
  assignedUID: number;

  addDevice(){
    const newDevice: Device = {
      DID: this.DID,
      deviceName: this.deviceName,
      assignedUID: 0
    }
    this.devices.push(newDevice)
  }
  

}