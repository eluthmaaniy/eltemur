import {
  RiChat1Line,
  RiDeviceLine,
  RiExpandLeftRightLine,
  RiFlowChart,
  RiFocus2Line,
  RiLifebuoyLine,
  type RemixiconComponentType,
} from "@remixicon/react";

export type Reason = {
  title: string;
  description: string;
  icon: RemixiconComponentType;
};

export const reasons: Reason[] = [
  {
    title: "Product-focused development",
    description:
      "The build is organised around the workflow a person actually uses, not a pile of disconnected pages.",
    icon: RiFlowChart,
  },
  {
    title: "Clear communication",
    description:
      "You hear what is being built, what is next, and what is still open, in plain language.",
    icon: RiChat1Line,
  },
  {
    title: "Scalable technical foundations",
    description:
      "The stack is chosen so a first version can take accounts, content, or payments later without a rewrite.",
    icon: RiExpandLeftRightLine,
  },
  {
    title: "Responsive interfaces",
    description:
      "Layouts are designed for phones, tablets, and desktop screens, not stretched from a single mockup.",
    icon: RiDeviceLine,
  },
  {
    title: "Solutions built around business goals",
    description:
      "Each project starts from the job the product has to do: reach people, run an operation, or create a revenue path.",
    icon: RiFocus2Line,
  },
  {
    title: "Support after launch",
    description:
      "Launch is not the last conversation. Fixes and follow-on work stay part of the engagement.",
    icon: RiLifebuoyLine,
  },
];
