import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SentinentalIQ | Flood Risk Intelligence",
  description: "Advanced climate risk and flood analytics engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
