import type { Metadata } from "next";
import { HomePage } from "@/components/homepage";
import { en } from "@/content/en";

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

export default function Page() {
  return <HomePage dictionary={en} />;
}
