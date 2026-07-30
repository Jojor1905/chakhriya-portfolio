import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons/arrow-icons";
import { PortfolioBook } from "@/components/signature/portfolio-book";

export const metadata: Metadata = {
  title: "Portfolio Book Prototype",
  description: "An isolated interactive portfolio-book prototype.",
};

export default function SignatureBookPage() {
  return (
    <main className="signature-book-preview">
      <Link className="signature-book-preview__back" href="/">
        <ArrowLeftIcon className="arrow-icon" aria-hidden="true" /> Back to portfolio
      </Link>
      <PortfolioBook />
    </main>
  );
}
