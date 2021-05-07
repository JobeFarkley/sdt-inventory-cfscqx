export let USERS: any = [
  {
    UID: 523645,
    username: "Dalin.Christianson",
    firstName: "Dalin",
    lastName: "Christianson",
    password: "123456",
    permissions: 4
  },
  {
    UID: 877530,
    username: "Kole.Dorbor",
    firstName: "Kole",
    lastName: "Dorbor",
    password: "123456",
    permissions: 1
  },
  {
    UID: 225549,
    username: "Sam.Dailey",
    firstName: "Sam",
    lastName: "Dailey",
    password: "123456",
    permissions: 2
  },
    {
    UID: 225549,
    username: "Matt.Wilson",
    firstName: "Matt",
    lastName: "Wilson",
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
  },
  {
    DID: 46137,
    deviceName: "Mobile Workstation #2",
    assignedUID: "N/A"
  },
  {
    DID: 86549,
    deviceName: "Mobile Workstation #3",
    assignedUID: "N/A"
  },
  {
    DID: 77889,
    deviceName: "Workstation Tablet #2",
    assignedUID: "N/A"
  },
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

export let REQUESTS: any = [
  {
    RID: 938272,
    UID: 225549,
    DID: 461379
  },
  {
    RID: 456123,
    UID: 523645,
    DID: 865492
  }
]