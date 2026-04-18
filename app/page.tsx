'use client';
import Image from "next/image";
import type { MouseEvent } from "react";
import { useState } from "react";

export default function Home() {
  const [game, setGame] = useState<"ragemp" | "samp" | "neutral">("neutral");
  const isRageActive = game === "ragemp";
  const isSampActive = game === "samp";
  const dividerLeft = isRageActive ? "100%" : isSampActive ? "0%" : "50%";
  const dividerTranslateX = isRageActive
    ? "translateX(-100%)"
    : isSampActive
      ? "translateX(0%)"
      : "translateX(-50%)";
  const pointerTransform = isRageActive
    ? "translate(-100%, -50%)"
    : isSampActive
      ? "translate(0%, -50%)"
      : "translate(-50%, -50%)";
  const deadZonePx = 24;

  const handleSectionMouseMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const middleX = bounds.left + bounds.width / 2;
    const distanceFromMiddle = event.clientX - middleX;

    if (Math.abs(distanceFromMiddle) <= deadZonePx) {
      setGame((currentGame) =>
        currentGame === "neutral" ? currentGame : "neutral",
      );
      return;
    }

    const nextGame = distanceFromMiddle < 0 ? "ragemp" : "samp";

    setGame((currentGame) =>
      currentGame === nextGame ? currentGame : nextGame,
    );
  };

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#0d1320]">
      <section
        className="relative h-full w-full overflow-hidden"
        onMouseMove={handleSectionMouseMove}
        onMouseLeave={() => setGame("neutral")}
      >
        <div className="flex h-full flex-col md:flex-row">
          <div
            className={`relative flex items-center justify-center overflow-hidden bg-[#1a2436] p-8 transition-all duration-500 md:p-12 ${
              isRageActive
                ? "md:basis-[100%]"
                : isSampActive
                  ? "md:basis-[0%]"
                  : "md:basis-1/2"
            }`}
          >
            <div
              className={`pointer-events-none absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-300 md:p-12 ${
                game === "neutral" ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex flex-col items-center gap-5">
                <Image
                  src="/ragemp_logo.png"
                  alt="RAGE:MP Modpacks"
                  width={250}
                  height={250}
                  className="h-auto w-[180px] md:w-[300px]"
                  priority
                />
              </div>
            </div>

            <div
              className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-[#1a2436]/88 p-8 transition-opacity duration-300 md:p-12 ${
                isRageActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex flex-col items-center gap-5">
                <Image
                  src="/ragemp_logo.png"
                  alt="RAGE:MP Modpacks"
                  width={250}
                  height={250}
                  className="h-auto w-[180px] md:w-[300px]"
                  priority
                />
                <button className="pointer-events-auto rounded-full border border-white/30 bg-green-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-600 md:text-base">
                  <span className="flex items-center gap-2 leading-none">
                    <span>Moduri RAGE:MP</span>
                    <span>▶</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div
            className={`relative flex items-center justify-center overflow-hidden bg-[#22304a] p-8 transition-all duration-500 md:p-12 ${
              isRageActive
                ? "md:basis-[0%]"
                : isSampActive
                  ? "md:basis-[100%]"
                  : "md:basis-1/2"
            }`}
          >
            <div
              className={`pointer-events-none absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-300 md:p-12 ${
                game === "neutral" ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex flex-col items-center gap-5">
                <Image
                  src="/samp_logo.png"
                  alt="SA:MP Modpacks"
                  width={460}
                  height={260}
                  className="h-auto w-[220px] md:w-[320px]"
                  priority
                />
              </div>
            </div>

            <div
              className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-[#22304a]/88 p-8 transition-opacity duration-300 md:p-12 ${
                isSampActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex flex-col items-center gap-5">
                <Image
                  src="/samp_logo.png"
                  alt="SA:MP Modpacks"
                  width={460}
                  height={260}
                  className="h-auto w-[220px] md:w-[320px]"
                  priority
                />
                <button className="pointer-events-auto rounded-full border border-white/30 bg-green-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-600 md:text-base">
                  <span className="flex items-center gap-2 leading-none">
                    <span>Moduri SA:MP</span>
                    <span>▶</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 hidden w-1 bg-[#10f140] shadow-[0_0_22px_2px_rgba(16,241,64,0.9)] transition-all duration-500 md:block"
          style={{ left: dividerLeft, transform: dividerTranslateX }}
        />

        <button
          type="button"
          aria-label="Switch between game modes"
          className="absolute top-1/2 z-10 hidden h-16 w-16 items-center justify-center rounded-full border-2 border-[#10f140] bg-[#10f140] text-white shadow-[0_0_25px_3px_rgba(16,241,64,0.75)] transition-all duration-500 hover:scale-105 md:flex"
          style={{ left: dividerLeft, transform: pointerTransform }}
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
