"use client";

import { useState } from "react";
import { AlertTriangle, CalendarDays, MapPin } from "lucide-react";
import { calendarEvents } from "../data";

const year = 2026;
const month = 9;
const monthName = "October";
const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
const leadingDays = new Date(Date.UTC(year, month, 1)).getUTCDay();
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const familyMembers = [
  { name: "Sarah Chen", initials: "SC", color: "#3B82F6" },
  { name: "Marcus Chen", initials: "MC", color: "#22C55E" },
  { name: "Emma Chen", initials: "EC", color: "#EC4899" },
  { name: "Liam Chen", initials: "LC", color: "#F97316" },
];

const dateKey = (day: number) =>
  `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

const getEventInitials = (person: string) =>
  person
    .split(" ")
    .map((part) => part[0])
    .join("");

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState("2026-10-16");
  const [visibleMembers, setVisibleMembers] = useState<string[]>(
    familyMembers.map(({ name }) => name),
  );

  const filteredEvents = calendarEvents.filter((event) =>
    (event.members ?? [event.person]).some((member) =>
      visibleMembers.includes(member),
    ),
  );
  const selectedEvents = filteredEvents.filter(
    (event) => event.date === selectedDate,
  );
  const selectedDayEvents = selectedEvents.map((event) => ({
    ...event,
    conflict: selectedEvents.some(
      (other) =>
        other !== event &&
        other.time === event.time &&
        other.person !== event.person,
    ),
  }));
  const selectedDay = Number(selectedDate.slice(-2));

  const toggleMember = (name: string) => {
    setVisibleMembers((visible) =>
      visible.includes(name)
        ? visible.filter((member) => member !== name)
        : [...visible, name],
    );
  };

  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-medium text-[#0D9488]">Family calendar</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">
          {monthName} {year}
        </h1>
        <p className="mt-2 text-[#64748B]">
          A shared view of the Chen family&apos;s month.
        </p>
      </header>

      <section
        aria-label="Filter calendar by family member"
        className="flex flex-wrap gap-2"
      >
        {familyMembers.map(({ name, initials, color }) => {
          const selected = visibleMembers.includes(name);
          return (
            <button
              key={name}
              type="button"
              aria-pressed={selected}
              onClick={() => toggleMember(name)}
              className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] ${
                selected
                  ? "border-[#1E293B]/10 bg-white text-[#1E293B]"
                  : "border-transparent bg-[#1E293B]/5 text-[#64748B]"
              }`}
            >
              <span
                aria-hidden="true"
                className="size-2.5 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="sm:hidden">{initials}</span>
              <span className="hidden sm:inline">{name}</span>
            </button>
          );
        })}
      </section>

      <section className="overflow-hidden rounded-2xl border border-[#1E293B]/10 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-[#1E293B]/10 p-4 sm:px-6">
          <CalendarDays aria-hidden="true" className="size-4 text-[#0D9488]" />
          <h2 className="text-sm font-semibold">{monthName} {year}</h2>
        </div>

        <div className="grid grid-cols-7 border-b border-[#1E293B]/10">
          {weekdays.map((weekday) => (
            <div
              key={weekday}
              className="py-2 text-center text-[10px] font-semibold text-[#64748B] sm:py-3 sm:text-xs"
            >
              <span className="sm:hidden">{weekday.slice(0, 1)}</span>
              <span className="hidden sm:inline">{weekday}</span>
            </div>
          ))}
        </div>

        <div
          role="grid"
          aria-label={`${monthName} ${year} calendar`}
          className="grid grid-cols-7"
        >
          {Array.from({ length: leadingDays }, (_, index) => (
            <div
              key={`empty-${index}`}
              role="gridcell"
              aria-hidden="true"
              className="min-h-[58px] border-b border-r border-[#1E293B]/5 bg-[#FAFAF9]/60 dark:bg-[#1E293B] sm:min-h-24"
            />
          ))}
          {Array.from({ length: daysInMonth }, (_, index) => {
            const day = index + 1;
            const isoDate = dateKey(day);
            const dayEvents = filteredEvents.filter(
              (event) => event.date === isoDate,
            );
            const hasConflict = dayEvents.some((event) =>
              dayEvents.some(
                (other) =>
                  other !== event &&
                  other.time === event.time &&
                  other.person !== event.person,
              ),
            );
            const selected = selectedDate === isoDate;

            return (
              <div
                key={isoDate}
                role="gridcell"
                className={`min-h-[58px] border-b border-r border-[#1E293B]/5 p-0.5 sm:min-h-24 sm:p-1 ${
                  hasConflict ? "bg-[#FB923C]/[0.06]" : ""
                }`}
              >
                <button
                  type="button"
                  aria-label={`${monthName} ${day}, ${year}${dayEvents.length ? `, ${dayEvents.length} events` : ""}${hasConflict ? ", scheduling conflict" : ""}`}
                  aria-pressed={selected}
                  onClick={() => setSelectedDate(isoDate)}
                  className={`flex size-7 items-center justify-center rounded-full text-[11px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] sm:size-8 sm:text-sm ${
                    selected
                      ? "bg-[#0D9488] text-white"
                      : "text-[#1E293B] hover:bg-[#0D9488]/10 dark:hover:bg-[#0D9488]/25"
                  }`}
                >
                  {day}
                </button>
                <div
                  aria-hidden="true"
                  className="mt-1 flex min-h-2 flex-wrap justify-center gap-1 sm:justify-start sm:px-1"
                >
                  {dayEvents.slice(0, 5).flatMap((event, eventIndex) =>
                    familyMembers
                      .filter(
                        ({ name }) =>
                          (event.members ?? [event.person]).includes(name) &&
                          visibleMembers.includes(name),
                      )
                      .map((member) => (
                        <span
                          key={`${event.time}-${eventIndex}-${member.name}`}
                          className="size-1.5 rounded-full sm:size-2"
                          style={{ backgroundColor: member.color }}
                        />
                      )),
                  )}
                  {dayEvents.length > 5 && (
                    <span className="hidden text-[9px] leading-2 text-[#64748B] sm:inline">
                      +{dayEvents.length - 5}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
          {Array.from(
            {
              length:
                (7 - ((leadingDays + daysInMonth) % 7)) % 7,
            },
            (_, index) => (
              <div
                key={`end-${index}`}
                role="gridcell"
                aria-hidden="true"
                className="min-h-[58px] border-b border-r border-[#1E293B]/5 bg-[#FAFAF9]/60 dark:bg-[#1E293B] sm:min-h-24"
              />
            ),
          )}
        </div>
      </section>

      <section
        aria-live="polite"
        aria-label={`Events for ${monthName} ${selectedDay}`}
        className="rounded-2xl border border-[#1E293B]/10 bg-white p-5 shadow-sm sm:p-6"
      >
        <div className="flex items-baseline justify-between gap-3 border-b border-[#1E293B]/10 pb-4">
          <h2 className="font-bold">
            {monthName} {selectedDay} events
          </h2>
          <span className="text-sm text-[#64748B]">
            {selectedDayEvents.length}{" "}
            {selectedDayEvents.length === 1 ? "event" : "events"}
          </span>
        </div>
        {selectedDayEvents.length ? (
          <ul className="divide-y divide-[#1E293B]/10">
            {selectedDayEvents.map((event) => {
              const member = familyMembers.find(
                ({ name }) => name === event.person,
              );
              const memberColors = (event.members ?? [])
                .map(
                  (name) =>
                    familyMembers.find(
                      ({ name: memberName }) => memberName === name,
                    )?.color,
                )
                .filter((color): color is string => color !== undefined);
              const avatarBackground = memberColors.length
                ? `conic-gradient(${memberColors
                    .map(
                      (color, index) =>
                        `${color} ${(index * 100) / memberColors.length}% ${((index + 1) * 100) / memberColors.length}%`,
                    )
                    .join(", ")})`
                : member?.color ?? "#64748B";
              return (
                <li
                  key={`${event.time}-${event.person}-${event.title}`}
                  className={`flex items-start gap-3 py-4 last:pb-0 ${
                    event.conflict
                      ? "border-l-4 border-[#FB923C] pl-3"
                      : ""
                  }`}
                >
                  <span className="w-[4.5rem] shrink-0 pt-1 text-xs font-semibold text-[#64748B]">
                    {event.time}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex size-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ background: avatarBackground }}
                  >
                    {member?.initials ?? getEventInitials(event.person)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{event.title}</p>
                    <p className="mt-1 text-sm text-[#64748B]">
                      {event.person}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-sm text-[#64748B]">
                      <MapPin aria-hidden="true" className="size-3.5 shrink-0" />
                      <span>{event.location}</span>
                    </p>
                  </div>
                  {event.conflict && (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#FB923C]/15 px-2 py-1 text-[10px] font-semibold text-[#9A4B0A] sm:text-xs">
                      <AlertTriangle aria-hidden="true" className="size-3.5" />
                      Conflict
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="py-5 text-sm text-[#64748B]">
            No events for the selected day and filters.
          </p>
        )}
      </section>

      <p className="text-xs text-[#64748B]">
        Events and family names shown are fictional sample data.
      </p>
    </div>
  );
}
