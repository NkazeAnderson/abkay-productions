<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# ABK Productions - Project Overview

ABK Productions is a premium 3D-integrated website designed to showcase creative works through immersive visual storytelling. The project combines high-fidelity 3D backgrounds with smooth, scroll-driven UI overlays.

## 🛠 Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS 4
- **3D Engine:** Three.js with React Three Fiber (R3F)
- **Animation:** GSAP (ScrollTrigger)
- **Language:** TypeScript

## 📁 Proposed File Structure
```text
/
├── app/                  # Next.js App Router (Layouts & Pages)
│   ├── layout.tsx        # Global layout & Providers
│   └── page.tsx          # Main scroll-driven landing page
├── components/           # React Components
│   ├── canvas/           # 3D Scene components (Scene, Models, Lights)
│   ├── overlay/          # HTML/Tailwind content layers
│   └── ui/               # Reusable UI primitives (shadcn/ui)
├── hooks/                # Custom hooks (GSAP, Scroll status)
├── lib/                  # Utilities and GSAP/3D configs
├── public/               # Static assets (3D models, textures, images)
└── types/                # Global TypeScript definitions
```

## 📦 Useful Packages to Install
- `three` & `@types/three`: Core 3D library.
- `@react-three/fiber`: React bridge for Three.js.
- `@react-three/drei`: Useful helpers and abstractions for R3F.
- `gsap`: Animation engine for complex timelines.
- `lenis`: Smooth scrolling (modern package, includes React bindings in `lenis/react`).
- `clsx` & `tailwind-merge`: Class management (already installed).

## 🚀 How the App Works
1. **Background Layer (3D Canvas):**
   A fixed `Canvas` component from R3F sits behind the content. It contains the 3D environment, models, and lights.
   
2. **Content Layer (Tailwind/GSAP):**
   The main scrollable container holds HTML content styled with Tailwind. This layer is transparent or layered to let the 3D background show through.

3. **Scroll Synchronization:**
   GSAP's `ScrollTrigger` is used to track the user's scroll progress. This progress is mapped to:
   - **DOM Animations:** Text fades, image reveals, and staggered entrances.
   - **3D Transformations:** Rotating models, moving the camera, or changing materials in the 3D scene based on the current scroll section.

4. **Smooth Experience:**
   Lenis (or a similar smooth-scroll library) ensures that the scrolling feels buttery smooth, which is critical for maintaining the illusion of the 3D/UI synchronization.

