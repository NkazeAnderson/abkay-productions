import type { Blog } from "@/types/blog";

const MEDIA_BASE = "/blogs-media/wimbum-cultural-gala-2026";
const RECAP_MEDIA_BASE = "/blogs-media/wimbum-cultural-gala-2026-recap";

const OKEN_MEDIA_BASE = "/blogs-media/oken-signing";

export const BLOGS: Blog[] = [
  {
    id: "oken-signs-with-ab-kay-production",
    title: "Welcome to the Family: Oken Signs with AB KAY Production",
    description:
      "AB KAY Production is proud to announce the signing of Oken, a gifted artist whose talent, consistency, and love for music had him dropping the hit single \"Aishia\" almost immediately after joining the label.",
    image: `${OKEN_MEDIA_BASE}/signing-1.png`,
    category: "Artist News",
    author: "AB KAY Productions",
    date: "2026-10-10",
    readTime: "4 min read",
    sections: [
      {
        id: "a-new-chapter",
        heading: "A New Chapter for AB KAY",
        paragraphs: [
          "AB KAY Production is thrilled to officially welcome Oken to the family. His signing marks an exciting new chapter for the label, and a powerful addition to a roster already built on passion, hard work, and a love for authentic sound.",
          "From the first conversation, it was clear that Oken is not just another voice, he is an artist with vision, discipline, and a presence that demands attention.",
        ],
        media: [
          { type: "image", src: `${OKEN_MEDIA_BASE}/signing-1.png`, alt: "Oken at his signing with the AB KAY Production team" },
          { type: "image", src: `${OKEN_MEDIA_BASE}/signing-2.png`, alt: "Oken with the AB KAY Production team after signing" },
        ],
      },
      {
        id: "talent-and-skill",
        heading: "Talent That Speaks for Itself",
        paragraphs: [
          "Oken brings a rare mix of raw talent and polished craft. His voice carries emotion and confidence, his songwriting is sharp and memorable, and his stage presence shows an artist who understands how to connect with an audience, whether in a studio booth or in front of a crowd.",
          "Equally striking is his style. Oken has a strong sense of identity, proudly rooted in culture and unmistakably his own, and it shows in everything he puts out, from the sound to the visuals.",
        ],
        media: [
          { type: "image", src: "/oken-artist.jpeg", alt: "Oken, AB KAY Production artist", tall: true },
          { type: "video", src: `${OKEN_MEDIA_BASE}/video-1.mp4`, alt: "Oken at AB KAY Production", tall: true },
        ],
      },
      {
        id: "consistency-and-love-for-music",
        heading: "Consistency and a Genuine Love for Music",
        paragraphs: [
          "What truly sets Oken apart is his consistency. He shows up, he puts in the work, and he treats every session like it matters. That kind of dedication cannot be taught, and it comes from one place, a genuine love for music.",
          "That love was on full display right after the signing. Without waiting or slowing down, Oken went straight into action and delivered a brand-new single, proving that his commitment is as strong as his talent.",
        ],
      },
      {
        id: "aishia",
        heading: "\"Aishia\": A Hit Out of the Gate",
        paragraphs: [
          "That single is \"Aishia\", and it has quickly become a hit. Smooth, catchy, and full of heart, the song captures everything that makes Oken special and shows exactly why AB KAY Production was eager to bring him on board.",
          "If you haven't heard it yet, watch the official video below and hear it for yourself.",
        ],
        media: [
          { type: "youtube", src: "UJSLbnQpac4", alt: "Oken - Aishia (official video)" },
        ],
      },
      {
        id: "whats-next",
        heading: "What's Next",
        paragraphs: [
          "This is only the beginning. With Oken on board, AB KAY Production is excited about what is ahead: more music, more visuals, and more moments for fans to share.",
          "Follow Oken on Instagram (@oken_official), Facebook (OkenOfficial), and TikTok (@okensong) to stay up to date, and welcome him to the AB KAY family.",
        ],
      },
    ],
  },
  {
    id: "wimbum-cultural-gala-2026-recap",
    title: "A Night to Remember: The Wimbum Cultural Evening & Fundraiser Gala Recap",
    description:
      "The Wimbum Cultural Evening & Fundraiser Gala in Toronto was a resounding success. Relive the highlights with AB KAY artists Lexy and Mukolah MKL through exclusive photos and videos from the night.",
    image: `${RECAP_MEDIA_BASE}/photo-1.jpeg`,
    category: "Live Events",
    author: "AB KAY Productions",
    date: "2026-09-10",
    readTime: "4 min read",
    sections: [
      {
        id: "a-night-to-remember",
        heading: "A Night to Remember",
        paragraphs: [
          "On September 5th, Toronto's 55 Guided Court was transformed into a slice of home for the Wimbum community and friends from across North America. The Wimbum Cultural Evening & Fundraiser Gala, presented by Wimbum Canada, delivered exactly what it promised: culture, music, and a room full of people celebrating where they come from.",
          "AB KAY Music Production was proud to be part of that success, and the energy in the room made it clear that the gala did more than raise funds, it brought a community closer together.",
        ],
      },
      {
        id: "the-highlights",
        heading: "The Highlights",
        paragraphs: [
          "Guests arrived dressed in their finest soirée attire, and the night unfolded with dinner, dance, and performances that kept the dance floor full from the first song to the last. Lexy and Mukolah MKL brought the sound of home across the Atlantic, and the crowd's reaction said it all, this was the kind of night the Wimbum community had been waiting for.",
        ],
        media: [
          { type: "image", src: `${RECAP_MEDIA_BASE}/photo-1.jpeg`, alt: "Guests at the Wimbum Cultural Evening & Fundraiser Gala" },
          { type: "image", src: `${RECAP_MEDIA_BASE}/photo-2.jpeg`, alt: "Wimbum Cultural Evening & Fundraiser Gala celebration" },
        ],
      },
      {
        id: "on-stage",
        heading: "AB KAY On Stage",
        paragraphs: [
          "Lexy and Mukolah MKL each delivered performances that carried the spirit of the North West Region straight to Etobicoke, giving the community a genuine taste of home and reminding everyone in the room why nights like this matter.",
        ],
        media: [
          { type: "video", src: `${RECAP_MEDIA_BASE}/video-1.mp4`, alt: "Performance recap from the Wimbum Cultural Evening & Fundraiser Gala" },
          { type: "video", src: `${RECAP_MEDIA_BASE}/video-2.mp4`, alt: "Performance recap from the Wimbum Cultural Evening & Fundraiser Gala" },
        ],
      },
      {
        id: "a-shared-success",
        heading: "A Shared Success",
        paragraphs: [
          "Every ticket sold and every dollar raised goes back into Wimbum Canada's mandate, keeping the association's cultural dances, gala nights, and community gatherings alive for the next generation. Judging by the turnout and the energy on the night, that mandate is in good hands.",
          "AB KAY Music Production is grateful to have shared the stage with Lexy and Mukolah MKL, and even more grateful to Wimbum Canada for the invitation to be part of something this meaningful. Here's to the next gathering, and the next chance to celebrate home away from home.",
        ],
      },
    ],
  },
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
