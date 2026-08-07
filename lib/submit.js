import { config } from "@/lib/config";

export function detectSource() {
  if (typeof window === "undefined") return "Direct";
  const params = new URLSearchParams(window.location.search);
  const utm = params.get("utm_source");
  if (utm) return utm;
  const ref = document.referrer;
  if (!ref) return "Direct";
  try {
    const host = new URL(ref).hostname.replace("www.", "");
    return host || "Direct";
  } catch {
    return "Direct";
  }
}

export async function submitLead(data) {
  if (!config.appsScriptUrl) {
    await new Promise((resolve) => setTimeout(resolve, 1800));
    return { ok: true, simulated: true };
  }

  const res = await fetch(config.appsScriptUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(data),
  });

  return { ok: true, simulated: false };
}
