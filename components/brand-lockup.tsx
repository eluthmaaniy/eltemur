import Image from "next/image";
import Link from "next/link";

const horizontalLogo = {
  src: "/brand/logo-horizontal.png",
  width: 1400,
  height: 192,
};

const mark = {
  src: "/brand/mark.png",
  width: 512,
  height: 512,
};

type BrandLinkProps = {
  placement?: "header" | "footer";
};

export function BrandLink({ placement = "footer" }: BrandLinkProps) {
  return (
    <Link
      href="/"
      aria-label="Eltemur Zentra Studio"
      className="inline-flex items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal"
    >
      {placement === "header" ? (
        <Image
          src={mark.src}
          alt=""
          width={mark.width}
          height={mark.height}
          priority
          className="h-9 w-9 lg:hidden"
        />
      ) : null}
      <Image
        src={horizontalLogo.src}
        alt=""
        width={horizontalLogo.width}
        height={horizontalLogo.height}
        priority={placement === "header"}
        className={
          placement === "header" ? "hidden h-10 w-auto lg:block" : "h-9 w-auto sm:h-10"
        }
      />
    </Link>
  );
}
