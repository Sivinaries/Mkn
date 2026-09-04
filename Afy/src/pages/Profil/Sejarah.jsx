import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import RichText from "../../components/ui/RichText";
import { timeline } from "../../data/profil/sejarahData";

export default function Sejarah() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>Sejarah & Latar Belakang | MKn UNISSULA</title>
        <meta
          name="description"
          content="Sejarah pendirian dan perjalanan akreditasi Program Studi Magister Kenotariatan Fakultas Hukum UNISSULA — dari pendirian hingga peringkat Unggul BAN-PT dan ASIC Premier."
        />
      </Helmet>

      <div className="space-y-16 sm:space-y-20">
        {/* Latar belakang pendirian */}
        <section className="space-y-4">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase block">
            SEJARAH / LATAR BELAKANG
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-2">
            <div className="lg:col-span-5">
              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] text-heading leading-tight">
                Latar Belakang Pendirian Program Studi
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-body leading-relaxed">
              <p>
                Dinamika ekonomi global dan pesatnya iklim investasi menuntut adanya infrastruktur hukum
                preventif dan responsif. Dalam ekosistem bisnis kontemporer, kepastian hukum bukan sekadar
                pelengkap administratif, melainkan pilar utama untuk memitigasi risiko dan menjamin keabsahan
                berbagai transaksi komersial maupun keperdataan. Kompleksitas ini secara langsung berimplikasi
                pada eskalasi kebutuhan akan profesi Notaris dan Pejabat Pembuat Akta Tanah (PPAT) yang kompeten,
                berintegritas, serta berwawasan luas. Di Indonesia, lonjakan pembangunan infrastruktur, dinamisnya
                lalu lintas pertanahan, serta masifnya aksi korporasi membuka lanskap potensi karier yang sangat
                prospektif dan strategis bagi profesi kenotariatan.
              </p>
              <p>
                Menjawab semua kebutuhan tersebut, Fakultas Hukum Universitas Islam Sultan Agung mendirikan Program
                Studi Magister Kenotariatan, dimana program ini didesain secara komprehensif, tidak sekadar untuk
                mencetak praktisi yang andal dalam merumuskan akta autentik, tetapi juga untuk melahirkan intelektual
                hukum yang unggul, berdaya saing internasional dan adaptif dalam mengimplementasikan ilmu pengetahuan serta
                teknologi di bidang hukum kenotariatan yang dijiwai nilai-nilai etik profesi dan nilai-nilai akhlakul karimah.
                Kehadiran program studi ini menjadi wujud nyata kontribusi Universitas Islam Sultan Agung dalam mengawal kebutuhan
                pelaku bisnis, menegakan supremasi hukum, serta didedikasikan untuk membangun generasi khaira ummah yang berintegritas
                tinggi melalui penerapan Budaya Akademik Islami (BudAI).

              </p>
            </div>
          </div>
        </section>

        {/* Linimasa perjalanan program studi */}
        <section className="space-y-6">
          <div>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
              Perjalanan Program Studi
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-3 mb-8" />
          </div>

          <ol className="relative border-l-2 border-gray-200 ml-2 space-y-9 sm:space-y-11">
            {timeline.map((item) => (
              <li key={item.year} className="relative pl-7 sm:pl-10">
                {/* Penanda titik pada garis */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[9px] top-2 rounded-full border-[3px] border-white ${item.highlight
                    ? "w-4 h-4 bg-primary ring-4 ring-primary/15"
                    : "w-3.5 h-3.5 bg-gray-300"
                    }`}
                />

                <div className="font-heading font-bold text-xl sm:text-2xl text-primary leading-none tabular-nums">
                  {item.year}
                </div>

                <h3 className="mt-2 font-heading font-semibold text-base sm:text-lg text-heading leading-snug">
                  <RichText>{t(item.title)}</RichText>
                </h3>

                <p className="mt-1.5 text-sm sm:text-base text-body leading-relaxed max-w-3xl">
                  <RichText>{t(item.desc)}</RichText>
                </p>

                {item.meta && (
                  <p className="mt-2.5 text-xs text-gray-500 leading-relaxed">
                    {t(item.meta)}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
