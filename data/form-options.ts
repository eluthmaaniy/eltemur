/** Edit these labels if the ranges or project types should change. */
export const projectTypes = [
  "SaaS product",
  "Website",
  "Web application",
  "Mobile application",
  "Startup or MVP",
  "Product design or consulting",
  "Not sure yet",
] as const;

/**
 * PLACEHOLDER ranges. They are labelled in NGN because several existing
 * products bill with Paystack. Change the wording here if you quote in
 * another currency.
 */
export const budgetRanges = [
  "Under ₦500,000",
  "₦500,000 – ₦2,000,000",
  "₦2,000,000 – ₦5,000,000",
  "Above ₦5,000,000",
  "Not sure yet",
] as const;
