"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const items = [
    { href: "#menu", label: "Меню" },
    { href: "#gallery", label: "Галерея" },
    { href: "#story", label: "История" },
    { href: "#contact", label: "Контакты" },
  ];
  return (
    <div className="fixed top-0 inset-x-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="#" className="font-heading text-xl">HRYG TIME</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-stone-700">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="hover:text-stone-900">{i.label}</a>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Меню">
          <div className="w-6 h-0.5 bg-stone-900 mb-1" />
          <div className="w-6 h-0.5 bg-stone-900" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {items.map((i) => (
              <a key={i.href} href={i.href} className="py-1">{i.label}</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


