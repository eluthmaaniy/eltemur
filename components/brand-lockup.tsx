import Image from "next/image";
import Link from "next/link";

const horizontalLogo = {
  src: "/brand/logo-horizontal.png",
  width: 1400,
  height: 192,
};

type BrandLinkProps = {
  placement?: "header" | "footer";
};

export function BrandLink({ placement = "footer" }: BrandLinkProps) {
  return (
    <Link
      href="/"
      aria-label="Eltemur Zentra Studio"
      className="inline-flex shrink-0 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal"
    >
      <Image
        src={horizontalLogo.src}
        alt=""
        width={horizontalLogo.width}
        height={horizontalLogo.height}
        priority={placement === "header"}
        className={
          placement === "header"
            ? "h-auto w-[160px] lg:h-10 lg:w-auto"
            : "h-9 w-auto sm:h-10"
        }
      />
    </Link>
  );
}
