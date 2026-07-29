"use client";

import { useRouter } from "next/navigation";
import { getSafeInternalPath } from "@/lib/navigation";

type BackLinkProps = {
  fallbackUrl?: string;
  label?: string;
  className?: string;
};

export function BackLink({
  fallbackUrl = "/",
  label = "Back",
  className,
}: BackLinkProps) {
  const router = useRouter();

  function handleBack() {
    const query = new URLSearchParams(window.location.search);
    const fallback = getSafeInternalPath(
      query.get("from"),
      getSafeInternalPath(fallbackUrl),
    );

    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallback);
  }

  return (
    <button className={className} type="button" onClick={handleBack}>
      <span aria-hidden="true">←</span> {label}
    </button>
  );
}
