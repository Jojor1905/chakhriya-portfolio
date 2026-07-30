import type { Metadata } from "next";
import { HomePage } from "@/components/homepage";
import { PortfolioLoader } from "@/components/loading/portfolio-loader";
import { en } from "@/content/en";

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

export default function Page() {
  return <><HomePage dictionary={en} /><PortfolioLoader /></>;
}
