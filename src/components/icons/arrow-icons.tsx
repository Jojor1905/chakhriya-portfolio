import type { SVGProps } from "react";

type ArrowIconProps = SVGProps<SVGSVGElement>;

function ArrowIcon({ children, ...props }: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRightIcon(props: ArrowIconProps) {
  return <ArrowIcon {...props}><path d="M7 17 17 7M8 7h9v9" /></ArrowIcon>;
}

export function ArrowLeftIcon(props: ArrowIconProps) {
  return <ArrowIcon {...props}><path d="M19 12H5M12 19l-7-7 7-7" /></ArrowIcon>;
}

export function ArrowRightIcon(props: ArrowIconProps) {
  return <ArrowIcon {...props}><path d="M5 12h14M12 5l7 7-7 7" /></ArrowIcon>;
}

export function ArrowDownIcon(props: ArrowIconProps) {
  return <ArrowIcon {...props}><path d="M12 5v14m-7-7 7 7 7-7" /></ArrowIcon>;
}
