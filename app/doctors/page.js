import Link from "next/link";

const sampleDoctors = [
  {
    name: "Dr. Ananya Rao",
    specialty: "Dentist",
    city: "Pune",
    clinic: "Smile Care Dental Clinic, Kothrud",
    fee: "₹500",
    verified: true,
  },
  {
    name: "Dr. Vikram Sen",
    specialty: "General Physician",
    city: "Mumbai",
    clinic: "Sen Family Clinic, Andheri West",
    fee: "₹400",
    verified: true,
  },
  {
    name: "Dr. Priya Nair",
    specialty: "Dermatologist",
    city: "Bengaluru",
    clinic: "Glow Skin Clinic, Indiranagar",
    fee: "₹700",
    verified: true,
  },
];

export default function DoctorsPage({ searchParams }) {
  const specialty = searchParams?.specialty || "";
  const city = searchParams?.city || "";

  const filtered = sampleDoctors.filter((d) => {
    const matchesSpecialty = specialty
      ? d.specialty.toLowerCase().includes(specialty.toLowerCase())
      : true;
    const matchesCity = city
      ? d.city.toLowerCase().includes(city.toLowerCase())
      : true;
    return matchesSpecialty && matchesCity;
  });

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <Link href="/" className="text-sm text-muted hover:text-ink">
        ← Back to home
      </Link>

      <h1 className="font-display text-3xl font-700 text-ink mt-4">
        Doctors {specialty && `— ${specialty}`} {city && `in ${city}`}
      </h1>
      <p className="text-muted mt-2 text-sm">
        This is sample placeholder data. Real doctor profiles will come from
        the database once verification and sign-up are built.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mt-8">
        {filtered.length === 0 && (
          <p className="text-muted text-sm">
            No sample doctors match that search yet.
          </p>
        )}
        {filtered.map((d) => (
          <div
            key={d.name}
            className="border border-line rounded-xl p-5 bg-white"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-600 text-ink">
                {d.name}
              </h3>
              {d.verified && (
                <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-1">
                  ✓ Verified
                </span>
              )}
            </div>
            <p className="text-sm text-muted mt-1">{d.specialty}</p>
            <p className="text-sm text-ink mt-3">{d.clinic}</p>
            <p className="text-sm text-muted">{d.city}</p>
            <div className="flex items-center justify-between mt-5">
              <span className="text-ink font-medium">
                Consultation fee: {d.fee}
              </span>
              <button
                disabled
                className="rounded-full bg-primary/40 text-white text-sm font-medium px-4 py-2 cursor-not-allowed"
                title="Booking will be enabled once payments are set up"
              >
                Book (coming soon)
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
