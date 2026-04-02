"use client";

import Link from "next/link";

interface FooterProps {
  copyright: string;
  instagram: string;
  linkedin: string;
}

// Footer: peu de pàgina amb links i crèdits localitzats
export default function Footer({ copyright, instagram, linkedin }: FooterProps) {
  return (
    <footer className="px-8 py-5 border-t-[1.5px] border-us-dark bg-us-cream flex items-center justify-between flex-wrap gap-4">

      <p className="text-[12px] text-us-dark/80">
        {copyright}
      </p>

      {/* Links a xarxes socials */}
      <div className="flex gap-4">
        <Link
          href="https://www.instagram.com/upskill.careerlab/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-us-dark/80 hover:text-us-dark transition-colors"
        >
          {instagram}
        </Link>
        <Link
          href="https://www.linkedin.com/company/upskill-career-lab-urv/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-us-dark/80 hover:text-us-dark transition-colors"
        >
          {linkedin}
        </Link>
      </div>

    </footer>
  );
}