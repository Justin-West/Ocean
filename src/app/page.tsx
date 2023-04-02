import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className + " mt-20"}>
      <section className="wave">
        <div className="wave-wrapper">
          <h2 className="font-bold text-lg">Welcome to the Home Page!</h2>
          <Image
            src="https://picsum.photos/id/154/800/500"
            width={500}
            height={300}
            alt=""
            className="rounded-2xl m-auto mt-10 outline"
          />
          <p className="p-20 py-10">
            The ocean is just a thing... Nothing crazy just like the bigest
            thing in the world!
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
        <div className="wave-wrapper text-sm text-center">
          <p className="py-8 inline">
            All rights reserved 2023. Created by Justin West:
          </p>
          <a
            className="pl-2 text-blue-800 underline underline-offset-2"
            href="https://justin-west.github.io/website-personalprofile/"
          >
            About Me
          </a>
        </div>
      </section>
    </main>
  );
}
