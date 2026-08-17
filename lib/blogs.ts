import type { Blog } from "@/types/blog";

const MEDIA_BASE = "/blogs-media/wimbum-cultural-gala-2026";

export const BLOGS: Blog[] = [
  {
    id: "wimbum-cultural-gala-2026",
    title: "AB KAY Music Takes the Stage at the Wimbum Cultural Evening & Fundraiser Gala",
    description:
      "On September 5, 2026, AB KAY artists Lexy and Mukolah MKL join Wimbum Canada in Toronto for a night of culture, music, and community, a gala built to help Cameroonians in North America feel a little closer to home.",
    image: `${MEDIA_BASE}/flyer.jpg`,
    category: "Live Events",
    author: "AB KAY Productions",
    date: "2026-08-17",
    readTime: "5 min read",
    sections: [
      {
        id: "feeling-at-home",
        heading: "A Night to Feel at Home",
        paragraphs: [
          "Moving abroad often means trading daily closeness to home for opportunity, and with that trade comes a quiet distance from the food, language, and gatherings that used to feel ordinary. Cultural evenings like this one exist to close that distance, even if just for a night.",
          "That is exactly why AB KAY Music Production is proud to be part of the Wimbum Cultural Evening and Fundraiser Gala this September in Toronto. It is a chance for our artists to do more than perform, it is a chance to help an entire community celebrate where they come from while building something together in the place they now call home.",
        ],
      },
      {
        id: "the-gala",
        heading: "The Wimbum Cultural Evening & Fundraiser Gala",
        paragraphs: [
          "Presented by Wimbum Canada, the gala is both a cultural celebration and a fundraiser, a combination that reflects how the association operates. Beyond a single night of festivities, Wimbum Canada exists to bring Canadian immigrants of Wimbum origin together as a support system, hosting cultural dances, gala nights, and presentations where even the youngest members grow up connected to their roots.",
          "This year's evening brings that mission to the stage with AB KAY Music, dinner, and a dress code that calls for the community's best soirée party attire.",
        ],
        sections: [
          {
            id: "event-details",
            heading: "Event Details",
            paragraphs: [
              "Date: Saturday, September 5th, 2026",
              "Time: From 6:00 PM",
              "Venue: 55 Guided Court, Etobicoke, ON",
              "Dress Code: Soirée party dress",
              "Ticket Price: $50",
            ],
          },
          {
            id: "why-it-matters",
            heading: "Why It Matters",
            paragraphs: [
              "For members far from close family, associations like Wimbum Canada become a real source of comfort and belonging, and every ticket sold helps keep that mandate alive for the next gathering, the next generation, and the next newcomer looking for a familiar face in a new country.",
            ],
          },
        ],
      },
      {
        id: "ab-kay-on-stage",
        heading: "AB KAY On Stage: Lexy & Mukolah MKL",
        paragraphs: [
          "Representing AB KAY Music Production on the night are two guest artists whose sound carries the energy of home across the Atlantic.",
        ],
        media: [
          { type: "video", src: `${MEDIA_BASE}/teaser-1.mp4`, alt: "Wimbum Cultural Evening announcement clip" },
          { type: "video", src: `${MEDIA_BASE}/teaser-2.mp4`, alt: "Wimbum Cultural Evening announcement clip" },
        ],
        sections: [
          {
            id: "lexy",
            heading: "Lexy",
            paragraphs: [
              "Lexy is a Cameroonian Afro-pop, R&B, and Afro-njang singer, songwriter, and entertainer whose sound is rooted in the North West Region of Cameroon, the very region the Wimbum people call home. She brings that same regional pride to every performance, making her a natural fit for a night built around culture and connection.",
            ],
            media: [
              { type: "image", src: "/Lexy-artist.jpeg", alt: "Lexy, AB KAY guest artist" },
            ],
          },
          {
            id: "mukolah",
            heading: "Mukolah MKL",
            paragraphs: [
              "Mukolah MKL is one of AB KAY's own, a rising voice from the studio who has built a growing following across Facebook, TikTok, and YouTube. He joins the gala as a guest artist ready to add his own energy to the night's celebration.",
            ],
            media: [
              { type: "image", src: "/Mukolah-artist.jpeg", alt: "Mukolah MKL, AB KAY guest artist" },
            ],
          },
        ],
      },
      {
        id: "rooted-in-culture",
        heading: "Rooted in Culture: Who Are the Wimbum People",
        paragraphs: [
          "The Wimbum people come from the Donga-Mantung Division in Cameroon's North West Region, part of the wider Cameroon Grassfields. The Wimbum area is made up of three clans, the Warr clan centered at Mbot, the Tang clan at Tallah, and the Wiya clan at Ndu, all sharing the Limbum language despite being spread across different communities.",
          "It is that shared language and history that a gala like this keeps alive thousands of kilometres from Donga-Mantung, and it is exactly the kind of culture AB KAY is honoured to help celebrate on stage.",
        ],
      },
      {
        id: "join-us",
        heading: "Join Us in Toronto",
        paragraphs: [
          "Whether you're Wimbum, Cameroonian, or simply someone in North America who loves good music and real community, this gala is open to you. Come dressed for a soirée, bring an appetite for good food and better music, and spend an evening with people who understand exactly what it means to celebrate home away from home.",
          "Tickets are $50. For more information or to reserve your spot, reach out to Erna Ngwayi at +1 (437) 779-4638 or Talla Olga at +1 (647) 723-9461.",
        ],
        media: [
          { type: "video", src: `${MEDIA_BASE}/teaser-3.mp4`, alt: "Wimbum Cultural Evening announcement clip" },
          { type: "video", src: `${MEDIA_BASE}/teaser-4.mp4`, alt: "Wimbum Cultural Evening announcement clip" },
        ],
      },
    ],
  },
];

export function getBlogById(id: string): Blog | undefined {
  return BLOGS.find((blog) => blog.id === id);
}
