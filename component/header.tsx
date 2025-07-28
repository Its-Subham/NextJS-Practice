// components/Header.tsx
import ActiveLink from "./ActiveLink";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Website</h1>
      <nav className="space-x-4">
        <ActiveLink href="/" > Home</ActiveLink>
        <ActiveLink href="/about" >About</ActiveLink>
        <ActiveLink href="/contact" >Contact</ActiveLink>
      </nav>
    </header>
  );
}
