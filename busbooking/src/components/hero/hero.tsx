"use client";

import { PRODUCTS_IN_HERO } from "@/lib/utils";
import { HeroParallax } from "../magicui/heroui";

export function HeroParallaxDemo() {
  return <HeroParallax products={PRODUCTS_IN_HERO} />;
}

