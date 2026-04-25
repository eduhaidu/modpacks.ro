'use client';

import ModItem from "@/components/mod-item";
import { useState } from "react";

type ModCard = {
  id: number;
  title: string;
  author: string;
};

const mods: ModCard[] = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: "Modpack v1",
  author: "poco.gg",
}));

export default function SAMPPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Sorteaza dupa");

  const filteredMods = mods.filter((mod) =>
    mod.title.toLowerCase().includes(search.toLowerCase()) ||
    mod.author.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_#58de58_0%,_#52d352_28%,_#74cc70_58%,_#a8d6a2_100%)] text-[#101d10]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_28%,rgba(0,0,0,0.08)_100%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1240px] flex-col px-6 pb-10 pt-4 md:px-10">
        <header className="flex items-center justify-between gap-6 text-sm font-semibold text-black/90">
          <div className="flex items-center gap-8">
            <span className="text-base font-black tracking-tight">modpacks.ro</span>
            <nav className="hidden items-center gap-7 md:flex">
              <a href="#" className="transition-opacity hover:opacity-75">
                Moduri RAGE
              </a>
              <a href="#" className="transition-opacity hover:opacity-75">
                Moduri SAMP
              </a>
              <a href="#" className="transition-opacity hover:opacity-75">
                Discord
              </a>
            </nav>
          </div>

          <button
            type="button"
            aria-label="Profile"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-white/80 shadow-sm ring-1 ring-black/10"
          />
        </header>

        <section className="mt-14 flex items-center justify-between gap-4">
          <label className="flex h-12 w-full max-w-[290px] items-center gap-3 rounded-full bg-[#f3efe9] px-4 text-sm text-black/70 shadow-[0_10px_24px_rgba(52,90,43,0.18)] ring-1 ring-black/5">
            <span className="text-base leading-none">≡</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Hinted search text"
              className="w-full bg-transparent outline-none placeholder:text-black/45"
            />
            <span className="text-base leading-none">⌕</span>
          </label>

          <label className="flex h-11 min-w-[150px] items-center justify-between gap-3 rounded-full bg-[#f3efe9] px-4 text-sm font-medium text-black/75 shadow-[0_10px_24px_rgba(52,90,43,0.18)] ring-1 ring-black/5">
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="w-full cursor-pointer bg-transparent outline-none"
            >
              <option>Sorteaza dupa</option>
              <option>Nume</option>
              <option>Autor</option>
              <option>Recente</option>
            </select>
            <span className="text-xs">▼</span>
          </label>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMods.map((mod) => (
            ModItem({
              name: mod.title,
              author: mod.author,
              description: `By ${mod.author}`,
              thumbnailUrl: `https://via.placeholder.com/400x300?text=Mod+${mod.id}`,
            })
          ))}
        </section>
      </div>
    </main>
  );
}
