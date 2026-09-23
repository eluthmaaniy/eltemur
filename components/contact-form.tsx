"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";
import { budgetRanges, projectTypes } from "@/data/form-options";
import type { ContactState } from "@/lib/contact";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "mt-1.5 min-h-11 w-full rounded-md border border-line bg-white px-3 py-2.5 text-base text-navy outline-none focus-visible:border-royal";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const errors = state.fieldErrors ?? {};

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-line bg-white p-6" role="status">
        <h3 className="text-lg font-semibold text-navy">Message sent</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-lg border border-line bg-white p-5 sm:p-6" noValidate>
      <h3 className="text-lg font-semibold text-navy">Tell us about your project</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:gap-5">
        <Field label="Name" name="name" error={errors.name} autoComplete="name" />
        <Field
          label="Email address"
          name="email"
          type="email"
          error={errors.email}
          autoComplete="email"
        />
        <Field
          label="Company or brand name"
          name="company"
          error={errors.company}
          autoComplete="organization"
          optional
        />
        <SelectField
          label="Project type"
          name="projectType"
          error={errors.projectType}
          options={projectTypes}
          placeholder="Select a project type"
        />
        <div className="sm:col-span-2">
          <SelectField
            label="Estimated budget range (NGN)"
            name="budget"
            error={errors.budget}
            options={budgetRanges}
            placeholder="Select a range"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className="text-sm font-medium text-navy">
            Project description
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            required
            aria-invalid={errors.description ? true : undefined}
            aria-describedby={errors.description ? "description-error" : undefined}
            className={fieldClass}
          />
          {errors.description ? (
            <p id="description-error" className="mt-1.5 text-sm text-danger">
              {errors.description}
            </p>
          ) : null}
        </div>
      </div>

      <input
        className="hidden"
        name="companyWebsite"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {state.status === "invalid" || state.status === "not_configured" || state.status === "error" ? (
        <p className="mt-4 text-sm leading-6 text-navy" role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-royal px-4 text-sm font-semibold text-white hover:bg-royal-dark disabled:cursor-not-allowed disabled:opacity-70 sm:min-h-10 sm:w-auto"
      >
        {pending ? "Submitting…" : "Submit project"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  autoComplete,
  optional = false,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  optional?: boolean;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-navy">
        {label}
        {optional ? <span className="font-normal text-muted"> (optional)</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={!optional}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={fieldClass}
      />
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  name,
  error,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  error?: string;
  options: readonly string[];
  placeholder: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-navy">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        required
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={fieldClass}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
