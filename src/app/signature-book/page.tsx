import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioBook } from "@/components/signature/portfolio-book";

export const metadata: Metadata = {
  title: "Portfolio Book Prototype",
  description: "An isolated interactive portfolio-book prototype.",
};

export default function SignatureBookPage() {
  return (
    <main className="signature-book-preview">
      <Link className="signature-book-preview__back" href="/">
        <span aria-hidden="true">←</span> Back to portfolio
      </Link>
      <PortfolioBook />
    </main>
  );
}
