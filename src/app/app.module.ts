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
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
import { RepairRequestComponent } from './repair-request/repair-request.component';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, EmployeeDetailsComponent, ITEmployeeDetailsComponent, ITHeadDetailsComponent, EmployeeSearchComponent, InventorySearchComponent, InventoryDetailsComponent, RepairRequestComponent, LoginComponent, SearchComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService]
})
export class AppModule { }
