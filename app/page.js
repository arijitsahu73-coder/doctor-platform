import Link from "next/link";

const specialties = [
  { name: "General Physician", icon: "🩺" },
  { name: "Dentist", icon: "🦷" },
  { name: "Dermatologist", icon: "🧴" },
  { name: "Gynecologist", icon: "🤰" },
  { name: "Pediatrician", icon: "🧸" },
  { name: "Orthopedic", icon: "🦴" },
  { name: "Cardiologist", icon: "❤️" },
  { name: "ENT Specialist", icon: "👂" },
];

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="border-b border-line bg-bg/90 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-2xl font-700 text-ink">
            MedFind
          </span>
          <nav className="hidden sm:flex items-center gap-8 text-sm text-muted font-medium">
            <Link href="/doctors" className="hover:text-ink transition-colors">
              Find a doctor
            </Link>
            <Link href="#how-it-works" className="hover:text-ink transition-colors">
              How it works
            </Link>
          </nav>
          <Link
            href="/join-as-doctor"
            className="rounded-full bg-primary text-white text-sm font-medium px-5 py-2.5 hover:bg-primaryDark transition-colors"
          >
            Join as a doctor
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-14">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 rounded-full px-3 py-1 mb-6">
            Every profile verified before it goes live
          </span>
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] font-700 text-ink">
            Find a doctor you can actually verify — not just search.
          </h1>
          <p className="mt-5 text-lg text-muted max-w-xl">
            Browse doctors by specialty and city across India. Every listed
            doctor's registration is checked before their profile is
            published. Book directly, no waiting rooms required.
          </p>
        </div>

        {/* Search bar */}
        <form
          action="/doctors"
          method="GET"
          className="mt-10 bg-white border border-line rounded-2xl shadow-sm p-3 flex flex-col sm:flex-row gap-3 max-w-3xl"
        >
          <div className="flex-1 flex items-center gap-2 px-3">
            <span className="text-muted">🔍</span>
            <input
              type="text"
              name="specialty"
              placeholder="Specialty — e.g. Dentist"
              className="w-full py-3 outline-none text-ink placeholder:text-muted/70 bg-transparent"
            />
          </div>
          <div className="hidden sm:block w-px bg-line" />
          <div className="flex-1 flex items-center gap-2 px-3">
            <span className="text-muted">📍</span>
            <input
              type="text"
              name="city"
              placeholder="City — e.g. Pune"
              className="w-full py-3 outline-none text-ink placeholder:text-muted/70 bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-accent text-white font-medium px-6 py-3 hover:opacity-90 transition-opacity"
          >
            Search doctors
          </button>
        </form>
      </section>

      {/* Trust strip */}
      <section className="border-y border-line bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted items-center">
          <span className="flex items-center gap-2 text-ink font-medium">
            <span className="text-primary">✓</span> Registration verified
          </span>
          <span className="flex items-center gap-2 text-ink font-medium">
            <span className="text-primary">✓</span> Clinic location confirmed
          </span>
          <span className="flex items-center gap-2 text-ink font-medium">
            <span className="text-primary">✓</span> Direct booking, no middle calls
          </span>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl font-700 text-ink mb-10">
          How it works
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Search",
              body: "Filter doctors by specialty, city, and clinic location.",
            },
            {
              step: "02",
              title: "Check the verification",
              body: "Every profile shows the doctor's checked medical registration before you book.",
            },
            {
              step: "03",
              title: "Book directly",
              body: "Pick a slot and confirm your appointment with the clinic.",
            },
          ].map((s) => (
            <div key={s.step}>
              <span className="font-display text-4xl text-primary/30">
                {s.step}
              </span>
              <h3 className="font-display text-xl font-600 text-ink mt-3">
                {s.title}
              </h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-white border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="font-display text-3xl font-700 text-ink mb-10">
            Browse by specialty
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {specialties.map((s) => (
              <Link
                key={s.name}
                href={`/doctors?specialty=${encodeURIComponent(s.name)}`}
                className="border border-line rounded-xl p-5 hover:border-primary hover:shadow-sm transition-all"
              >
                <span className="text-2xl">{s.icon}</span>
                <p className="mt-3 text-sm font-medium text-ink">{s.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-primary rounded-2xl px-8 py-14 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div className="max-w-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-700 text-white">
              Are you a doctor? Get listed for free.
            </h2>
            <p className="text-white/80 mt-3">
              Create your profile, submit your qualifications for
              verification, and start receiving bookings from patients near
              your clinic.
            </p>
          </div>
          <Link
            href="/join-as-doctor"
            className="inline-block mt-8 sm:mt-0 rounded-full bg-white text-primaryDark font-medium px-6 py-3 hover:bg-white/90 transition-colors"
          >
            Create your profile
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted">
          <span>© {new Date().getFullYear()} MedFind. Built in India.</span>
          <span>For doctors and patients across India.</span>
        </div>
      </footer>
    </main>
  );
}
