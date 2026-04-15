import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#0d1320]">
      <section className="relative h-full w-full overflow-hidden">
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          <div className="relative flex items-center justify-center bg-[#1a2436] p-8 md:p-12">
              <Image
                src="/ragemp_logo.png"
                alt="RAGE:MP logo"
                width={260}
                height={260}
                className="h-auto w-[160px] md:w-[230px]"
                priority
              />
          </div>

          <div className="relative flex items-center justify-center bg-[#22304a] p-8 md:p-12">
              <Image
                src="/samp_logo.png"
                alt="SA:MP logo"
                width={460}
                height={260}
                className="h-auto w-[230px] md:w-[360px]"
                priority
              />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-1 -translate-x-1/2 bg-[#10f140] shadow-[0_0_22px_2px_rgba(16,241,64,0.9)] md:block"
        />

        <button
          type="button"
          aria-label="Switch between game modes"
          className="absolute left-1/2 top-1/2 z-10 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#10f140] bg-[#10f140] text-white shadow-[0_0_25px_3px_rgba(16,241,64,0.75)] transition-transform duration-200 hover:scale-105 md:flex"
        >
          <span className="flex items-center gap-1 text-xl font-black leading-none">
            <span>◀</span>
            <span>▶</span>
          </span>
        </button>
      </section>
    </main>
  );
}
