
import Link from "next/link";
import { Button } from "@nextui-org/react";


export default function Home() {
    return (
        <div>
            <header></header>
            <Link href="/inspire">MainPage</Link>
            <Button color="primary">Button</Button>
        </div>
    );
}
