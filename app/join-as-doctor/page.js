import Link from "next/link";

const specialties = [
  "General Physician",
  "Dentist",
  "Dermatologist",
  "Gynecologist",
  "Pediatrician",
  "Orthopedic",
  "Cardiologist",
  "ENT Specialist",
  "Other",
];

// TODO: replace this with your real Formspree endpoint
const FORM_ENDPOINT = "https://formspree.io/f/myegkjwn";

export default function JoinAsDoctor() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-14">
      <Link href="/" className="text-sm text-muted hover:text-ink">
        ← Back to home
      </Link>

      <h1 className="font-display text-3xl font-700 text-ink mt-4">
        Create your doctor profile
      </h1>
      <p className="text-muted mt-2 text-sm leading-relaxed">
        Fill in your details and upload your medical registration
        certificate. We manually check every submission before your profile
        goes live — you'll hear back by email.
      </p>

      <form
        action={FORM_ENDPOINT}
        method="POST"
        encType="multipart/form-data"
        className="mt-10 space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            Full name
          </label>
          <input
            type="text"
            name="full_name"
            required
            placeholder="Dr. Ananya Rao"
            className="w-full border border-line rounded-lg px-4 py-3 outline-none focus:border-primary bg-white"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full border border-line rounded-lg px-4 py-3 outline-none focus:border-primary bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="98765 43210"
              className="w-full border border-line rounded-lg px-4 py-3 outline-none focus:border-primary bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            Specialty
          </label>
          <select
            name="specialty"
            required
            defaultValue=""
            className="w-full border border-line rounded-lg px-4 py-3 outline-none focus:border-primary bg-white"
          >
            <option value="" disabled>
              Select your specialty
            </option>
            {specialties.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              Medical registration number
            </label>
            <input
              type="text"
              name="registration_number"
              required
              placeholder="e.g. MH-12345"
              className="w-full border border-line rounded-lg px-4 py-3 outline-none focus:border-primary bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              Issuing medical council
            </label>
            <input
              type="text"
              name="issuing_council"
              required
              placeholder="e.g. Maharashtra Medical Council"
              className="w-full border border-line rounded-lg px-4 py-3 outline-none focus:border-primary bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            Clinic name
          </label>
          <input
            type="text"
            name="clinic_name"
            required
            placeholder="Smile Care Dental Clinic"
            className="w-full border border-line rounded-lg px-4 py-3 outline-none focus:border-primary bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            Clinic address
          </label>
          <input
            type="text"
            name="clinic_address"
            required
            placeholder="Street, area, landmark"
            className="w-full border border-line rounded-lg px-4 py-3 outline-none focus:border-primary bg-white"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              City
            </label>
            <input
              type="text"
              name="city"
              required
              placeholder="Pune"
              className="w-full border border-line rounded-lg px-4 py-3 outline-none focus:border-primary bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              Consultation fee (₹)
            </label>
            <input
              type="number"
              name="consultation_fee"
              required
              min="0"
              placeholder="500"
              className="w-full border border-line rounded-lg px-4 py-3 outline-none focus:border-primary bg-white"
            />
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <p className="text-sm text-ink font-medium">
            After submitting this form, email your registration certificate
          </p>
          <p className="text-sm text-muted mt-1">
            Send a PDF or photo of your medical council registration
            certificate to{" "}
            <a
              href="mailto:arijitsahu73@gmail.com"
              className="text-primary underline"
            >
              arijitsahu73@gmail.com
            </a>{" "}
            with your name in the subject line. We'll match it to your
            submission.
          </p>
        </div>

        <label className="flex items-start gap-3 text-sm text-muted">
          <input type="checkbox" required className="mt-1" />
          <span>
            I confirm these details are accurate and I consent to my
            registration being verified before my profile is published.
          </span>
        </label>

        <button
          type="submit"
          className="rounded-full bg-primary text-white font-medium px-6 py-3 hover:bg-primaryDark transition-colors"
        >
          Submit for verification
        </button>
      </form>
    </main>
  );
}
