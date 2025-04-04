import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome CSS

export default function SocialConnect() {
  return (
    <div>
      <h6 className="font-bold uppercase mb-2 ">Connect</h6>

      <Link
        href="/"
        target="_blank"
        className="p-2 mr-3 bg-zinc-700 rounded-[25%] hover-opac text-xl"
      >
        <i className="fa-brands fa-facebook"></i>
      </Link>

      <Link
        href="/"
        target="_blank"
        className="p-2 mr-3 bg-zinc-700 rounded-[25%] hover-opac text-xl"
      >
        <i className="fa-brands fa-x-twitter"></i>
      </Link>

      <Link
        href="https://www.instagram.com/solayiwo/"
        target="_blank"
        className="p-2 mr-3 bg-zinc-700 rounded-[25%] hover-opac text-xl"
      >
        <i className="fa-brands fa-instagram"></i>
      </Link>

      <Link
        href="/"
        target="_blank"
        className="p-2 mr-3 bg-zinc-700 rounded-[25%] hover-opac text-xl"
      >
        <i className="fa-brands fa-github"></i>
      </Link>

      <Link
        href="https://www.linkedin.com/in/olayiwola-sulaimon/"
        target="_blank"
        className="p-2 bg-zinc-700 rounded-[25%] hover-opac text-xl"
      >
        <i className="fa-brands fa-linkedin"></i>
      </Link>
    </div>
  );
}
