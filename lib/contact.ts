import { budgetRanges, projectTypes } from "@/data/form-options";

export type ContactValues = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  description: string;
};

export type ContactState = {
  status: "idle" | "invalid" | "not_configured" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof ContactValues, string>>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function readContactValues(formData: FormData): ContactValues {
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    projectType: String(formData.get("projectType") ?? "").trim(),
    budget: String(formData.get("budget") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
  };
}

export function validateContact(values: ContactValues) {
  const fieldErrors: Partial<Record<keyof ContactValues, string>> = {};

  if (values.name.length < 2) {
    fieldErrors.name = "Enter your name.";
  } else if (values.name.length > 80) {
    fieldErrors.name = "Use 80 characters or fewer.";
  }

  if (!emailPattern.test(values.email)) {
    fieldErrors.email = "Enter a valid email address.";
  } else if (values.email.length > 120) {
    fieldErrors.email = "Use 120 characters or fewer.";
  }

  if (values.company.length > 120) {
    fieldErrors.company = "Use 120 characters or fewer.";
  }

  if (!projectTypes.includes(values.projectType as (typeof projectTypes)[number])) {
    fieldErrors.projectType = "Choose a project type.";
  }

  if (!budgetRanges.includes(values.budget as (typeof budgetRanges)[number])) {
    fieldErrors.budget = "Choose a budget range.";
  }

  if (values.description.length < 20) {
    fieldErrors.description = "Describe the project in at least 20 characters.";
  } else if (values.description.length > 2000) {
    fieldErrors.description = "Use 2,000 characters or fewer.";
  }

  return fieldErrors;
}
