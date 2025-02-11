import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jonathan Narvaez Martinez - Portfolio",
  description:
    "Software engineer, Frontend Developer, React JS Developer portfolio",
  openGraph: {
    title: "Jonathan Narvaez Martinez - Portfolio",
    description:
      "Software engineer, Frontend Developer, React JS Developer portfolio",
    images: [
      {
        url: "https://curriculum-jcnm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.33fe3f39.jpg&w=3840&q=75",
        width: 466,
        height: 630,
        alt: "Jonathan Narvaez Martinez",
      },
    ],
    url: "https://curriculum-jcnm.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
