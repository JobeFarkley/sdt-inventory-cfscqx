export let USERS: any = [
  {
    UID: 523645,
    username: "Samuel.Dailey",
    firstName: "Samuel",
    lastName: "Dailey",
    password: "thereisnospoon",
    permissions: "ITEmp"
  },
  {
    UID: 877530,
    username: "Dalin.Christianson",
    firstName: "Dalin",
    lastName: "Christianson",
    password: "123456",
    permissions: "ITHead"
  },
  {
    UID: 225549,
    username: "Matt.Wilson",
    firstName: "Matt",
    lastName: "Wilson",
    password: "123456",
    permissions: "Emp"
  },
  {
    UID: 189023,
    username: "Kole.Dorbor",
    firstName: "Kole",
    lastName: "Dorbor",
    password: "123456",
    permissions: "ITEmp"
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
