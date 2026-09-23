import Link from "next/link";

export function EnquiryCta({
  heading = "Start a project",
  text = "Tell Eltemur Zentra Studio what you want to build, who it is for, and where you want to start.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="mt-12 border-t border-line pt-8">
      <h2 className="text-xl font-bold text-navy">{heading}</h2>
      <p className="mt-3 max-w-2xl text-base leading-7 text-muted">{text}</p>
      <Link
        href="/contact"
        className="mt-5 inline-flex items-center justify-center rounded-md bg-royal px-4 py-2.5 text-sm font-semibold text-white hover:bg-royal-dark"
      >
        Start a Project
      </Link>
    </section>
  );
}
