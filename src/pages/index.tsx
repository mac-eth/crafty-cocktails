/* This example requires Tailwind CSS v3.0+ */
import CocktailFireplace from "@/images/cocktail_fireplace.png";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navigation = [
  { name: "Recipes", href: "#" },
  { name: "Trending", href: "#" },
  { name: "Random", href: "#" },
];

const Home: React.FC = () => {

  return (
    <div className="relative isolate h-screen overflow-hidden bg-gray-900 ">
      <Image
        src={CocktailFireplace}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
      />
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 lg:px-8">
        <nav
          className="flex items-center justify-center pt-6"
          aria-label="Global"
        >
          <div className="flex gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm lg:text-base font-semibold leading-6 text-white hover:text-amber-600 duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              A Free, Open-Source Cocktail Recipe App
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover a world of delicious cocktails with our Free, Open-Source
              Cocktail Recipe App. Mix, shake, and pour your way to the perfect
              drink every time.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <Link
                href="#"
                className="w-30 flex h-12 items-center justify-center gap-x-1 rounded-md bg-amber-600 px-3 py-1.5 text-base font-semibold leading-7 text-white shadow-sm duration-300 hover:bg-amber-700"
              >
                <StarIcon className="h-7 w-7" />
                <p>0</p>
                <p>Stars</p>
              </Link>
              <Link
                href="#"
                className="w-30 flex h-12 items-center justify-center gap-x-1 rounded-md bg-neutral-900 px-3 py-1.5 text-base font-semibold leading-7 text-white shadow-sm duration-300 hover:bg-neutral-800"
              >
                Get Started <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Home;