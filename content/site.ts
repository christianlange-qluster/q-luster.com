/**
 * Single source of truth for all site copy and data.
 * Edit here to update the website content; no other file needs to change.
 */

export const site = {
  brand: {
    name: "QLuster Photonics",
    short: "QLuster",
    tagline: "The Photon Source for the Quantum Age",
  },

  contact: {
    email: "Christian.Lange@q-luster.com",
    phone: "(765) 476-3357",
    phoneHref: "tel:+17654763357",
  },

  hero: {
    eyebrow: "Quantum Networking · Photonic Interconnects",
    headline: ["The Photon Source for the", "Quantum Age."],
    sub:
      "Atom-compatible, chip-integrated single-photon emitters — the missing interconnect for scalable quantum networks.",
    primaryCta: { label: "Get in touch", href: "#contact" },
    secondaryCta: { label: "See the breakthrough", href: "#breakthrough" },
  },

  bottleneck: {
    eyebrow: "The Bottleneck",
    title: "Quantum processors are scaling. Interconnects aren't.",
    body: [
      "The quantum-computing boom is real: qubit counts are climbing, fidelities are improving, and processors are racing toward fault tolerance.",
      "But to link those processors into datacenters, secure networks, and distributed sensors, you need quantum interconnects — and today there are none that work at scale.",
    ],
    callout: {
      title: "The Mainframe Problem",
      body:
        "Quantum computing is where classical computing would be without high-bandwidth cables: powerful processors with no way to talk to each other.",
    },
  },

  breakthrough: {
    eyebrow: "Our Breakthrough",
    title: "Deterministic, on-demand photons. 1,000× faster remote entanglement.",
    problem: {
      title: "Today's approach",
      body:
        "Quantum networks rely on attenuated lasers — emitting an uncertain number of photons per pulse. The result: low success rates, errors, and entanglement protocols that don't scale.",
    },
    solution: {
      title: "QLuster's source",
      body:
        "A scalable, push-button single-photon source: one photon, on demand, tuned to the exact wavelength neutral-atom qubits need. The first piece of infrastructure built for the rubidium ecosystem.",
    },
    pillars: [
      { label: "Atom-compatible", value: "780 nm · Rb D₂ tuned" },
      { label: "Chip-integrated", value: "Si₃N₄ + TFLN photonics" },
      { label: "Scalable", value: "Push-button operation" },
    ],
  },

  whyNow: {
    eyebrow: "Why Now",
    title: "The window is open — right now.",
    sub:
      "Two decades of quantum infrastructure has matured. The physics breakthrough just happened. Fault tolerance is on the horizon.",
    steps: [
      {
        period: "2000 – 2020",
        heading: "Foundations",
        body:
          "Single-photon detection, cryogenics, and on-chip photonics reach maturity.",
        current: false,
      },
      {
        period: "2025 – 2026",
        heading: "Breakthrough",
        body:
          "QLuster demonstrates the first atom-compatible, nanophotonic-integrated photon emitter.",
        current: true,
      },
      {
        period: "2027 – 2029",
        heading: "Fault Tolerance",
        body:
          "Quantum processors approach fault tolerance; remote entanglement becomes the dominant bottleneck.",
        current: false,
      },
      {
        period: "2030 +",
        heading: "Quantum Datacenters",
        body:
          "Large-scale quantum datacenters dominate; photonic interconnects become critical infrastructure.",
        current: false,
      },
    ],
  },

  product: {
    eyebrow: "The Product",
    title: "Plug-and-play photon source.",
    sub: "The only single-photon source purpose-built for the rubidium ecosystem.",
    specs: [
      { label: "Photon purity", value: "99.9", unit: "%" },
      { label: "Photon rate", value: "10", unit: "MHz" },
      { label: "Indistinguishability", value: "95", unit: "%" },
      { label: "Tunability around Rb D₂", value: "±50", unit: "GHz" },
      { label: "Emission bandwidth", value: "35", unit: "MHz" },
      { label: "Fiber-coupled outputs", value: "10×", unit: "channels" },
    ],
    footnote:
      "Existing single-photon sources operate at telecom wavelengths. None are compatible with neutral-atom platforms at 780 nm. QLuster is the only source built for the rubidium quantum stack.",
  },

  team: {
    eyebrow: "The Founders",
    title: "Built by the only group in the world combining these fields.",
    sub:
      "Atomic quantum computing meets solid-state single-photon emitters — a combination no other team has assembled.",
    founders: [
      {
        name: "Dr. Christian M. Lange",
        title: "Founder & CEO",
        image: "/images/christian.jpg",
        bio:
          "Postdoctoral researcher in photon emitters and nanophotonics at Purdue. As a PhD, built a new experiment from an empty lab into a groundbreaking photon-source technology in four years, with publications in Nature Physics and ACS Photonics.",
      },
      {
        name: "Dr. Jonathan D. Hood",
        title: "Founder & CTO",
        image: "/images/jonathan.jpg",
        bio:
          "Expert in neutral atoms, nanophotonics, and solid-state single-photon emitters. Caltech PhD with the Kimble group, Harvard postdoc, faculty at Purdue. Publications in Nature and Science.",
      },
    ],
  },

  contactSection: {
    eyebrow: "Contact",
    title: "Let's build the quantum internet.",
    sub: "Reach out directly — we read every message.",
  },
} as const;

export type Site = typeof site;
