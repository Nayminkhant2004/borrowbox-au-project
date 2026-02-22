export const categories = [
  "Electronics",
  "Tools",
  "Books",
  "Kitchen",
  "Sports",
  "Other",
];

export const demoItems = [
  { id: 1, title: "Power Drill", category: "Tools", owner: "Mike", available: true },
  { id: 2, title: "Rice Cooker", category: "Kitchen", owner: "Anna", available: true },
  { id: 3, title: "Football", category: "Sports", owner: "John", available: false },
  { id: 4, title: "Calculator", category: "Electronics", owner: "You", available: true },
];

export const borrowHistory = [
  { id: 1, item: "Power Drill", owner: "Mike", date: "2026-02-01", status: "Returned" },
  { id: 2, item: "Football", owner: "John", date: "2026-02-10", status: "Borrowed" },
];

export const topLenders = [
  { name: "Anna", itemsLent: 12 },
  { name: "Mike", itemsLent: 10 },
  { name: "John", itemsLent: 9 },
  { name: "Sara", itemsLent: 7 },
  { name: "David", itemsLent: 6 },
  { name: "Lina", itemsLent: 5 },
  { name: "Tom", itemsLent: 4 },
  { name: "Emma", itemsLent: 3 },
  { name: "Chris", itemsLent: 2 },
  { name: "Nina", itemsLent: 1 },
];

export const locations = [
  "Sukhumvit",
  "Silom",
  "Sathorn",
  "Ari",
  "Ratchada",
  "Lat Phrao",
  "Bang Na",
  "On Nut",
  "Thonglor",
  "Ekkamai"
];