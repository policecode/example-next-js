// "use client";
import Link from "next/link";
export default function Footer({ children }) {

  return (
    <footer className="py-6 bg-gray-300">
        <div className="grid justify-items-center grid-cols-2 sm:grid-cols-4 w-full gap-4">
            <Link href={'/'}>© 2023 MediaSocial</Link>
            <Link href={'/'}>Terms of Use</Link>
            <Link href={'/'}>Copyright Information</Link>
            <Link href={'/'}>Privacy Policy</Link>
        </div>
    </footer>
  );
}