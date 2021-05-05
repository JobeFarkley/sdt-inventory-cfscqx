export let USERS: any = [
  {
    UID: 523645,
    username: "ITEmp.Test",
    firstName: "IT",
    lastName: "Employee",
    password: "123456",
    permissions: 3
  },
  {
    UID: 877530,
    username: "ITHead.Test",
    firstName: "IT",
    lastName: "Head",
    password: "123456",
    permissions: 4
  },
  {
    UID: 225549,
    username: "Employee.Test",
    firstName: "Employee",
    lastName: "Test",
    password: "123456",
    permissions: 2
  }
];

export let DEVICES: any = [
  {
    DID: 10536,
    deviceName: "PC Workstation #1",
    assignedUID: 523645
  },
  {
    DID: 36525,
    deviceName: "PC Workstation #2",
    assignedUID: 636598
  },
  {
    DID: 56895,
    deviceName: "Workstation Tablet",
    assignedUID: 556789
  },
  {
    DID: 85478,
    deviceName: "Mobile Workstation",
    assignedUID: 357895
  }
];

export let REPAIRS: any = [
  {
    RID: 25368,
    DID: 36525,
    issue: "Won't turn on.",
    fix: "Plugged in",
    status: "Resolved"
  },
  {
    RID: 56985,
    DID: 56895,
    issue: "Battery lasts less than 10 min off charger",
    fix: "Uninstalled non-work apps.",
    status: "Monitoring"
  },
  {
    RID: 48569,
    DID: 85478,
    issue: "Trackpad not responding",
    fix: "",
    status: "Pending"
  },
  {
    RID: 24956,
    DID: 36525,
    issue: "Keeps bothering me to update",
    fix: "Restarted PC",
    status: "Resolved"
  }
];
