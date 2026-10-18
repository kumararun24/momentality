export type DemoEvent = {
  date: string;
  time: string;
  title: string;
  person: string;
  members?: string[];
  location: string;
  color: string;
};

export type DemoTask = {
  id: number;
  title: string;
  assignee: string;
  due: string;
  priority: "High" | "Normal";
  completed: boolean;
};

export type TaskScreenTask = {
  id: number;
  title: string;
  assignee: string;
  due: string;
  category: "household" | "kids" | "health" | "finance" | "errands";
  priority: "High" | "Medium" | "Low";
  completed: boolean;
  origin?: "Email";
};

export const demoEvents: DemoEvent[] = [
  {
    date: "2026-10-16",
    time: "10:30 AM",
    title: "Pediatrician checkup",
    person: "Marcus Chen",
    location: "Oak Street Pediatrics",
    color: "bg-[#22C55E]",
  },
  {
    date: "2026-10-16",
    time: "3:00 PM",
    title: "Dentist appointment",
    person: "Marcus Chen",
    location: "Austin, TX",
    color: "bg-[#22C55E]",
  },
  {
    date: "2026-10-16",
    time: "3:00 PM",
    title: "Team Standup",
    person: "Sarah Chen",
    location: "Austin, TX",
    color: "bg-[#3B82F6]",
  },
  {
    date: "2026-10-16",
    time: "4:30 PM",
    title: "Soccer practice",
    person: "Emma Chen",
    location: "Riverside Fields",
    color: "bg-[#EC4899]",
  },
  {
    date: "2026-10-16",
    time: "6:30 PM",
    title: "Family dinner",
    person: "Chen family",
    members: ["Sarah Chen", "Marcus Chen", "Emma Chen", "Liam Chen"],
    location: "Home",
    color: "bg-[#22C55E]",
  },
];

export const calendarEvents: DemoEvent[] = [
  ...demoEvents,
  {
    date: "2026-10-01",
    time: "9:00 AM",
    title: "Work meeting",
    person: "Sarah Chen",
    location: "Austin, TX",
    color: "bg-[#3B82F6]",
  },
  {
    date: "2026-10-02",
    time: "10:00 AM",
    title: "Work meeting",
    person: "Marcus Chen",
    location: "Austin, TX",
    color: "bg-[#22C55E]",
  },
  {
    date: "2026-10-03",
    time: "4:30 PM",
    title: "Soccer practice",
    person: "Emma Chen",
    location: "Riverside Fields",
    color: "bg-[#EC4899]",
  },
  {
    date: "2026-10-04",
    time: "11:00 AM",
    title: "Family outing",
    person: "Sarah Chen",
    location: "Austin, TX",
    color: "bg-[#3B82F6]",
  },
  {
    date: "2026-10-05",
    time: "8:30 AM",
    title: "Preschool",
    person: "Liam Chen",
    location: "Austin, TX",
    color: "bg-[#F97316]",
  },
  {
    date: "2026-10-06",
    time: "4:00 PM",
    title: "Piano lesson",
    person: "Emma Chen",
    location: "Austin, TX",
    color: "bg-[#EC4899]",
  },
  {
    date: "2026-10-07",
    time: "1:00 PM",
    title: "Work meeting",
    person: "Sarah Chen",
    location: "Austin, TX",
    color: "bg-[#3B82F6]",
  },
  {
    date: "2026-10-08",
    time: "2:00 PM",
    title: "Swim class",
    person: "Liam Chen",
    location: "Austin, TX",
    color: "bg-[#F97316]",
  },
  {
    date: "2026-10-09",
    time: "9:30 AM",
    title: "Work meeting",
    person: "Marcus Chen",
    location: "Austin, TX",
    color: "bg-[#22C55E]",
  },
  {
    date: "2026-10-10",
    time: "4:30 PM",
    title: "Soccer practice",
    person: "Emma Chen",
    location: "Riverside Fields",
    color: "bg-[#EC4899]",
  },
  {
    date: "2026-10-11",
    time: "12:00 PM",
    title: "Family activity",
    person: "Marcus Chen",
    location: "Austin, TX",
    color: "bg-[#22C55E]",
  },
  {
    date: "2026-10-12",
    time: "8:15 AM",
    title: "School drop-off",
    person: "Emma Chen",
    location: "Willow Creek Elementary",
    color: "bg-[#EC4899]",
  },
  {
    date: "2026-10-13",
    time: "8:30 AM",
    title: "Preschool",
    person: "Liam Chen",
    location: "Austin, TX",
    color: "bg-[#F97316]",
  },
  {
    date: "2026-10-14",
    time: "4:00 PM",
    title: "Piano lesson",
    person: "Emma Chen",
    location: "Austin, TX",
    color: "bg-[#EC4899]",
  },
  {
    date: "2026-10-15",
    time: "1:00 PM",
    title: "Work meeting",
    person: "Sarah Chen",
    location: "Austin, TX",
    color: "bg-[#3B82F6]",
  },
  {
    date: "2026-10-17",
    time: "4:30 PM",
    title: "Soccer practice",
    person: "Emma Chen",
    location: "Riverside Fields",
    color: "bg-[#EC4899]",
  },
  {
    date: "2026-10-18",
    time: "12:00 PM",
    title: "Family activity",
    person: "Sarah Chen",
    location: "Austin, TX",
    color: "bg-[#3B82F6]",
  },
  {
    date: "2026-10-20",
    time: "2:00 PM",
    title: "Swim class",
    person: "Liam Chen",
    location: "Austin, TX",
    color: "bg-[#F97316]",
  },
  {
    date: "2026-10-21",
    time: "4:00 PM",
    title: "Piano lesson",
    person: "Emma Chen",
    location: "Austin, TX",
    color: "bg-[#EC4899]",
  },
  {
    date: "2026-10-23",
    time: "9:00 AM",
    title: "School field trip",
    person: "Emma Chen",
    location: "Austin, TX",
    color: "bg-[#EC4899]",
  },
  {
    date: "2026-10-24",
    time: "4:30 PM",
    title: "Soccer practice",
    person: "Emma Chen",
    location: "Riverside Fields",
    color: "bg-[#EC4899]",
  },
  {
    date: "2026-10-26",
    time: "10:00 AM",
    title: "Work meeting",
    person: "Marcus Chen",
    location: "Austin, TX",
    color: "bg-[#22C55E]",
  },
  {
    date: "2026-10-28",
    time: "8:30 AM",
    title: "Preschool",
    person: "Liam Chen",
    location: "Austin, TX",
    color: "bg-[#F97316]",
  },
  {
    date: "2026-10-30",
    time: "12:00 PM",
    title: "Family activity",
    person: "Sarah Chen",
    location: "Austin, TX",
    color: "bg-[#3B82F6]",
  },
];

export const demoTasks: DemoTask[] = [
  {
    id: 1,
    title: "Pack Emma's library book",
    assignee: "Sarah Chen",
    due: "Before school",
    priority: "High",
    completed: true,
  },
  {
    id: 2,
    title: "Confirm Friday pickup with Ruth",
    assignee: "Marcus Chen",
    due: "Today",
    priority: "Normal",
    completed: true,
  },
  {
    id: 3,
    title: "Add groceries for dinner",
    assignee: "Sarah Chen",
    due: "Today",
    priority: "Normal",
    completed: false,
  },
  {
    id: 4,
    title: "Sign Emma's field trip form",
    assignee: "Marcus Chen",
    due: "Tomorrow",
    priority: "High",
    completed: false,
  },
  {
    id: 5,
    title: "Refill Liam's water bottle",
    assignee: "Maria Gonzalez",
    due: "Today",
    priority: "Normal",
    completed: false,
  },
];

export const taskScreenTasks: TaskScreenTask[] = [
  {
    id: 1,
    title: "Sign Emma's field trip permission slip",
    assignee: "Sarah Chen",
    due: "Tomorrow",
    category: "kids",
    priority: "High",
    completed: false,
    origin: "Email",
  },
  {
    id: 2,
    title: "Pick up Liam's prescription",
    assignee: "Marcus Chen",
    due: "Today",
    category: "health",
    priority: "High",
    completed: false,
  },
  {
    id: 3,
    title: "Pack Emma's soccer gear",
    assignee: "Sarah Chen",
    due: "Today",
    category: "kids",
    priority: "Medium",
    completed: false,
  },
  {
    id: 4,
    title: "Add milk and fruit to the grocery list",
    assignee: "Marcus Chen",
    due: "Today",
    category: "finance",
    priority: "Low",
    completed: false,
  },
  {
    id: 5,
    title: "Confirm Friday pickup with Ruth",
    assignee: "Sarah Chen",
    due: "Today",
    category: "errands",
    priority: "Medium",
    completed: false,
  },
  {
    id: 6,
    title: "Return Emma's school library books",
    assignee: "Marcus Chen",
    due: "Tomorrow",
    category: "kids",
    priority: "Low",
    completed: false,
  },
  {
    id: 7,
    title: "Schedule Liam's dental checkup",
    assignee: "Sarah Chen",
    due: "Tomorrow",
    category: "health",
    priority: "Medium",
    completed: false,
  },
  {
    id: 8,
    title: "Wash soccer uniforms",
    assignee: "Marcus Chen",
    due: "Tomorrow",
    category: "household",
    priority: "Low",
    completed: false,
  },
  {
    id: 9,
    title: "Reply to Emma's teacher about the field trip",
    assignee: "Sarah Chen",
    due: "Tomorrow",
    category: "kids",
    priority: "Medium",
    completed: false,
    origin: "Email",
  },
  {
    id: 10,
    title: "Refill Liam's water bottle",
    assignee: "Maria Gonzalez",
    due: "Tomorrow",
    category: "kids",
    priority: "Low",
    completed: false,
  },
  {
    id: 11,
    title: "Buy a birthday card for Emma's classmate",
    assignee: "Marcus Chen",
    due: "Fri, Oct 23",
    category: "errands",
    priority: "Low",
    completed: false,
  },
  {
    id: 12,
    title: "Confirm Emma's piano lesson",
    assignee: "Sarah Chen",
    due: "Fri, Oct 23",
    category: "kids",
    priority: "Medium",
    completed: false,
    origin: "Email",
  },
  {
    id: 13,
    title: "Restock the first-aid kit",
    assignee: "Marcus Chen",
    due: "Sat, Oct 24",
    category: "health",
    priority: "Low",
    completed: false,
  },
  {
    id: 14,
    title: "Send Maria next week's schedule",
    assignee: "Sarah Chen",
    due: "Sat, Oct 24",
    category: "household",
    priority: "High",
    completed: false,
  },
  {
    id: 15,
    title: "Prepare snacks for soccer practice",
    assignee: "Marcus Chen",
    due: "Sun, Oct 25",
    category: "kids",
    priority: "Low",
    completed: false,
  },
  {
    id: 16,
    title: "Pack Emma's library book",
    assignee: "Sarah Chen",
    due: "Today",
    category: "kids",
    priority: "Medium",
    completed: true,
  },
  {
    id: 17,
    title: "Confirm Friday pickup with Ruth",
    assignee: "Marcus Chen",
    due: "Today",
    category: "errands",
    priority: "Low",
    completed: true,
  },
  {
    id: 18,
    title: "Add groceries for dinner",
    assignee: "Sarah Chen",
    due: "Today",
    category: "household",
    priority: "Low",
    completed: true,
  },
  {
    id: 19,
    title: "Sign Emma's field trip form",
    assignee: "Marcus Chen",
    due: "Yesterday",
    category: "kids",
    priority: "High",
    completed: true,
  },
  {
    id: 20,
    title: "Refill Liam's water bottle",
    assignee: "Maria Gonzalez",
    due: "Today",
    category: "kids",
    priority: "Low",
    completed: true,
  },
];

export const weeklyActivity = [
  { day: "Mon", completed: 7, planned: 9 },
  { day: "Tue", completed: 9, planned: 10 },
  { day: "Wed", completed: 6, planned: 8 },
  { day: "Thu", completed: 8, planned: 9 },
  { day: "Fri", completed: 4, planned: 7 },
  { day: "Sat", completed: 0, planned: 3 },
  { day: "Sun", completed: 0, planned: 2 },
];

export const recapWeeklyTaskCompletion = [
  { day: "Mon", completed: 4, planned: 5 },
  { day: "Tue", completed: 3, planned: 4 },
  { day: "Wed", completed: 5, planned: 6 },
  { day: "Thu", completed: 3, planned: 5 },
  { day: "Fri", completed: 0, planned: 3 },
];

export const tomorrowEvents = [
  "Emma's soccer",
  "Emma's piano lesson",
  "Emma's field trip",
];

export const tomorrowTasks = [
  "Sign Emma's permission slip",
  "Pack soccer gear",
  "Summer camp registration",
];

export const caregivers = [
  {
    name: "Maria Gonzalez",
    role: "Nanny",
    initials: "MG",
    color: "bg-[#0D9488]/10 text-[#0D9488]",
    shift: "Mon–Thu, 12:00 PM–6:00 PM",
    details:
      "Liam is allergic to peanuts and tree nuts; Emma's inhaler is in the front pocket of her backpack; Liam naps at 1 PM for about an hour; no screen time before 4 PM.",
    emergencyContact: "Rosa Gonzalez (sister)",
    status: "Active",
  },
  {
    name: "Ruth Chen",
    role: "Grandma (backup)",
    initials: "RC",
    color: "bg-[#FB923C]/20 text-[#9A4B0A]",
    shift: "On-call (Fridays and weekends)",
    details:
      "Can pick up from school if needed; prefers advance notice; has car seats installed.",
    emergencyContact: "David Chen (husband)",
    status: "Active",
  },
];

export const recapHighlights = [
  "Emma made it to soccer practice with time to warm up.",
  "Liam's checkup is complete. His next visit is in six months.",
  "Two family tasks were checked off today.",
  "Maria confirmed tomorrow's pickup plan.",
];
