import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ocean",
  description: "A dumb joke about the Ocean.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav
          className={
            inter.className +
            "isolate z-10 w-full p-4 top-0 fixed backdrop-blur-md backdrop-brightness-110 bg-white/50"
          }
        >
          <Link href="" className="font-extralight inline text-4xl">
            Ocean.
          </Link>
          <div className="ml-10 inline-flex flex-wrap gap-10 pt-4">
            <Link href="/waveform" className="nav-link">
              <div>Waveform</div>
            </Link>
            <Link
              href="https://en.wikipedia.org/wiki/Surface_tension"
              target="_blank"
              className="nav-link"
            >
              <div>Connect</div>
            </Link>
            <Link
              href="https://en.wikipedia.org/wiki/Ocean"
              target="_blank"
              className="nav-link"
            >
              <div>About</div>
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
