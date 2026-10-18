"use client";

import { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronRight,
  Circle,
  Mail,
} from "lucide-react";
import { taskScreenTasks, type TaskScreenTask } from "../data";

type TaskFilter = "All" | "Today" | "This Week" | "Overdue";

const priorityStyles: Record<TaskScreenTask["priority"], string> = {
  High: "bg-red-100 text-red-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Low: "bg-green-100 text-green-800",
};

const categoryStyles: Record<TaskScreenTask["category"], string> = {
  household: "bg-[#E0F2F1] text-[#0F766E]",
  kids: "bg-[#DBEAFE] text-[#1D4ED8]",
  health: "bg-[#FCE7F3] text-[#BE185D]",
  finance: "bg-[#FEF3C7] text-[#92400E]",
  errands: "bg-[#EDE9FE] text-[#6D28D9]",
};

const demoToday = new Date(2026, 9, 16);
const getDueDate = (due: string) => {
  if (due === "Yesterday") return new Date(2026, 9, 15);
  if (due === "Today") return demoToday;
  if (due === "Tomorrow") return new Date(2026, 9, 17);
  return new Date(`${due.replace(/^[A-Za-z]{3}, /, "")}, 2026`);
};
const priorityOrder: Record<TaskScreenTask["priority"], number> = {
  High: 0,
  Medium: 1,
  Low: 2,
};

export default function TasksPage() {
  const [tasks, setTasks] = useState(taskScreenTasks);
  const [filter, setFilter] = useState<TaskFilter>("All");
  const [completedOpen, setCompletedOpen] = useState(true);

  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);
  const weekStart = new Date(demoToday);
  weekStart.setDate(demoToday.getDate() - ((demoToday.getDay() + 6) % 7));
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  const filteredActiveTasks = activeTasks.filter((task) => {
    const dueDate = getDueDate(task.due);
    if (filter === "Today") return dueDate.getTime() === demoToday.getTime();
    if (filter === "This Week") {
      return dueDate >= weekStart && dueDate <= weekEnd;
    }
    if (filter === "Overdue") return dueDate < demoToday;
    return true;
  });
  const visibleActiveTasks = [...filteredActiveTasks].sort((a, b) => {
    const priorityDifference = priorityOrder[a.priority] - priorityOrder[b.priority];
    return priorityDifference || getDueDate(a.due).getTime() - getDueDate(b.due).getTime();
  });
  const isCompletedOpen = completedOpen;

  const toggleTask = (id: number) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const renderTask = (task: TaskScreenTask) => (
    <li
      key={task.id}
      className="flex items-start gap-3 py-4 first:pt-0 last:pb-0"
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={task.completed}
        aria-label={`${task.completed ? "Mark active" : "Mark completed"}: ${task.title}`}
        onClick={() => toggleTask(task.id)}
        className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
      >
        {task.completed ? (
          <span className="flex size-5 items-center justify-center rounded-full bg-[#0D9488] text-white">
            <Check aria-hidden="true" className="size-3.5" />
          </span>
        ) : (
          <Circle
            aria-hidden="true"
            className="size-5 text-[#94A3B8] transition-colors hover:text-[#0D9488]"
          />
        )}
      </button>

      <div className="min-w-0 flex-1">
        <p
          className={`text-sm font-semibold ${
            task.completed ? "text-[#64748B] line-through" : "text-[#1E293B]"
          }`}
        >
          {task.title}
        </p>
        <div className="mt-1 flex items-center gap-2 text-xs text-[#64748B]">
          <span
            aria-hidden="true"
            className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0D9488]/10 text-[9px] font-bold text-[#0D9488]"
          >
            {task.assignee
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </span>
          <span>
            {task.assignee} <span aria-hidden="true">·</span> Due {task.due}
          </span>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${categoryStyles[task.category]}`}
          >
            {task.category}
          </span>
          {task.origin === "Email" && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-semibold text-[#475569]">
              <Mail aria-hidden="true" className="size-3" />
              From email
            </span>
          )}
        </div>
      </div>

      <span
        className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${priorityStyles[task.priority]}`}
      >
        {task.priority}
      </span>
    </li>
  );

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-[#0D9488]">Family task list</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="mt-2 text-[#64748B]">
            Keep the little things moving together.
          </p>
        </div>
        <p className="text-sm font-medium text-[#64748B]">
          {activeTasks.length} active <span aria-hidden="true">·</span>{" "}
          {completedTasks.length} completed
        </p>
      </header>

      <section className="overflow-hidden rounded-2xl border border-[#1E293B]/10 bg-white shadow-sm">
        <div
          aria-label="Filter tasks"
          className="flex flex-wrap gap-2 border-b border-[#1E293B]/10 p-4 sm:px-6"
          role="tablist"
        >
          {(["All", "Today", "This Week", "Overdue"] as const).map((tab) => {
            const count = tab === "All"
              ? tasks.length
              : activeTasks.filter((task) => {
                  const dueDate = getDueDate(task.due);
                  if (tab === "Today") return dueDate.getTime() === demoToday.getTime();
                  if (tab === "This Week") return dueDate >= weekStart && dueDate <= weekEnd;
                  return dueDate < demoToday;
                }).length;
            const selected = filter === tab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(tab)}
                className={`inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] ${
                  selected
                    ? "bg-[#0D9488] text-white"
                    : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]"
                }`}
              >
                {tab}
                <span className={selected ? "text-white/80" : "text-[#64748B]"}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="p-5 sm:p-6">
          <section aria-labelledby="active-tasks-heading">
            <h2
              id="active-tasks-heading"
              className="mb-4 font-bold text-[#1E293B]"
            >
              Active{" "}
              <span className="font-medium text-[#64748B]">
                ({visibleActiveTasks.length})
              </span>
            </h2>
            {visibleActiveTasks.length ? (
              <ul className="divide-y divide-[#1E293B]/10">
                {visibleActiveTasks.map(renderTask)}
              </ul>
            ) : (
              <p className="py-2 text-sm text-[#64748B]">
                No active tasks.
              </p>
            )}
          </section>

          <section
            aria-labelledby="completed-tasks-heading"
            className="mt-6 border-t border-[#1E293B]/10 pt-5"
          >
            <button
              type="button"
              aria-expanded={isCompletedOpen}
              aria-controls="completed-task-list"
              onClick={() => setCompletedOpen((open) => !open)}
              className="flex w-full items-center gap-2 text-left font-bold text-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
            >
              {isCompletedOpen ? (
                <ChevronDown aria-hidden="true" className="size-4" />
              ) : (
                <ChevronRight aria-hidden="true" className="size-4" />
              )}
              <span id="completed-tasks-heading">Completed</span>
              <span className="font-medium text-[#64748B]">
                ({completedTasks.length})
              </span>
            </button>
            {isCompletedOpen && (
              <ul
                id="completed-task-list"
                className="mt-4 divide-y divide-[#1E293B]/10"
              >
                {completedTasks.map(renderTask)}
              </ul>
            )}
          </section>
        </div>
      </section>

      <p className="text-xs text-[#64748B]">
        Fictional sample task list. Changes are saved for this page session only.
      </p>
    </div>
  );
}
