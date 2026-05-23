"use client";
import Scene from "@/components/canvas/Scene";
import Hero from "@/components/overlay/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Images, Quote, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Scene />
      <main
        id="homePage"
        className="relative h-screen w-screen overflow-y-auto overflow-x-hidden z-10"
      >
        <Hero />

        <div className="h-screen pt-[30vh] px-[10%]  grid grid-cols-2">
          <div className=" space-y-4">
            <h1 className=" tracking-wide">Entertainment At It's Best</h1>
            <p>
              From good music, to good drinks and good food: AB KAY Productions
              brings you 3 distinct industries for you amusement.
            </p>
            <ul className=" list-disc list-inside">
              <li> 🎺 AB KAY Productions Music Studio</li>
              <li> 🍻 AB KAY Complex</li>
              <li> 🍔 AB KAY Fast Foods</li>
            </ul>
          </div>
        </div>

        <section className=" py-10 px-10 space-y-40 border-">
          <h2 className=" text-center ">
            What industry would you like to explore Today?
          </h2>
          <div className="grid grid-cols-3 gap-5">
            <Card className=" translate-x-full -rotate-z-12 z-10">
              <div className=" space-y-4 px-4">
                <video
                  className=" w-full aspect-video object-scale-down"
                  src={"/xl4xfdz27aueltk5hmfz.mp4"}
                  autoPlay
                  muted
                  loop
                />

                <h3 className=" text-center">Music Production</h3>
                <p>
                  From good music, to good drinks and good food: AB KAY
                  Productions brings you 3 distinct industries for you
                  amusement.
                </p>
                <ul className=" list-disc list-inside">
                  <li>AB KAY Productions Music Studio</li>
                  <li>AB KAY Complex</li>
                  <li>AB KAY Fast Foods</li>
                </ul>
                <div className="flex items-center justify-center">
                  <Button>View More</Button>
                </div>
              </div>
            </Card>
            <Card className=" z-20">
              <div className=" space-y-4 px-4">
                <video
                  className=" w-full aspect-video object-scale-down"
                  src={"/xl4xfdz27aueltk5hmfz.mp4"}
                  autoPlay
                  muted
                  loop
                />

                <h3 className=" text-center">Music Production</h3>
                <p>
                  From good music, to good drinks and good food: AB KAY
                  Productions brings you 3 distinct industries for you
                  amusement.
                </p>
                <ul className=" list-disc list-inside">
                  <li>AB KAY Productions Music Studio</li>
                  <li>AB KAY Complex</li>
                  <li>AB KAY Fast Foods</li>
                </ul>
                <div className="flex items-center justify-center">
                  <Button>View More</Button>
                </div>
              </div>
            </Card>
            <Card className=" -translate-x-full rotate-z-12 z-10">
              <div className=" space-y-4 px-4">
                <video
                  className=" w-full aspect-video object-scale-down"
                  src={"/xl4xfdz27aueltk5hmfz.mp4"}
                  autoPlay
                  muted
                  loop
                />

                <h3 className=" text-center">Music Production</h3>
                <p>
                  From good music, to good drinks and good food: AB KAY
                  Productions brings you 3 distinct industries for you
                  amusement.
                </p>
                <ul className=" list-disc list-inside">
                  <li>AB KAY Productions Music Studio</li>
                  <li>AB KAY Complex</li>
                  <li>AB KAY Fast Foods</li>
                </ul>
                <div className="flex items-center justify-center">
                  <Button>View More</Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className=" grid grid-cols-3 px-[10%] py-32 gap-28">
          <div className="">
            <div className=" aspect-square bg-white rounded-full relative">
              <Image
                src={"/sample-hero.jpg"}
                alt="CEO"
                fill
                sizes="400"
                className=" rounded-full"
              />
            </div>
          </div>
          <div className=" col-span-2">
            <h2>ABUBAKAR</h2>
            <p className=" text-sm font-heading tracking-wider font-medium">
              Founder
            </p>
            <p className=" pt-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Officiis, nihil dicta consequatur eligendi recusandae quaerat
              illum alias non vel aliquam corporis accusamus quisquam minus
              similique aspernatur, molestiae dolores vero perferendis.
            </p>
          </div>
        </section>

        <section className="bg-black/90 p-10">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-3 text-center">
              <h1 className="text-white">Gallery</h1>
              <p className="mx-auto max-w-2xl text-sm text-slate-300">
                Have a look at what we do best.
                <br />
                Events... parties... shows...
              </p>
              <p>
                <span className=" line-through font-semibold">
                  No dull time
                </span>{" "}
                <span className=" text-lg">Just real entertainment</span>
              </p>
            </div>

            <div className="h-screen grid max-w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 grid-rows-4">
              <div className=" relative col-span-1 lg:col-span-2 row-span-2 row-span-1 rounded-lg bg-[#111] shadow-2xl shadow-black/40">
                <Image
                  src="/sample-hero.jpg"
                  alt="Gallery mosaic large"
                  fill
                  className="object-cover rounded-lg grayscale-100 hover:grayscale-0"
                />
              </div>

              <div className="relative col-span-1 row-span-1 rounded-[2rem] bg-[#111] shadow-2xl shadow-black/30">
                <Image
                  src="/sample-hero.jpg"
                  alt="Gallery mosaic vertical"
                  fill
                  className="object-cover rounded-lg grayscale-100 hover:grayscale-0"
                />
              </div>

              <div className="relative col-span-1 row-span-1 rounded-[2rem] bg-[#111] shadow-2xl shadow-black/30">
                <Image
                  src="/sample-hero.jpg"
                  alt="Gallery mosaic square 1"
                  fill
                  className="object-cover rounded-lg grayscale-100 hover:grayscale-0"
                />
              </div>

              <div className=" relative col-span-1 row-span-1 rounded-[2rem] bg-[#111] shadow-2xl shadow-black/30">
                <Image
                  src="/sample-hero.jpg"
                  alt="Gallery mosaic square 2"
                  fill
                  className="object-cover rounded-lg grayscale-100 hover:grayscale-0"
                />
              </div>

              <div className="relative col-span-1  row-span-1 rounded-[2rem] bg-[#111] shadow-2xl shadow-black/30">
                <Image
                  src="/sample-hero.jpg"
                  alt="Gallery mosaic wide"
                  fill
                  className="object-cover rounded-lg grayscale-100 hover:grayscale-0"
                />
              </div>

              {/* // */}

              <div className="relative col-span-1 row-span-1 rounded-[2rem] bg-[#111] shadow-2xl shadow-black/30">
                <Image
                  src="/sample-hero.jpg"
                  alt="Gallery mosaic vertical"
                  fill
                  className="object-cover rounded-lg grayscale-100 hover:grayscale-0 "
                />
              </div>
              <div className=" relative col-span-1 lg:col-span-2 row-span-2 row-span-1 rounded-lg bg-[#111] shadow-2xl shadow-black/40">
                <Image
                  src="/sample-hero.jpg"
                  alt="Gallery mosaic large"
                  fill
                  className="object-cover rounded-lg grayscale-100 hover:grayscale-0"
                />
              </div>

              <div className="relative col-span-1 row-span-1 rounded-[2rem] bg-[#111] shadow-2xl shadow-black/30">
                <Image
                  src="/sample-hero.jpg"
                  alt="Gallery mosaic square 1"
                  fill
                  className="object-cover rounded-lg grayscale-100 hover:grayscale-0"
                />
              </div>

              <div className=" relative col-span-1 row-span-1 rounded-[2rem] bg-[#111] shadow-2xl shadow-black/30">
                <Image
                  src="/sample-hero.jpg"
                  alt="Gallery mosaic square 2"
                  fill
                  className="object-cover rounded-lg grayscale-100 hover:grayscale-0"
                />
              </div>

              <div className="relative col-span-1  row-span-1 rounded-[2rem] bg-[#111] shadow-2xl shadow-black/30">
                <Image
                  src="/sample-hero.jpg"
                  alt="Gallery mosaic wide"
                  fill
                  className="object-cover rounded-lg grayscale-100 hover:grayscale-0"
                />
              </div>
            </div>
            <div className=" flex items-center justify-center">
              <Button>
                View All <Images />
              </Button>
            </div>
          </div>
        </section>

        <section className=" p-10">
          <h2 className="text-center">Testimonials</h2>
          <p className="text-center text-sm text-slate-300">
            Hear what our clients say about us
            <br />
            Peaceful... private... classic...
          </p>
          <div className=" flex ">
            <Card className="w-[30vw] p-4">
              <p className=" font-medium leading-0">John Doe</p>
              <div className=" flex">
                <Star className=" text-primary fill-primary" />
                <Star className=" text-primary fill-primary" />
                <Star className=" text-primary fill-primary" />
                <Star className=" text-primary fill-primary" />
                <Star className=" text-primary fill-primary" />
              </div>
              <div className="flex justify-end">
                <Quote />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, facere facilis, laborum totam ut quas modi tempora
                esse aliquid officiis voluptatum porro dolore dolorum architecto
                voluptas quo nesciunt exercitationem? Doloribus.
              </p>
            </Card>
          </div>
        </section>

        <footer className="flex items-center justify-between p-4 bg-gray-950">
          <div className="flex items-center gap-4">
            <Link href={"#"}>
              <Image
                src={"/youtube.png"}
                width={32}
                height={28}
                alt="Youtube"
              />
            </Link>
            <Link href={"#"}>
              <Image
                src={"/facebook.png"}
                width={32}
                height={28}
                alt="FaceBook"
              />
            </Link>
            <Link href={"#"}>
              <Image src={"/tiktok.png"} width={32} height={28} alt="TikTok" />
            </Link>
          </div>
          <div>
            <p>AB KAY Production @2026</p>
          </div>
          <div className="flex items-center gap-4 text-sm font-light">
            <Link href={"#"}>Blogs</Link>
            <Link href={"#"}>Contacts</Link>
            <Link href={"#"}>Privacy</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
