import Image from "next/image";
import tes from "@public/testimonial-1.jpg";

export default function Testimonial() {
  return (
    <div className="flex justify-center m-16">
      <div className="flex justify-between w-[78vw]">
        <div className="w-[30vw]">
          <Image src={tes} alt="testimonial" className="rounded-full mx-auto" />
        </div>

        <div className="ml-4 border-b-4 border flex items-center">
          <div className="text-justify">
            <h4 className="text-3xl capitalize">Marcella leonard</h4>
            <h6 className="mb-2 uppercase">creative director</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium harum deleniti tenetur nobis corporis culpa,
              asperiores consectetur tempora ipsam ea et, repellat ab velit
              omnis aliquam tempore veritatis molestias ratione?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
