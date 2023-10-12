export enum ProductLineIds {
  Putty = "pl-0",
  Architectural = "pl-1",
  Waterproofing = "pl-2",
}

export enum ProductLineLabels {
  Putty = "Masillas",
  Architectural = "Arquitectónica",
  Waterproofing = "Impermeabilizante",
}

export type Product = {
  productImg: string;
  name: string;
  description: string;
};
