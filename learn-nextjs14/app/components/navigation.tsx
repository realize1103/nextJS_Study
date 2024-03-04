"use client";
import Link from "next/link";
import AboutUs from "../about-us/page";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    return <nav>
        <ul>
            <li>
                <Link href="/">Home</Link>{path === "/" ? "🔥" : ""}
            </li>
            <li>
                <Link href="/about-us">About Us</Link>{path === "/about-us" ? "🔥" : ""}
            </li>
        </ul>
    </nav>
}