import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ITEmployeeDetailsComponent } from './it-employee-details/it-employee-details.component';
import { ITHeadDetailsComponent } from './it-head-details/it-head-details.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { InventorySearchComponent } from './inventory-search/inventory-search.component';
import { InvetoryDetailsComponent } from './invetory-details/invetory-details.component';
import { RepairRequestComponent } from './repair-request/repair-request.component';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, EmployeeDetailsComponent, ITEmployeeDetailsComponent, ITHeadDetailsComponent, EmployeeSearchComponent, InventorySearchComponent, InvetoryDetailsComponent, RepairRequestComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService]
})
export class AppModule { }
