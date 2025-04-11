"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project_1 from "@public/portfolio_project.png";
import project_2 from "@public/portfolio_2.png";
import project_3 from "@public/portfolio_3.png";
import project_4 from "@public/portfolio_4.png";
import project_5 from "@public/crudapp.png";

export default function RecentWork() {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 2, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto slide
    autoplaySpeed: 2000, // Auto slide speed in ms
  };

  return (
    <div className="flex justify-center mt-24">
      <div className="bg-zinc-700 rounded-2xl p-6 w-[81%]">
        <div>
          <div className="">
            <h6 className="uppercase">portfolio</h6>
            <h4 className="uppercase text-6xl">
              Recent <span className="text-purple-700">works</span>
            </h4>
          </div>
          <p>
            Projects I have worked on to showcase my skills on the feild of
            software engineering.
          </p>
        </div>

        <div className=" w-[78vw mt-2">
          <div className="">
            {/* <h2> React Slick Carousel </h2> */}
            <Slider {...settings}>
              <div className="bg-purple-600 ">
                <div className="">
                  <Image
                    src={project_1}
                    alt="Devola"
                    className="border-2 thumbnail rounded-xl mx-auto mt-4"
                  />
                </div>
                <div className="text-center">
                  <h3>Slide 1</h3>
                  <Link href="/">github source code</Link>
                  <Link href="/">url link</Link>
                </div>
              </div>

              <div className="bg-purple-600">
                <div className="">
                  <Image
                    src={project_2}
                    alt="avatarDev"
                    className="border-2 thumbnail rounded-xl mx-auto mt-4 "
                  />
                </div>
                <div className="text-center">
                  <h3>Slide 2</h3>
                  <Link href="/">github source code</Link>
                  <Link href="/">url link</Link>
                </div>
              </div>

              <div className="bg-purple-600">
                <div className="">
                  <Image
                    src={project_3}
                    alt="testimonial"
                    className="border-2 thumbnail rounded-xl mx-auto mt-4 "
                  />
                </div>
                <div className="text-center">
                  <h3>Slide 3</h3>
                  <Link href="/">github source code</Link>
                  <Link href="/">url link</Link>
                </div>
              </div>

              <div className="bg-purple-600">
                <div className="">
                  <Image
                    src={project_4}
                    alt="testimonial"
                    className="border-2 thumbnail rounded-xl mx-auto mt-4"
                  />
                </div>

                <div className="text-center">
                  <h3>Slide 4</h3>
                  <Link href="/">github source code</Link>
                  <Link href="/">url link</Link>
                </div>
              </div>
              <div className="bg-purple-600">
                <div className="bg-purple-600">
                  <Image
                    src={project_5}
                    alt="testimonial"
                    className=" border-2 thumbnail rounded-xl mx-auto mt-4 "
                  />
                </div>

                <div className="text-center">
                  <h3>Slide 5</h3>
                  <Link href="/">github source code</Link>
                  <Link href="/">url link</Link>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
