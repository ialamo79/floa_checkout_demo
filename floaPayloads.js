// Mapa de códigos de producto por país/plan/modo
export function productCodeFor(countryCode, plan, feeMode) {
  const cc = (countryCode || "").toUpperCase();
  const mode = (feeMode || "").toLowerCase(); // "noFees" | "withFees"

  if (plan === "10x") {
    if (cc === "FR" && mode === "nofees") return "BC10XF";
    throw new Error("El plan 10x solo está disponible en Francia y sin gastos (BC10XF).");
  }

  if (cc === "FR") {
    if (plan === "3x") return mode === "withfees" ? "BC3XC" : "BC3XF";
    if (plan === "4x") return mode === "withfees" ? "BC4XC" : "BC4XF";
  }

  const num = plan === "3x" ? "3" : "4";
  const mid = mode === "withfees" ? "XC" : "XF";
  return `BC${num}${mid}${cc}`;
}