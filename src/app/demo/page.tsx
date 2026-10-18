"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Circle,
  CloudSun,
  Clock3,
  ListChecks,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { calendarEvents, demoEvents, taskScreenTasks, weeklyActivity } from "./data";

const priorityOrder = { High: 0, Medium: 1, Low: 2 };
const priorityStyles = {
  High: "bg-[#FB923C]/20 text-[#8A4100]",
  Medium: "bg-[#FEF3C7] text-[#92400E]",
  Low: "bg-[#F1F5F9] text-[#475569]",
};
const dentistEvent = calendarEvents.find(
  (event) =>
    event.date === "2026-10-16" &&
    event.title === "Dentist appointment" &&
    event.person === "Marcus Chen",
);
const teamStandupEvent = calendarEvents.find(
  (event) =>
    event.date === "2026-10-16" &&
    event.title === "Team Standup" &&
    event.person === "Sarah Chen",
);

const summaryCards = [
  {
    label: "Today's plans",
    value: String(demoEvents.length),
    note: "Events across the family",
    Icon: CalendarDays,
    color: "text-[#0D9488] bg-[#0D9488]/10",
  },
  {
    label: "Top priorities",
    value: "3",
    note: "Highest-priority active tasks",
    Icon: ListChecks,
    color: "text-[#9A4B0A] bg-[#FB923C]/20",
  },
  {
    label: "Next up",
    value: "10:30",
    note: "Liam's checkup",
    Icon: Clock3,
    color: "text-sky-700 bg-sky-100",
  },
];

export default function DemoDashboardPage() {
  const topPriorityTasks = taskScreenTasks
    .filter((task) => !task.completed)
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
    .slice(0, 3);

  return (
    <div className="space-y-7">
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-[#0D9488]">
            Friday, October 16, 2026
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
            Good morning, Sarah
          </h1>
          <p className="mt-2 text-[#64748B]">
            Here&apos;s your family&apos;s plan for today.
          </p>
        </div>
        <Link
          href="/demo/recap"
          className="inline-flex min-h-10 items-center gap-2 self-start rounded-lg border border-[#1E293B]/10 bg-white px-4 text-sm font-semibold text-[#1E293B] hover:border-[#0D9488]/40 hover:text-[#0D9488] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] sm:self-auto"
        >
          View evening recap <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </section>

      <section
        aria-label="Today's overview"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {summaryCards.map(({ label, value, note, Icon, color }) => (
          <article
            key={label}
            className="rounded-2xl border border-[#1E293B]/10 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-[#64748B]">{label}</p>
                <p className="mt-2 text-3xl font-bold">{value}</p>
                <p className="mt-1 text-sm text-[#64748B]">{note}</p>
              </div>
              <span className={`flex size-10 items-center justify-center rounded-xl ${color}`}>
                <Icon aria-hidden="true" className="size-5" />
              </span>
            </div>
          </article>
        ))}
      </section>

      <section aria-label="Demo weather">
        <article className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#1E293B]/10 bg-white p-5 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              Demo weather · Mock data
            </p>
            <h2 className="mt-1 text-lg font-bold">Austin, Texas</h2>
            <p className="mt-1 text-sm text-[#64748B]">Partly cloudy</p>
          </div>
          <div className="flex items-center gap-3">
            <CloudSun aria-hidden="true" className="size-9 text-[#0D9488]" />
            <p className="text-3xl font-bold">72°F</p>
          </div>
        </article>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.35fr_1fr]">
        <article className="rounded-2xl border border-[#1E293B]/10 bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold">Today&apos;s schedule</h2>
              <p className="mt-1 text-sm text-[#64748B]">
                You have 5 events today. Marcus has 3. Emma has soccer at 4:30.
              </p>
            </div>
            <Link
              href="/demo/calendar"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#0D9488] hover:underline"
            >
              Calendar <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <ol className="mt-5 divide-y divide-[#1E293B]/10">
            {demoEvents.map((event) => (
              <li key={event.title} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <span className="w-[4.5rem] shrink-0 pt-0.5 text-xs font-semibold text-[#64748B]">
                  {event.time}
                </span>
                <span className={`mt-1 h-10 w-1 shrink-0 rounded-full ${event.color}`} />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{event.title}</p>
                  <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#64748B]">
                    <span>{event.person}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin aria-hidden="true" className="size-3.5" />
                      {event.location}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </article>

        <article className="rounded-2xl border border-[#1E293B]/10 bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold">Family tasks</h2>
              <p className="mt-1 text-sm text-[#64748B]">
                A few things to take care of today.
              </p>
            </div>
            <Link
              href="/demo/tasks"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#0D9488] hover:underline"
            >
              All tasks <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <ul className="mt-5 space-y-4">
            {topPriorityTasks.map((task) => (
              <li key={task.id} className="flex items-start gap-3">
                <Circle
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-[#94A3B8]"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{task.title}</p>
                  <p className="mt-1 text-xs text-[#64748B]">
                    {task.assignee} · {task.due}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${priorityStyles[task.priority]}`}
                >
                  {task.priority}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      {dentistEvent && teamStandupEvent && (
        <section aria-label="Schedule conflict">
          <article className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900 sm:p-6">
            <h2 className="text-lg font-bold">Schedule conflict</h2>
            <p className="mt-2 text-sm leading-6">
              Marcus&apos;s dentist at {dentistEvent.time.replace(":00 PM", "pm")}{" "}
              overlaps with your {teamStandupEvent.title} at{" "}
              {teamStandupEvent.time.replace(":00 PM", "pm")}. Suggestion: Join
              standup from mobile.
            </p>
          </article>
        </section>
      )}

      <section aria-label="Alerts">
        <article className="rounded-2xl border border-[#1E293B]/10 bg-white p-5 sm:p-6">
          <h2 className="text-lg font-bold">Alerts</h2>
          <ul className="mt-3 space-y-3 text-sm text-[#475569]">
            <li>Liam&apos;s swim class moved to 2pm this week</li>
            <li>Emma&apos;s permission slip is due tomorrow.</li>
          </ul>
        </article>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.2fr_1fr]">
        <article className="rounded-2xl border border-[#1E293B]/10 bg-white p-5 sm:p-6">
          <div>
            <h2 className="text-lg font-bold">A smoother week, together</h2>
            <p className="mt-1 text-sm text-[#64748B]">
              Family tasks completed by day.
            </p>
          </div>
          <div className="mt-5 h-56 w-full" role="img" aria-label="Bar chart of planned and completed family tasks this week">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyActivity} margin={{ top: 8, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid stroke="#E2E8F0" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: "#64748B", fontSize: 12 }} />
                <YAxis allowDecimals={false} tickLine={false} axisLine={false} tick={{ fill: "#64748B", fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="completed" name="Completed" fill="#0D9488" radius={[5, 5, 0, 0]} />
                <Bar dataKey="planned" name="Planned" fill="#FB923C" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
        <article className="rounded-2xl bg-[#1E293B] p-6 text-white sm:p-7">
          <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-[#FDBA74]">
            <Sparkles aria-hidden="true" className="size-5" />
          </span>
          <h2 className="mt-5 text-xl font-bold">A little help from Elle</h2>
          <p className="mt-2 text-sm leading-6 text-white/80">
            You&apos;ve had back-to-back meetings every afternoon this week.
            Consider blocking Friday afternoon for family time.
          </p>
          <Link
            href="/demo/elle"
            className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#FB923C] px-4 text-sm font-semibold text-[#1E293B] hover:bg-[#FDBA74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Ask Elle <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </article>
      </section>
    </div>
  );
}
