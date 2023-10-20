import { Product, ProductLineIds, ProductLineLabels } from "types/products";

type ProductMap = {
  [key in ProductLineIds]: Product[];
};

export const PRODUCTS: ProductMap = {
  [ProductLineIds.Putty]: [
    {
      productImg: "putty-polifibra.png",
      name: "Polifibra",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
    {
      productImg: "putty-kross.png",
      name: "Kross",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
    {
      productImg: "putty-rojarapida.png",
      name: "Roja Rápida",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
    {
      productImg: "putty-1a.png",
      name: "Nueva 1A",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
    {
      productImg: "putty-poliflex.png",
      name: "Poliflex",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
    {
      productImg: "putty-rosada.png",
      name: "Rosada",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
    {
      productImg: "putty-premium.png",
      name: "Premium",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
    {
      productImg: "putty-rocadura.png",
      name: "Roca Dura",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
    {
      productImg: "putty-blanca.png",
      name: "Blanca",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
    {
      productImg: "putty-2klite.png",
      name: "2k-Lite",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
  ],
  [ProductLineIds.Architectural]: [
    {
      productImg: "putty-premium.png",
      name: "Arquitectónica 1",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
    {
      productImg: "putty-premium.png",
      name: "Arquitectónica 2",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
  ],
  [ProductLineIds.Waterproofing]: [
    {
      productImg: "putty-premium.png",
      name: "Impermeabilizante 1",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
    {
      productImg: "putty-premium.png",
      name: "Impermeabilizante 2",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
    {
      productImg: "putty-premium.png",
      name: "Impermeabilizante 3",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
  ],
};

export const PRODUCT_LINES = [
  {
    backgroundImg: "puttyLineBg.png",
    id: ProductLineIds.Putty,
    label: ProductLineLabels.Putty,
    hasDeWord: true,
  },
  {
    backgroundImg: "architecturalLineBg.png",
    id: ProductLineIds.Architectural,
    label: ProductLineLabels.Architectural,
  },
  {
    backgroundImg: "waterproofingLineBg.png",
    id: ProductLineIds.Waterproofing,
    label: ProductLineLabels.Waterproofing,
  },
];
