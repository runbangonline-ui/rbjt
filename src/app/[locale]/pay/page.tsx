"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function PayPage() {
  const t = useTranslations("Pay");
  const locale = useLocale();
  const [amount, setAmount] = useState("50");
  const [currency, setCurrency] = useState("usd");
  const [loading, setLoading] = useState<"stripe" | "airwallex" | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function startStripe() {
    setError(null);
    setLoading("stripe");
    try {
      const res = await fetch("/api/checkout/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          amount: Number(amount) || 50,
          currency,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(
          data.error === "stripe_not_configured" ? t("errorStripe") : t("errorGeneric")
        );
        return;
      }
      if (data.url) window.location.href = data.url;
    } catch {
      setError(t("errorGeneric"));
    } finally {
      setLoading(null);
    }
  }

  async function startAirwallex() {
    setError(null);
    setLoading("airwallex");
    try {
      const res = await fetch("/api/checkout/airwallex", { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        setError(
          data.error === "airwallex_not_configured"
            ? t("errorAirwallex")
            : t("errorGeneric")
        );
        return;
      }
      if (data.url) window.location.href = data.url;
    } catch {
      setError(t("errorGeneric"));
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="min-h-screen pt-28 pb-16 px-4">
      <div className="max-w-lg mx-auto bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8">
        <h1 className="font-oswald text-3xl font-bold text-white mb-2">{t("title")}</h1>
        <p className="font-source-sans text-zinc-400 text-sm mb-8">{t("subtitle")}</p>

        <label className="block font-source-sans text-sm font-medium text-zinc-300 mb-2">
          {t("amountLabel")}
        </label>
        <input
          type="number"
          min={1}
          step={1}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-zinc-600 bg-zinc-900 text-white mb-4 font-source-sans"
        />

        <label className="block font-source-sans text-sm font-medium text-zinc-300 mb-2">
          {t("currencyLabel")}
        </label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-zinc-600 bg-zinc-900 text-white mb-8 font-source-sans"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
          <option value="hkd">HKD</option>
          <option value="cny">CNY</option>
        </select>

        {error && (
          <p className="text-sm text-red-400 mb-4 font-source-sans" role="alert">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={startStripe}
            disabled={loading !== null}
            className="w-full py-3 rounded-full bg-orange-500 text-white font-source-sans font-semibold hover:bg-orange-600 disabled:opacity-50"
          >
            {loading === "stripe" ? t("redirecting") : t("payStripe")}
          </button>
          <button
            type="button"
            onClick={startAirwallex}
            disabled={loading !== null}
            className="w-full py-3 rounded-full border-2 border-orange-500 text-orange-500 font-source-sans font-semibold hover:bg-orange-500/10 disabled:opacity-50"
          >
            {loading === "airwallex" ? t("redirecting") : t("payAirwallex")}
          </button>
        </div>

        <p className="mt-8 text-center">
          <Link href="/" className="text-sm text-orange-400 hover:underline font-source-sans">
            {t("backHome")}
          </Link>
        </p>
      </div>
    </div>
  );
}
