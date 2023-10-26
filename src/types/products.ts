import { ReactNode } from "react";

export enum ProductLineIds {
  Complementary = "pl-0",
  Architectural = "pl-1",
  Automotive = "pl-2",
}

export enum ProductLineLabels {
  Complementary = "Complementaria",
  Architectural = "Arquitectónica",
  Automotive = "Automotriz",
}

export type Product = {
  productImg: string;
  name: string;
  description: string;
  instructions?: ReactNode;
};
