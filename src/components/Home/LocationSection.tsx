"use client";

import React, { useMemo } from "react";
import SubHeader from "@/components/SubHeader";
import dynamic from "next/dynamic";

const LocationSection = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <section>
      <SubHeader
        backgroundImg="warehouseBg.png"
        title="Encuentra nuestro punto físico"
        variant="section"
      />
      <Map />
    </section>
  );
};

export default LocationSection;
