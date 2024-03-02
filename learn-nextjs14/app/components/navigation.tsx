import Link from "next/link";
import AboutUs from "../about-us/page";

export default function Navigation() {
    return <nav>
        <ul>
            <li>
                <Link href="">Home</Link>
            </li>
            <li>
                <Link href="/about-us">About Us</Link>
            </li>
        </ul>
    </nav>
}