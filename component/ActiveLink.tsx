"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ActiveLink({ children, href, className }: { children: ReactNode, href: string, className?: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? 'underline font-semibold' : 'hover:underline'}>
      {children}
    </Link>
  );
}