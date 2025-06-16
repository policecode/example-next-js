import { ModeToggle } from "@/components/me/toggle-theme";
import Link from "next/link";
export default function Header() {
  return (
    <div className="">
        <ul>
            <li>
                <Link href={`/login`}>Đăng nhập</Link>
            </li>
            <li>
                <Link href={`/register`}>Đăng ký</Link>
            </li>
        </ul>
        <ModeToggle />
    </div>
  );
}