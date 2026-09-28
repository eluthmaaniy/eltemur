import Image from "next/image";
import type { Project } from "@/data/projects";

const sizes = {
  sm: "h-11 w-11",
  md: "h-14 w-14",
} as const;

export function ProjectMark({
  project,
  size = "sm",
}: {
  project: Project;
  size?: keyof typeof sizes;
}) {
  if (!project.logo) return null;

  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden rounded-xl border border-line bg-white ${sizes[size]}`}
    >
      <Image
        src={project.logo.src}
        alt=""
        width={256}
        height={256}
        className={`h-full w-full ${
          project.logo.fit === "contain" ? "object-contain p-1" : "object-cover"
        } ${project.logo.focus === "top" ? "object-top" : "object-center"}`}
      />
    </span>
  );
}
