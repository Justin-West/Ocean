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
            className="rounded-xl m-auto mt-10 outline outline-2 outline-white outline-offset-[-20px]"
          />
          <p className="p-20 py-10">
            The ocean is just a thing... Nothing crazy just like the bigest
            thing in the world!
          </p>
        </div>
      </section>
      <section className="wave bg-blue-500 text-white">
        <div className="wave-wrapper">
          <p className="p-20 py-10">
            Some say its just H<sub>2</sub>O but some say its actually just salt
            or something...
          </p>
        </div>
      </section>
      <section className="wave wave500 waveBig bg-blue-700 text-white">
        <div className="wave-wrapper">
          <h2 className="font-bold text-lg">Lore:</h2>
          <p className="p-20 py-5">
            In the begining there was just water. Then God thought that was
            kinda lame and made some other stuff...
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
