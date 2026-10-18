"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeft,
  Bell,
  CalendarDays,
  Ellipsis,
  LayoutDashboard,
  ListChecks,
  MessageCircle,
  MoonStar,
  Settings,
  UsersRound,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const demoNavigation = [
  { label: "Dashboard", href: "/demo", Icon: LayoutDashboard },
  { label: "Calendar", href: "/demo/calendar", Icon: CalendarDays },
  { label: "Tasks", href: "/demo/tasks", Icon: ListChecks },
  { label: "Elle", href: "/demo/elle", Icon: MessageCircle },
  { label: "Caregivers", href: "/demo/caregivers", Icon: UsersRound },
  { label: "Recap", href: "/demo/recap", Icon: MoonStar },
];

const mobileNavigation = [
  { label: "Home", href: "/demo", Icon: LayoutDashboard },
  { label: "Calendar", href: "/demo/calendar", Icon: CalendarDays },
  { label: "Tasks", href: "/demo/tasks", Icon: ListChecks },
  { label: "Elle", href: "/demo/elle", Icon: MessageCircle },
  { label: "More", href: "/demo/caregivers", Icon: Ellipsis },
];

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const sectionTitle =
    demoNavigation.find(({ href }) => href === pathname)?.label ?? "Dashboard";

  return (
    <div className="min-h-screen bg-[#F4F6F5] text-[#1E293B]">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[260px] flex-col border-r border-[#1E293B]/10 bg-white px-5 py-6 lg:flex">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
        >
          Momentality
          <span className="ml-2 rounded-full bg-[#0D9488]/10 px-2 py-1 align-middle text-[10px] font-semibold uppercase tracking-wider text-[#0D9488]">
            Demo
          </span>
        </Link>

        <Link
          href="/"
          className="mt-4 inline-flex min-h-9 items-center gap-2 px-3 text-sm font-medium text-[#64748B] hover:text-[#0D9488] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to Home
        </Link>

        <p className="mt-10 px-3 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
          Family space
        </p>
        <nav aria-label="Demo navigation" className="mt-3 space-y-1">
          {demoNavigation.map(({ label, href, Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-[#475569] transition-colors hover:bg-[#0D9488]/10 hover:text-[#0D9488] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
            >
              <Icon aria-hidden="true" className="size-[18px]" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex items-center gap-3 border-t border-[#1E293B]/10 pt-5">
          <span
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0D9488]/10 text-xs font-bold text-[#0D9488]"
          >
            SC
          </span>
          <span className="flex-1 text-sm font-semibold">Sarah Chen</span>
          <ThemeToggle />
        </div>
      </aside>

      <div className="lg:pl-[260px]">
        <div className="border-b border-yellow-200 bg-yellow-100 px-4 py-2 text-center text-xs font-medium text-yellow-900 sm:text-sm">
          This is a demo with sample data. Sign up for the full experience.
        </div>
        <header className="sticky top-0 z-10 border-b border-[#1E293B]/10 bg-white/95 backdrop-blur">
          <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
            <div className="min-w-0">
              <Link
                href="/"
                className="text-lg font-bold tracking-tight lg:hidden"
              >
                Momentality
              </Link>
              <p className="text-sm font-medium text-[#64748B]">
                {sectionTitle}
              </p>
              <Link
                href="/"
                className="text-xs font-medium text-[#0D9488] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] lg:hidden"
              >
                Back to Home
              </Link>
            </div>
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <button
                type="button"
                aria-label="Notifications, 3 unread"
                className="relative flex size-9 items-center justify-center rounded-full text-[#475569] hover:bg-[#F1F5F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
              >
                <Bell aria-hidden="true" className="size-5" />
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-[#FB923C] text-[10px] font-bold text-white"
                >
                  3
                </span>
              </button>
              <button
                type="button"
                aria-label="Settings"
                className="flex size-9 items-center justify-center rounded-full text-[#475569] hover:bg-[#F1F5F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
              >
                <Settings aria-hidden="true" className="size-5" />
              </button>
              <span
                aria-label="Sarah Chen"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0D9488]/10 text-xs font-bold text-[#0D9488]"
              >
                SC
              </span>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 pt-7 pb-24 sm:px-6 sm:pt-9 lg:px-8 lg:pb-9">
          {children}
        </main>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-[#1E293B]/10 bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur lg:hidden"
      >
        <div className="mx-auto grid max-w-lg grid-cols-5">
          {mobileNavigation.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg text-[#475569] hover:bg-[#0D9488]/10 hover:text-[#0D9488] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
            >
              <Icon aria-hidden="true" className="size-[18px]" />
              <span className="text-[10px] font-medium leading-none">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
