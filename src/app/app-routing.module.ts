import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeeSearchComponent } from "./employee-search/employee-search.component";
import { InventoryDetailsComponent } from "./inventory-details/inventory-details.component";
import { InventorySearchComponent } from "./inventory-search/inventory-search.component";
import { ITEmployeeDetailsComponent } from "./it-employee-details/it-employee-details.component";
import { ITHeadDetailsComponent } from "./it-head-details/it-head-details.component";
import { RepairSearchComponent } from "./repair-search/repair-search.component";
import { RepairRequestComponent } from "./repair-request/repair-request.component";
import { AddDeviceComponent } from "./add-device/add-device.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";


const routes: Routes = [
  { path: "employee-details", component: EmployeeDetailsComponent },
  { path: "employee-search", component: EmployeeSearchComponent },
  { path: "inventory-details", component: InventoryDetailsComponent },
  { path: "inventory-search", component: InventorySearchComponent },
  { path: "it-employee-details", component: ITEmployeeDetailsComponent },
  { path: "it-head-details", component: ITHeadDetailsComponent },
  { path: "repair-search", component: RepairSearchComponent },
  { path: "repair-request", component: RepairRequestComponent },
  { path: "add-device", component: AddDeviceComponent },
  { path: "add-employee", component: AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
