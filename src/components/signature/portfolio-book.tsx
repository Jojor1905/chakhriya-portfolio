"use client";

import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type BookPage = {
  label: string;
  title: string;
  body?: string;
  details: string[];
};

type BookSpread = {
  name: string;
  left: BookPage;
  right: BookPage;
};

const TURN_DURATION = 640;
const SWIPE_DISTANCE = 44;

const spreads: BookSpread[] = [
  {
    name: "Cover",
    left: {
      label: "Portfolio",
      title: "Chakhriya Korada",
      body: "Product Designer & Creative Technologist",
      details: ["A small collection of thoughtful digital work."],
    },
    right: {
      label: "Opening note",
      title: "Five chapters, one practice.",
      details: ["Designing clear, useful experiences where technology feels human."],
    },
  },
  {
    name: "About",
    left: {
      label: "About",
      title: "Personal Statement",
      body: "A curious, detail-led designer making room for better everyday interactions.",
      details: [],
    },
    right: {
      label: "Education",
      title: "Bangkok University",
      details: ["Computer Science", "Cumulative GPA 3.69"],
    },
  },
  {
    name: "Internship",
    left: {
      label: "Internship",
      title: "Allmass Idea",
      details: ["18 May – 7 August 2026"],
    },
    right: {
      label: "Selected work",
      title: "Applied AI products",
      details: ["KombatX.ai", "AI Skin Analysis"],
    },
  },
  {
    name: "Selected Projects",
    left: {
      label: "Selected Projects",
      title: "Designed for real movement.",
      details: ["Shade Route Map", "My Day App"],
    },
    right: {
      label: "In progress",
      title: "Sketch2Spec",
      body: "A concise look at product thinking, systems, and creative technology.",
      details: [],
    },
  },
  {
    name: "Contact",
    left: {
      label: "Contact",
      title: "Let’s make something useful.",
      details: ["Email", "LinkedIn", "Phone"],
    },
    right: {
      label: "End of book",
      title: "Thank you for reading.",
      body: "This is a prototype chapter—made to explore a more tactile portfolio experience.",
      details: [],
    },
  },
];

function PageContent({ page, side }: { page: BookPage; side: "left" | "right" }) {
  return (
    <div className={`portfolio-book__page-content portfolio-book__page-content--${side}`}>
      <p className="portfolio-book__page-label">{page.label}</p>
      <h2>{page.title}</h2>
      {page.body ? <p className="portfolio-book__page-body">{page.body}</p> : null}
      {page.details.length ? (
        <ul className="portfolio-book__page-details">
          {page.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      ) : null}
      <span className="portfolio-book__folio" aria-hidden="true">
        {side === "left" ? "—" : "01"}
      </span>
    </div>
  );
}

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return reducedMotion;
}

export function PortfolioBook() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSpread, setActiveSpread] = useState(0);
  const [isTurning, setIsTurning] = useState(false);
  const [turnDirection, setTurnDirection] = useState<"next" | "previous" | null>(null);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const reducedMotion = useReducedMotion();
  const spread = spreads[activeSpread];
  const isFirstSpread = activeSpread === 0;
  const isLastSpread = activeSpread === spreads.length - 1;

  const closeBook = useCallback(() => {
    if (isTurning) return;
    setIsOpen(false);
    setActiveSpread(0);
  }, [isTurning]);

  const turnTo = useCallback((nextSpread: number) => {
    if (
      isTurning ||
      nextSpread < 0 ||
      nextSpread >= spreads.length ||
      nextSpread === activeSpread
    ) {
      return;
    }

    const direction = nextSpread > activeSpread ? "next" : "previous";
    setTurnDirection(direction);

    if (reducedMotion) {
      setActiveSpread(nextSpread);
      setTurnDirection(null);
      return;
    }

    setIsTurning(true);
    window.setTimeout(() => {
      setActiveSpread(nextSpread);
      setIsTurning(false);
      setTurnDirection(null);
    }, TURN_DURATION);
  }, [activeSpread, isTurning, reducedMotion]);

  const handleNext = useCallback(() => {
    if (isLastSpread) {
      closeBook();
      return;
    }

    turnTo(activeSpread + 1);
  }, [activeSpread, closeBook, isLastSpread, turnTo]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBook();
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") turnTo(activeSpread - 1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeSpread, closeBook, handleNext, isOpen, turnTo]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    swipeStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    const start = swipeStart.current;
    swipeStart.current = null;

    if (!start || isTurning) return;

    const horizontalDistance = event.clientX - start.x;
    const verticalDistance = event.clientY - start.y;

    if (
      Math.abs(horizontalDistance) < SWIPE_DISTANCE ||
      Math.abs(horizontalDistance) <= Math.abs(verticalDistance)
    ) {
      return;
    }

    if (horizontalDistance < 0) handleNext();
    else turnTo(activeSpread - 1);
  };

  return (
    <section className="portfolio-book" aria-label="Interactive portfolio book prototype">
      <p className="portfolio-book__eyebrow">Signature interaction study</p>
      <div className="portfolio-book__heading">
        <h1>A portfolio you can hold.</h1>
        <p>An isolated concept for a tactile, editorial project introduction.</p>
      </div>

      <div
        className="portfolio-book__scene"
        style={{ "--book-turn-duration": `${TURN_DURATION}ms` } as CSSProperties}
        data-open={isOpen}
        data-turning={isTurning || undefined}
        data-turn-direction={turnDirection || undefined}
        data-reduced-motion={reducedMotion || undefined}
        onPointerDown={isOpen ? handlePointerDown : undefined}
        onPointerUp={isOpen ? handlePointerUp : undefined}
      >
        <div className="portfolio-book__ambient" aria-hidden="true" />
        <div className="portfolio-book__volume">
          <div className="portfolio-book__pages" aria-live="polite" aria-atomic="true">
            <article className="portfolio-book__page portfolio-book__page--left">
              <PageContent page={spread.left} side="left" />
            </article>
            <article className="portfolio-book__page portfolio-book__page--right">
              <PageContent page={spread.right} side="right" />
            </article>
            <article className="portfolio-book__mobile-page">
              <PageContent page={spread.left} side="left" />
              <div className="portfolio-book__mobile-rule" aria-hidden="true" />
              <PageContent page={spread.right} side="right" />
            </article>
            <span className="sr-only">
              Spread {activeSpread + 1} of {spreads.length}: {spread.name}
            </span>
          </div>

          <button
            className="portfolio-book__cover"
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open Chakhriya Korada’s portfolio book"
          >
            <span className="portfolio-book__cover-inner">
              <span className="portfolio-book__cover-kicker">Portfolio / 2026</span>
              <strong>Chakhriya<br />Korada</strong>
              <span>Product Designer<br />&amp; Creative Technologist</span>
              <i aria-hidden="true" />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div className="portfolio-book__controls">
            <button
              className="portfolio-book__control portfolio-book__control--previous"
              type="button"
              onClick={() => turnTo(activeSpread - 1)}
              disabled={isFirstSpread || isTurning}
              aria-label="Previous spread"
            >
              <span aria-hidden="true">←</span>
            </button>
            <p aria-hidden="true">{String(activeSpread + 1).padStart(2, "0")} / {String(spreads.length).padStart(2, "0")}</p>
            <button
              className="portfolio-book__control portfolio-book__control--next"
              type="button"
              onClick={handleNext}
              disabled={isTurning}
              aria-label={isLastSpread ? "Close portfolio book" : "Next spread"}
            >
              <span aria-hidden="true">{isLastSpread ? "×" : "→"}</span>
            </button>
            <button
              className="portfolio-book__close"
              type="button"
              onClick={closeBook}
              disabled={isTurning}
              aria-label="Close portfolio book"
            >
              Close book
            </button>
          </div>
        ) : (
          <p className="portfolio-book__prompt">Select the cover to open</p>
        )}

        {isOpen ? (
          <>
            <button
              className="portfolio-book__edge portfolio-book__edge--previous"
              type="button"
              disabled={isFirstSpread || isTurning}
              onClick={() => turnTo(activeSpread - 1)}
              aria-label="Turn to previous spread"
            />
            <button
              className="portfolio-book__edge portfolio-book__edge--next"
              type="button"
              disabled={isTurning}
              onClick={handleNext}
              aria-label={isLastSpread ? "Close portfolio book" : "Turn to next spread"}
            />
          </>
        ) : null}
      </div>
    </section>
  );
}
