import Image from "next/image";
import ola from "@public/sulaimon.jpg";

export default function MyImage() {
  return (
    <div>
      <Image
        src={ola}
        alt="Devola"
        className="rounded-full mx-auto myimage  border-2"
      />
    </div>
  );
}
