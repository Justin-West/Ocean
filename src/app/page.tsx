import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className + " mt-20"}>
      <section className="wave">
        <div className="wave-wrapper">
          <h2 className="font-bold text-lg">Section 1</h2>
          <p className="p-20 py-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            exercitationem adipisci repudiandae ab blanditiis. Repudiandae odit
            neque recusandae est reiciendis hic ducimus minima tenetur!
          </p>
        </div>
      </section>
      <section className="wave bg-blue-500 text-white">
        <div className="wave-wrapper">
          <h2 className="font-bold text-lg">Section 2</h2>
          <p className="p-20 py-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            exercitationem adipisci repudiandae ab blanditiis. Repudiandae odit
            neque recusandae est reiciendis hic ducimus minima tenetur!
          </p>
        </div>
      </section>
      <section className="wave wave500 waveBig bg-blue-700 text-white">
        <div className="wave-wrapper">
          <h2 className="font-bold text-lg">Section 2</h2>
          <p className="p-20 py-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            exercitationem adipisci repudiandae ab blanditiis. Repudiandae odit
            neque recusandae est reiciendis hic ducimus minima tenetur!
          </p>
        </div>
      </section>
      <section className="wave wave700 waveStatic pt-12 bg-white text-black">
        <div className="wave-wrapper">
          <p className="pl-20 py-8 inline">
            All rights reserved 2023. Created by Justin West:
          </p>
          <a
            className="pl-2"
            href="https://justin-west.github.io/website-personalprofile/"
          >
            About Me
          </a>
        </div>
      </section>
    </main>
  );
}
