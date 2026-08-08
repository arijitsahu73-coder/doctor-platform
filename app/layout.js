import "./globals.css";

export const metadata = {
  title: "MedFind — Verified Doctors Near You",
  description:
    "Find verified doctors in India by specialty and location, and book appointments directly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body">{children}</body>
    </html>
  );
}
