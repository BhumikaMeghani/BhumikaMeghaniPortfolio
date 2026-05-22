"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
});

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1024 1024" fill="none" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        transform="scale(64)"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className}>
      <path
        d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
        fill="#0A66C2"
      />
    </svg>
  );
}

function GmailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 49.4 512 399.42" className={className}>
      <g fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
          <path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z" />
          <path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z" />
          <path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z" />
        </g>
        <path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z" />
        <path fill="#c5221f" fillRule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z" />
      </g>
    </svg>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const { skills, contact } = portfolioData;

  const themeVars = isDark
    ? { "--bg": "#09090b", "--fg": "#fafafa", "--muted": "#71717a", "--border": "#27272a", "--accent": "#a1a1aa" } as React.CSSProperties
    : { "--bg": "#fafafa", "--fg": "#09090b", "--muted": "#52525b", "--border": "#e4e4e7", "--accent": "#27272a" } as React.CSSProperties;

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-24 transition-colors duration-500"
      style={{ ...themeVars, background: "var(--bg)", color: "var(--fg)" }}
    >
      {/* Theme toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle theme"
        className="fixed top-6 right-6 z-50 w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-all duration-300"
      >
        {isDark ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>
      <div className="w-full max-w-lg flex flex-col gap-16">
        {/* Name */}
        <motion.div {...fade(0)} className="flex flex-col gap-1">
          <h1 className="text-lg font-medium tracking-tight">
            Bhumika Meghani
          </h1>
          <p className="text-xs text-[var(--muted)] tracking-wide">
            BCA Student · IIPS, DAVV
          </p>
        </motion.div>

        {/* About */}
        <motion.div
          {...fade(0.15)}
          className="flex flex-col gap-3"
        >
          <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-300 cursor-default w-fit">
            About
          </h2>
          <p className="text-sm leading-relaxed text-[var(--accent)]">
            Motivated and enthusiastic BCA student currently pursuing an
            Integrated MCA program at International Institute of Professional
            Studies, DAVV.
          </p>
          <p className="text-sm leading-relaxed text-[var(--accent)] italic">
            Turning ideas into code.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          {...fade(0.3)}
          className="flex flex-col gap-4"
        >
          <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-300 cursor-default w-fit">
            Skills
          </h2>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-2">
              Technical
            </p>
            <p className="text-sm text-[var(--accent)] leading-relaxed">
              {[...skills.programming, ...skills.core].join(" · ")}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-2">
              Soft Skills
            </p>
            <p className="text-sm text-[var(--accent)] leading-relaxed">
              {skills.softSkills.join(" · ")}
            </p>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          {...fade(0.45)}
          className="flex flex-col gap-3"
        >
          <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-300 cursor-default w-fit">
            Links
          </h2>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="group/link flex items-center gap-2.5 text-sm text-[var(--accent)] hover:text-[var(--fg)] transition-all duration-300 w-fit"
            >
              <GmailIcon className="w-4 h-4 shrink-0 opacity-60 group-hover/link:opacity-100 transition-opacity duration-300" />
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                Email
              </span>
            </a>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-2.5 text-sm text-[var(--accent)] hover:text-[var(--fg)] transition-all duration-300 w-fit"
            >
              <GithubIcon className="w-4 h-4 shrink-0 opacity-60 group-hover/link:opacity-100 transition-opacity duration-300" />
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                GitHub
              </span>
            </a>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-2.5 text-sm text-[var(--accent)] hover:text-[var(--fg)] transition-all duration-300 w-fit"
            >
              <LinkedInIcon className="w-4 h-4 shrink-0 opacity-60 group-hover/link:opacity-100 transition-opacity duration-300" />
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                LinkedIn
              </span>
            </a>
          </div>
        </motion.div>

        {/* Footer line */}
        <motion.div {...fade(0.6)}>
          <div className="h-px bg-[var(--border)]" />
          <p className="text-[10px] text-[var(--muted)] mt-4 tracking-wide">
            Breaking things. Learning things. Building things.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
