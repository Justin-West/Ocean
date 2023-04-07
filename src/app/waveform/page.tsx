import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Waveform() {
  return (
    <main className={inter.className + " mt-20"}>
      <section className="wave">
        <div className="wave-wrapper">
          <h2 className="font-bold text-lg">Welcome to the Waveform!</h2>
        </div>
      </section>
      <section className="wave bg-blue-500 text-white">
        <div className="wave-wrapper">
          <p className=" py-4">Enter this form to make a wave!</p>
          <form className=" text-black grid grid-cols-2 gap-2" action="">
            <div className="relative bg-black/10 p-2 rounded-lg">
              <label htmlFor="" className=" text-white">
                Name:
              </label>
              <input
                className="absolute ml-auto rounded-md right-2"
                type="text"
                required
              />
            </div>

            <div className="relative bg-black/10 p-2 rounded-lg">
              <label htmlFor="" className=" text-white">
                Name your Ocean:
              </label>
              <input
                className=" absolute ml-auto rounded-md right-2"
                type="text"
                required
              />
            </div>
            <div className="relative bg-black/10 p-2 rounded-lg">
              <label htmlFor="" className=" text-white">
                Color of your Ocean:
              </label>
              <input
                className="absolute ml-auto h-[24px] rounded-full w-[180px] right-2"
                type="color"
                name=""
                id=""
              />
            </div>
            <div className="relative bg-black/10 p-2 rounded-lg">
              <label htmlFor="" className=" text-white">
                Saltiness:
              </label>
              <input
                className=" brightness-75 contrast-200 saturate-0 absolute ml-auto rounded-md right-2 h-[24px] w-[180px]"
                type="range"
              />
            </div>
            <div className="bounce bg-black/60 text-lg font-black px-2 rounded-md col-span-2 mx-auto w-max text-blue-500 hover:bg-black hover:text-white transition-colors ">
              <input type="submit" value="Submit"></input>
            </div>
          </form>
        </div>
      </section>
      <section className="wave wave500 waveStatic pt-12 bg-white text-black">
        <div className="wave-wrapper text-sm text-center">
          <p className="py-8 inline">
            All rights reserved 2023. Created by Justin West:
          </p>
          <a
            className="pl-2 text-blue-500 underline underline-offset-2"
            href="https://justin-west.github.io/website-personalprofile/"
          >
            About Me
          </a>
        </div>
      </section>
    </main>
  );
}
