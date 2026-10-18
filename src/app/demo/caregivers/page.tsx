import { CheckCircle2, Clock3, Phone, UserPlus } from "lucide-react";
import { caregivers } from "../data";

export default function CaregiversPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-[#0D9488]">Care team</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">Caregivers</h1>
          <p className="mt-2 text-[#64748B]">
            A shared view of the people helping care for Emma and Liam.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl bg-[#0D9488] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#0F766E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2 sm:self-auto"
        >
          <UserPlus aria-hidden="true" className="size-4" />
          Add Caregiver
        </button>
      </header>

      <section
        aria-label="Caregiver list"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {caregivers.map((caregiver) => (
          <article
            key={caregiver.name}
            className="rounded-2xl border border-[#1E293B]/10 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="flex items-start gap-3">
              <div className="flex shrink-0 flex-col items-center gap-1">
                <span
                  role="img"
                  aria-label={`${caregiver.name} photo placeholder`}
                  className={`flex size-14 items-center justify-center rounded-full text-sm font-bold ring-4 ring-[#FAFAF9] ${caregiver.color}`}
                >
                  {caregiver.initials}
                </span>
                <span className="text-[10px] font-medium text-[#64748B]">
                  Photo
                </span>
              </div>
              <div className="min-w-0 flex-1 pt-1">
                <h2 className="font-bold text-[#1E293B]">{caregiver.name}</h2>
                <p className="mt-0.5 text-sm text-[#64748B]">
                  {caregiver.role}
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#E0F2F1] px-2.5 py-1 text-xs font-semibold text-[#0F766E]">
                  <CheckCircle2 aria-hidden="true" className="size-3.5" />
                  {caregiver.status}
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-4 border-t border-[#1E293B]/10 pt-4">
              <section aria-label={`${caregiver.name} schedule`}>
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#64748B]">
                  <Clock3
                    aria-hidden="true"
                    className="size-4 shrink-0 text-[#0D9488]"
                  />
                  Schedule
                </h3>
                <p className="mt-1.5 pl-6 text-sm font-medium text-[#1E293B]">
                  {caregiver.shift}
                </p>
              </section>

              <section aria-label={`${caregiver.name} care notes`}>
                <h3 className="text-xs font-bold uppercase tracking-wide text-[#64748B]">
                  Care notes
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#475569]">
                  {caregiver.details}
                </p>
              </section>

              {caregiver.emergencyContact && (
                <section
                  aria-label={`${caregiver.name} emergency contact`}
                  className="rounded-xl bg-[#FAFAF9] p-3"
                >
                  <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#64748B]">
                    <Phone
                      aria-hidden="true"
                      className="size-3.5 text-[#0D9488]"
                    />
                    Emergency contact
                  </h3>
                  <p className="mt-1 pl-[22px] text-sm font-medium text-[#1E293B]">
                    {caregiver.emergencyContact}
                  </p>
                </section>
              )}
            </div>
          </article>
        ))}
      </section>

      <p className="text-xs text-[#64748B]">
        Fictional caregiver sample data.
      </p>
    </div>
  );
}
