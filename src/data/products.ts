// RBJT Products - Automotive Connectors & Terminals
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications?: string;
  minOrder: string;
  leadTime: string;
  image: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  items: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "terminals",
    name: "Wire Terminals",
    description: "High-quality crimp terminals for reliable wire connections. Copper alloy, tin or gold plated.",
    items: [
      { id: "term-001", name: "Ring Terminal - Insulated", category: "Terminals", description: "Closed ring tongue, vinyl insulated. Wire strip: 0.5-6mm². Color coded.", specifications: "22-10 AWG", minOrder: "1,000 pcs", leadTime: "7 days", image: "/images/products/term-ring-ins.jpg" },
      { id: "term-002", name: "Ring Terminal - Non-Insulated", category: "Terminals", description: "Bare copper ring terminal. For solderless connection.", specifications: "22-8 AWG", minOrder: "1,000 pcs", leadTime: "7 days", image: "/images/products/term-ring-bare.jpg" },
      { id: "term-003", name: "Spade Terminal - Fork Type", category: "Terminals", description: "Fork/spade tongue, insulated. Easy insertion/removal.", specifications: "22-10 AWG", minOrder: "1,000 pcs", leadTime: "7 days", image: "/images/products/term-spade.jpg" },
      { id: "term-004", name: "Bullet Terminal - Male/Female", category: "Terminals", description: "Quick disconnect bullet terminal set. 3.9mm/4.8mm/6.3mm.", specifications: "22-14 AWG", minOrder: "1,000 pcs", leadTime: "7 days", image: "/images/products/term-bullet.jpg" },
      { id: "term-005", name: "Butt Connector - Inline", category: "Terminals", description: "Inline splice connector. Seamless connection between two wires.", specifications: "22-10 AWG", minOrder: "1,000 pcs", leadTime: "7 days", image: "/images/products/term-butt.jpg" },
      { id: "term-006", name: "Flag Terminal - 90° Angle", category: "Terminals", description: "Right-angle flag terminal. For side-entry connections.", specifications: "22-14 AWG", minOrder: "1,000 pcs", leadTime: "10 days", image: "/images/products/term-flag.jpg" },
      { id: "term-007", name: "Pin Terminal - Straight", category: "Terminals", description: "Male pin for PCB mount. Various pin lengths.", specifications: "0.5-2.5mm²", minOrder: "2,000 pcs", leadTime: "10 days", image: "/images/products/term-pin.jpg" },
      { id: "term-008", name: "Tab Terminal - Locking", category: "Terminals", description: "Locking tab with lance. Secure fit in housing.", specifications: "22-14 AWG", minOrder: "1,000 pcs", leadTime: "7 days", image: "/images/products/term-tab.jpg" },
    ],
  },
  {
    id: "housings",
    name: "Connector Housings",
    description: "Durable plastic connector housings. PA66, PBT materials. Various pin configurations from 2 to 36 positions.",
    items: [
      { id: "hous-001", name: "Housing 2-Way - Plug", category: "Housings", description: "2-position plug housing. 2.54mm pitch.", specifications: "2P", minOrder: "500 pcs", leadTime: "10 days", image: "/images/products/hous-2p.jpg" },
      { id: "hous-002", name: "Housing 4-Way - Plug/J receptacle", category: "Housings", description: "4-position with locking. Weather-sealed options.", specifications: "4P", minOrder: "500 pcs", leadTime: "10 days", image: "/images/products/hous-4p.jpg" },
      { id: "hous-003", name: "Housing 8-Way - Sealed", category: "Housings", description: "8-position sealed connector. IP67 rated.", specifications: "8P", minOrder: "200 pcs", leadTime: "15 days", image: "/images/products/hous-8p.jpg" },
      { id: "hous-004", name: "Housing 12-Way - Multi-Row", category: "Housings", description: "12-position dual-row. 1.5mm or 2.8mm terminals.", specifications: "12P (2x6)", minOrder: "200 pcs", leadTime: "15 days", image: "/images/products/hous-12p.jpg" },
      { id: "hous-005", name: "Housing 20-Way - High-Density", category: "Housings", description: "20-position push-lock. Automotive grade.", specifications: "20P", minOrder: "200 pcs", leadTime: "15 days", image: "/images/products/hous-20p.jpg" },
      { id: "hous-006", name: "Housing 36-Way - Board-To-Board", category: "Housings", description: "High-density header. PCB mounting.", specifications: "36P", minOrder: "100 pcs", leadTime: "20 days", image: "/images/products/hous-36p.jpg" },
    ],
  },
  {
    id: "relays",
    name: "Relay Sockets",
    description: "Relay sockets and holders for automotive electrical systems. Standard 5-pin and 4-pin configurations.",
    items: [
      { id: "rel-001", name: "Relay Socket 5-Pin - PCB Mount", category: "Relays", description: "Standard 5-pin relay socket. PCB mount with 4.8mm faston.", specifications: "SPST/5P", minOrder: "500 pcs", leadTime: "7 days", image: "/images/products/rel-5pin.jpg" },
      { id: "rel-002", name: "Relay Socket 4-Pin - Plug-In", category: "Relays", description: "4-pin socket. Automotive mini relay style.", specifications: "SPST/4P", minOrder: "500 pcs", leadTime: "7 days", image: "/images/products/rel-4pin.jpg" },
      { id: "rel-003", name: "Relay Holder - Surface Mount", category: "Relays", description: "Clip-on holder for standard cube relay. DIN rail option.", specifications: "Universal", minOrder: "200 pcs", leadTime: "10 days", image: "/images/products/rel-holder.jpg" },
      { id: "rel-004", name: "Relay Module - Multi-Relay", category: "Relays", description: "Multi-relay module for truck/industrial. 4-position bank.", specifications: "4x SPST", minOrder: "100 pcs", leadTime: "15 days", image: "/images/products/rel-module.jpg" },
    ],
  },
  {
    id: "sealed",
    name: "Sealed Connectors",
    description: "IP67/IP68 waterproof connectors. Silicone gaskets, corrosion resistant for harsh environments.",
    items: [
      { id: "seal-001", name: "Sealed Connector 2-Way", category: "Sealed", description: "IP68 rated 2-position plug. Direct military style.", specifications: "IP68, 2P", minOrder: "200 pcs", leadTime: "15 days", image: "/images/products/seal-2p.jpg" },
      { id: "seal-002", name: "Sealed Connector 4-Way", category: "Sealed", description: "4-position in-line sealed. Silicone seal ring.", specifications: "IP67, 4P", minOrder: "200 pcs", leadTime: "15 days", image: "/images/products/seal-4p.jpg" },
      { id: "seal-003", name: "Sealed Connector 8-Way", category: "Sealed", description: "8-way rectangular sealed. Multiple lock bars.", specifications: "IP67, 8P", minOrder: "100 pcs", leadTime: "20 days", image: "/images/products/seal-8p.jpg" },
      { id: "seal-004", name: "Deutsch-Style Connector", category: "Sealed", description: "Deutsch DT/DTM series compatible. Wedgelock included.", specifications: "12-20 AWG", minOrder: "200 pcs", leadTime: "15 days", image: "/images/products/seal-deutsch.jpg" },
      { id: "seal-005", name: "Metri-Pack Connector", category: "Sealed", description: "Delphi Metri-Pack series. Weather-pack style.", specifications: "150/630 series", minOrder: "200 pcs", leadTime: "15 days", image: "/images/products/seal-metri.jpg" },
      { id: "seal-006", name: " Deutsch/Jae Connector", category: "Sealed", description: "Deutsch DRC series. Multi-cavity sealed.", specifications: "24-70P", minOrder: "100 pcs", leadTime: "20 days", image: "/images/products/seal-drc.jpg" },
    ],
  },
  {
    id: "wiring",
    name: "Wiring Harnesses",
    description: "Custom wire harnesses and cable assemblies. Pre-terminated with connectors.",
    items: [
      { id: "harn-001", name: "Engine Harness - Custom", category: "Harnesses", description: "Complete engine bay wiring. High-temp PVC sheathing.", specifications: "Custom", minOrder: "10 pcs", leadTime: "30 days", image: "/images/products/harn-engine.jpg" },
      { id: "harn-002", name: "Cabin Harness - Interior", category: "Harnesses", description: "Interior wiring harness. Dashboard/switch connections.", specifications: "Custom", minOrder: "20 pcs", leadTime: "25 days", image: "/images/products/harn-cabin.jpg" },
      { id: "harn-003", name: "Battery Cable - Flexible", category: "Harnesses", description: "Olex/battery cables. 50mm², flexible copper.", specifications: "50mm²", minOrder: "50 pcs", leadTime: "15 days", image: "/images/products/harn-battery.jpg" },
      { id: "harn-004", name: "CAN Bus Harness", category: "Harnesses", description: "CAN bus harness with twisted pair. 120Ω impedance.", specifications: "Custom", minOrder: "50 pcs", leadTime: "20 days", image: "/images/products/harn-can.jpg" },
      { id: "harn-005", name: "Lighting Harness", category: "Harnesses", description: "Headlight/taillight harness. Sealed connectors.", specifications: "Custom", minOrder: "20 pcs", leadTime: "20 days", image: "/images/products/harn-light.jpg" },
    ],
  },
  {
    id: "accessories",
    name: "Accessories & Tools",
    description: "Crimping tools, wire boots, grommets, and assembly accessories.",
    items: [
      { id: "acc-001", name: "Crimping Tool - Ratchet", category: "Accessories", description: "Professional ratchet crimper. For insulated/non-insulated terminals.", specifications: "24-10 AWG", minOrder: "10 pcs", leadTime: "7 days", image: "/images/products/tool-crimp.jpg" },
      { id: "acc-002", name: "Wire Boot - PVC", category: "Accessories", description: "Wire entry boot/grommet. Flexible PVC.", specifications: "Various", minOrder: "1,000 pcs", leadTime: "7 days", image: "/images/products/acc-boot.jpg" },
      { id: "acc-003", name: "Cable Tie - Nylon", category: "Accessories", description: "Standard cable ties. UV-resistant for outdoor.", specifications: "200mm", minOrder: "1,000 pcs", leadTime: "5 days", image: "/images/products/acc-tie.jpg" },
      { id: "acc-004", name: "Heat Shrink Tubing", category: "Accessories", description: "Adhesive-lined heat shrink. Various colors/sizes.", specifications: "3-25mm", minOrder: "100 m", leadTime: "7 days", image: "/images/products/acc-heat.jpg" },
      { id: "acc-005", name: "Grommet - Rubber", category: "Accessories", description: "Rubber grommet for panel pass-through. Oil resistant.", specifications: "Various", minOrder: "500 pcs", leadTime: "7 days", image: "/images/products/acc-grommet.jpg" },
    ],
  },
];