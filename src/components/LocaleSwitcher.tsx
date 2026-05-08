"use client";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Nav");

  return (
    <div className="flex items-center gap-1 rounded-full border border-zinc-600 bg-zinc-800/80 px-1 py-0.5 text-xs font-medium">
      <Link
        href={pathname}
        locale="en"
        className={`rounded-full px-2 py-1 transition-colors ${
          locale === "en" ? "bg-orange-500 text-white" : "text-zinc-400 hover:text-white"
        }`}
      >
        {t("langShortEn")}
      </Link>
      <Link
        href={pathname}
        locale="zh"
        className={`rounded-full px-2 py-1 transition-colors ${
          locale === "zh" ? "bg-orange-500 text-white" : "text-zinc-400 hover:text-white"
        }`}
      >
        {t("langShortZh")}
      </Link>
    </div>
  );
}
