// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}
