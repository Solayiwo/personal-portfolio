import Link from "next/link";

export default function Logo() {
  return (
    <div className="font-light text-4xl ml-4">
      <Link href="/">
        <h4>Solam</h4>
      </Link>
    </div>
  );
}
