import { Helmet } from "react-helmet-async";

export default function Kalender() {
  return (
    <>
      <Helmet>
        <title>Kalender Akademik | MKn UNISSULA</title>
        <meta
          name="description"
          content="Jadwal penting kegiatan perkuliahan, registrasi, ujian semester, serta periode pendaftaran sidang tesis dan wisuda MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            ACADEMIC
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            Kalender Akademik
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-base text-body leading-relaxed max-w-5xl">
            Jadwal penting kegiatan perkuliahan, her-registrasi, ujian semester, serta periode
            pendaftaran sidang tesis dan wisuda Program Studi Magister Kenotariatan UNISSULA.
          </p>
        </div>

        <div className="border border-dashed border-gray-300 bg-white p-10 sm:p-14 text-center rounded-xs">
          <p className="text-sm font-medium text-gray-500">Konten akan segera ditambahkan.</p>
        </div>
      </div>
    </>
  );
}
