"use server";

import { validateContact, readContactValues, type ContactState } from "@/lib/contact";
import { businessInfo } from "@/lib/site";

export async function submitContact(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (String(formData.get("companyWebsite") ?? "").trim()) {
    return { status: "success", message: "Message sent. We will reply by email." };
  }

  const values = readContactValues(formData);
  const fieldErrors = validateContact(values);

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "invalid",
      message: "Check the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT?.trim();

  if (!endpoint) {
    return {
      status: "not_configured",
      message:
        "This form is not connected to an inbox yet, so the message was not sent. Use the email or WhatsApp link instead.",
    };
  }

  let url: URL;
  try {
    url = new URL(endpoint);
  } catch {
    return {
      status: "error",
      message: "The contact form could not be delivered. Use the email or WhatsApp link instead.",
    };
  }

  if (url.protocol !== "https:") {
    return {
      status: "error",
      message: "The contact form could not be delivered. Use the email or WhatsApp link instead.",
    };
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        to: businessInfo.email,
        name: values.name,
        email: values.email,
        company: values.company,
        projectType: values.projectType,
        budget: values.budget,
        description: values.description,
        source: "eltemur-zentra-studio-website",
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(12000),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: "The message could not be delivered. Use the email or WhatsApp link instead.",
      };
    }
  } catch {
    return {
      status: "error",
      message: "The message could not be delivered. Use the email or WhatsApp link instead.",
    };
  }

  return {
    status: "success",
    message: "Message sent. We will reply by email.",
  };
}
