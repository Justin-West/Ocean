import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className + " mt-20"}>
      <section>
        <div className="wrapper">
          <h2 className="font-bold text-lg">Section 1</h2>
          <p className="p-20 py-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            exercitationem adipisci repudiandae ab blanditiis. Repudiandae odit
            neque recusandae est reiciendis hic ducimus minima tenetur!
          </p>
        </div>
      </section>
      <section className="wave bg-blue-600 text-blue-100">
        <div className="wave-wrapper">
          <h2 className="font-bold text-lg">Section 2</h2>
          <p className="p-20 py-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            exercitationem adipisci repudiandae ab blanditiis. Repudiandae odit
            neque recusandae est reiciendis hic ducimus minima tenetur!
          </p>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <h2 className="font-bold text-lg">Section 3</h2>
          <p className="p-20 py-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            exercitationem adipisci repudiandae ab blanditiis. Repudiandae odit
            neque recusandae est reiciendis hic ducimus minima tenetur!
          </p>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <h2 className="font-bold text-lg">Section 3</h2>
          <p className="p-20 py-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            exercitationem adipisci repudiandae ab blanditiis. Repudiandae odit
            neque recusandae est reiciendis hic ducimus minima tenetur!
          </p>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <h2 className="font-bold text-lg">Section 3</h2>
          <p className="p-20 py-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            exercitationem adipisci repudiandae ab blanditiis. Repudiandae odit
            neque recusandae est reiciendis hic ducimus minima tenetur!
          </p>
        </div>
      </section>
    </main>
  );
}
