import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <section>
        <div>Section 1</div>
      </section>
      <section className=" bg-sky-700 text-blue-100">
        <div>Section 2</div>
      </section>
      <section>
        <div>Section 3</div>
      </section>
    </main>
  );
}
