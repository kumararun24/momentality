"use client";

import { CheckCircle2, MoonStar, Sparkles } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  recapHighlights,
  recapWeeklyTaskCompletion,
  tomorrowEvents,
  tomorrowTasks,
} from "../data";

export default function RecapPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <header>
        <p className="text-sm font-medium text-[#0D9488]">Friday, October 16, 2026</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">Good evening, Sarah</h1>
        <p className="mt-2 text-[#64748B]">A moment to look back on your family&apos;s day.</p>
      </header>

      <section className="overflow-hidden rounded-2xl bg-[#1E293B] p-6 text-white sm:p-8">
        <span
          role="img"
          aria-label="Elle avatar"
          className="flex size-11 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-[#FDBA74]"
        >
          E
        </span>
        <p className="mt-5 text-sm font-medium text-white/75">Elle&apos;s AI summary</p>
        <p className="mt-2 max-w-2xl text-lg font-semibold leading-7 sm:text-xl">
          Solid day, Sarah! You completed 3 tasks and made it to all your
          events. Tomorrow looks lighter — a great chance to tackle that summer
          camp registration before spots fill up.
        </p>
      </section>

      <section aria-label="Day summary" className="grid gap-4 sm:grid-cols-2">
        <article className="rounded-2xl border border-[#1E293B]/10 bg-white p-5">
          <span className="flex size-9 items-center justify-center rounded-lg bg-[#0D9488]/10 text-[#0D9488]">
            <CheckCircle2 aria-hidden="true" className="size-5" />
          </span>
          <p className="mt-4 text-2xl font-bold">3 / 5</p>
          <p className="mt-1 text-sm text-[#64748B]">Tasks completed</p>
        </article>
        <article className="rounded-2xl border border-[#1E293B]/10 bg-white p-5">
          <span className="flex size-9 items-center justify-center rounded-lg bg-[#FB923C]/20 text-[#9A4B0A]">
            <MoonStar aria-hidden="true" className="size-5" />
          </span>
          <p className="mt-4 text-2xl font-bold">4 / 5</p>
          <p className="mt-1 text-sm text-[#64748B]">Events attended</p>
        </article>
      </section>

      <section className="rounded-2xl border border-[#1E293B]/10 bg-white p-5 shadow-sm sm:p-6">
        <div>
          <h2 className="font-bold">Weekly task completion</h2>
          <p className="mt-1 text-sm text-[#64748B]">
            Tasks completed out of planned tasks, Monday through Friday.
          </p>
        </div>
        <div className="mt-5 h-64 w-full" role="img" aria-label="Bar chart of weekly task completion from Monday to Friday">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={recapWeeklyTaskCompletion} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid stroke="#E2E8F0" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: "#64748B", fontSize: 12 }} />
              <YAxis allowDecimals={false} tickLine={false} axisLine={false} tick={{ fill: "#64748B", fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="completed" name="Completed" fill="#0D9488" radius={[5, 5, 0, 0]} isAnimationActive={false} />
              <Bar dataKey="planned" name="Planned" fill="#FB923C" radius={[5, 5, 0, 0]} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold">Tomorrow&apos;s Preview</h2>
          <p className="mt-1 text-sm text-[#64748B]">
            Illustrative items named in the assignment; specific dates and times
            were not provided.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-[#1E293B]/10 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">Top events</h3>
            <ul className="mt-3 space-y-3 text-sm text-[#475569]">
              {tomorrowEvents.map((event) => (
                <li key={event} className="flex items-start gap-2">
                  <MoonStar aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#0D9488]" />
                  <span>{event}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-[#1E293B]/10 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">Top tasks</h3>
            <ul className="mt-3 space-y-3 text-sm text-[#475569]">
              {tomorrowTasks.map((task) => (
                <li key={task} className="flex items-start gap-2">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#0D9488]" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="rounded-2xl border border-[#1E293B]/10 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-[#0D9488]/10 text-[#0D9488]">
            <Sparkles aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h2 className="font-bold">Today&apos;s highlights</h2>
            <p className="mt-1 text-sm text-[#64748B]">Small wins from the family day.</p>
          </div>
        </div>
        <ul className="mt-5 space-y-4">
          {recapHighlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3 text-sm leading-6">
              <CheckCircle2 aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#0D9488]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="text-xs text-[#64748B]">
        Summary and activity figures are fictional sample data.
      </p>
    </div>
  );
}
