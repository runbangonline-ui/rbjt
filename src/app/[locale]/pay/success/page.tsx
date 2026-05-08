import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function PaySuccessPage() {
  const t = await getTranslations("Pay");

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 flex items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="font-oswald text-3xl font-bold text-white mb-4">{t("successTitle")}</h1>
        <p className="font-source-sans text-zinc-400 mb-8">{t("successBody")}</p>
        <Link
          href="/"
          className="inline-flex px-8 py-3 rounded-full bg-orange-500 text-white font-source-sans font-semibold hover:bg-orange-600"
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
