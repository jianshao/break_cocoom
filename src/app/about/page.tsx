import Link from "next/link";

export default function About() {
    return (
    <ul>
        <li><Link href="/">Back</Link></li>
        <li><Link href="/about/server">Server</Link></li>
    </ul>
);
}