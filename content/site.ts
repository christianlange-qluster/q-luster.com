/**
 * Single source of truth for all site copy and data.
 * Edit here to update the website content; no other file needs to change.
 */

export const site = {
  brand: {
    name: "QLuster Photonics",
    short: "QLuster",
    tagline: "Scalable quantum interconnects",
  },

  nav: [
    { label: "Problem", href: "#problem" },
    { label: "Product", href: "#product" },
    { label: "Market", href: "#market" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],

  contact: {
    email: "Christian.Lange@q-luster.com",
    ctaLabel: "Contact",
  },

  hero: {
    headline: ["Scalable", "Quantum Interconnects."],
    sub:
      "Atom-compatible, chip-integrated single-photon emitters for quantum networking and distributed quantum computing.",
    primaryCta: { label: "Get in touch", href: "#contact" },
    secondaryCta: { label: "See the breakthrough", href: "#product" },
  },

  problem: {
    title:
      "Quantum technology cannot scale without high-speed interconnects.",
    body: [
      "Quantum computers are progressing rapidly, but quantum interconnect technology is lagging far behind.",
      "The ability to transfer quantum information unlocks quantum datacenters, secure communications, and distributed sensing.",
    ],
  },

  product: {
    title: "An on-demand photon source for quantum interconnects.",
    problem: {
      title: "Today",
      body:
        "Current methods for distributing quantum information are slow and low fidelity.",
    },
    solution: {
      title: "QLuster",
      body:
        "QLuster engineers single-photon sources for 1000× faster data transfer to unlock quantum technologies.",
    },
    linker: {
      title:
        "The photon source: the building block of the quantum network.",
      body:
        "Every quantum link, between processors, cities, and satellites, starts with a photon source.",
    },
    capabilities: [
      {
        title: "On-demand photon emission",
        body:
          "Deterministic, high-purity, and high-indistinguishability photons.",
      },
      {
        title: "Atom-compatible",
        body:
          "Narrowband, 780 nm photons matched to the Rb D₂ transition — the workhorse of the neutral-atom ecosystem.",
      },
      {
        title: "Scalable",
        body:
          "Chip-integrated, fiber-coupled, small footprint.",
      },
    ],
  },

  market: {
    title:
      "A scalable single-photon source is a primary enabler of quantum technologies.",
    points: [
      {
        title: "Quantum datacenters",
        body:
          "Connect quantum processors into systems large enough to deliver real economic value — drug discovery, materials, optimization, AI.",
      },
      {
        title: "Quantum networking",
        body:
          "The physical layer for quantum key distribution, distributed quantum computing, and the long-haul quantum internet.",
      },
      {
        title: "Distributed sensing",
        body:
          "Entangled photons for next-generation imaging, navigation, and precision measurement beyond the classical limit.",
      },
    ],
  },

  team: {
    title: "Team",
    founders: [
      {
        name: "Dr. Christian M. Lange",
        title: "Founder & CEO",
        image: "/images/christian.jpg",
        bio:
          "Expert in solid-state photon emitters and nanophotonics. Received a PhD in Physics from Purdue University.",
      },
      {
        name: "Dr. Jonathan D. Hood",
        title: "Founder & CTO",
        image: "/images/jonathan.jpg",
        bio:
          "Expert in cold atoms and nanophotonics. Faculty in the departments of Physics and Chemistry at Purdue University.",
      },
    ],
  },

  contactSection: {
    title: "Let's build the quantum internet.",
  },
} as const;

export type Site = typeof site;
