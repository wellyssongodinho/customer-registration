import "./globals.css";

export const metadata = {
  title: "Customer Register",
  description: "Simple crud app for customer registrations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
