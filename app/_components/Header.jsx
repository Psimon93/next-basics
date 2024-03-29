import Link from "next/link";
import Searchbar from "./Searchbar";

export default function Header() {
  return (
    <header>
      <h1>Header</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/">Home</Link>

      {/* <Searchbar /> */}
    </header>
  );
}
