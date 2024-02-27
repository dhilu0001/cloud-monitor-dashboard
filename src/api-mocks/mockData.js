import { green, red } from "@mui/material/colors";

export const cloudResourcesData = [
  {
    id: 1,
    name: "WebServer-001",
    status: "Online",
    account: "Production Account",
    region: "US-East-1",
  },
  {
    id: 2,
    name: "DB-Server-123",
    status: "Offline",
    account: "Staging Account",
    region: "EU-West-2",
  },
  {
    id: 3,
    name: "AppServer-007",
    status: "Online",
    account: "Development Account",
    region: "Asia-Southeast-1",
  },
  {
    id: 4,
    name: "Storage-456",
    status: "Online",
    account: "Production Account",
    region: "US-West-2",
  },
  {
    id: 5,
    name: "Cache-002",
    status: "Offline",
    account: "Staging Account",
    region: "US-East-1",
  },
  {
    id: 6,
    name: "Analytics-Server-789",
    status: "Online",
    account: "Development Account",
    region: "EU-West-2",
  },
  {
    id: 7,
    name: "DB-Server-987",
    status: "Online",
    account: "Production Account",
    region: "Asia-Southeast-1",
  },
  {
    id: 8,
    name: "API-Server-345",
    status: "Offline",
    account: "Staging Account",
    region: "US-West-2",
  },
  {
    id: 9,
    name: "File-Storage-111",
    status: "Online",
    account: "Development Account",
    region: "EU-West-2",
  },
  {
    id: 10,
    name: "MessageQueue-999",
    status: "Offline",
    account: "Production Account",
    region: "Asia-Southeast-1",
  },
  {
    id: 11,
    name: "Notification-Server-333",
    status: "Online",
    account: "Staging Account",
    region: "US-East-1",
  },
  {
    id: 12,
    name: "Search-Engine-567",
    status: "Online",
    account: "Development Account",
    region: "Asia-Southeast-1",
  },
  {
    id: 13,
    name: "Authentication-Server-876",
    status: "Offline",
    account: "Production Account",
    region: "EU-West-2",
  },
  {
    id: 14,
    name: "Queue-Processor-444",
    status: "Online",
    account: "Staging Account",
    region: "US-West-2",
  },
  {
    id: 15,
    name: "Monitoring-Server-222",
    status: "Offline",
    account: "Development Account",
    region: "Asia-Southeast-1",
  },
  {
    id: 16,
    name: "Notification-Service-555",
    status: "Online",
    account: "Production Account",
    region: "US-East-1",
  },
  {
    id: 17,
    name: "Reporting-Server-999",
    status: "Online",
    account: "Staging Account",
    region: "EU-West-2",
  },
  {
    id: 18,
    name: "File-Server-333",
    status: "Offline",
    account: "Development Account",
    region: "US-West-2",
  },
  {
    id: 19,
    name: "Messaging-App-111",
    status: "Online",
    account: "Production Account",
    region: "Asia-Southeast-1",
  },
  {
    id: 20,
    name: "Search-Service-777",
    status: "Offline",
    account: "Staging Account",
    region: "US-East-1",
  },
];

export const generateMockAlert = () => {
  const messages = [
    { message: "Server overload", severity: "error" },
    { message: "Disk space running low", severity: "warning" },
    { message: "Resource usage spike", severity: "error" },
  ];

  // Append a timestamp to the message
  const timestamp = new Date().toLocaleTimeString();
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const messageWithTimestamp = `${randomMessage.message} - ${timestamp}`;

  return { severity: randomMessage.severity, message: messageWithTimestamp };
};

const server1Data = [2, 35, 50, 45, 60, 15, 10];
const server2Data = [10, 45, 55, 40, 70, 25, 2];
const server3Data = [10, 25, 75, 30, 50, 20, 20];

export const timeLabels = [
  "08:00 AM",
  "10:00 AM",
  "12:00 AM",
  "02:00 PM",
  "04:00 PM",
  "06:00 PM",
  "08:00 PM",
];

export const CPUUsageData = [
  { data: server1Data, label: "Server 1 (%)" },
  { data: server2Data, label: "Server 2 (%)" },
  { data: server3Data, label: "Server 3 (%)" },
];

export const MemoryConsumptionData = [
  { id: 0, value: 10, label: "VM 1" },
  { id: 1, value: 15, label: "VM 2" },
  { id: 2, value: 20, label: "VM 3" },
  { id: 3, value: 35, label: "VM 4" },
  { id: 4, value: 25, label: "VM 5" },
];

export const ResourceUsageData = [
  {
    cpu: 59,
    memory: 57,
    network: 86,
    cloudStorage: 21,
    month: "Dec",
  },
  {
    cpu: 50,
    memory: 52,
    network: 78,
    cloudStorage: 28,
    month: "Jan",
  },
  {
    cpu: 47,
    memory: 53,
    network: 106,
    cloudStorage: 41,
    month: "Feb",
  },
];

export const ResourceUsageSeries = [
  { dataKey: "cpu", label: "CPU" },
  { dataKey: "memory", label: "Memory" },
  { dataKey: "network", label: "Network" },
  { dataKey: "cloudStorage", label: "Cloud Storage" },
];

export const ResourceUsageChartSetting = {
  yAxis: [
    {
      label: "Utilisation (%)",
    },
  ],
  width: 500,
  height: 380,
};

export const ServerStatusOptions = [
  "Hardware",
  "Disk",
  "Availability",
  "Performance",
  "Exchange",
  "General",
];

export const getRandomColor = (number) => {
  if (number === 0) {
    return green[500];
  } else if (number > 0) {
    return red[500];
  }
};

export const getRandomNumber = () => Math.floor(Math.random() * 4);
