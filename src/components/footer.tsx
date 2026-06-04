import Link from "next/link";

const columns = [
  {
    title: "Titolo 1",
    links: [
      ["Link 1", "/"],
      ["Link 2", "/funzionalita"],
      ["Link 3", "/demo"],
    ],
  },
  {
    title: "Titolo 2",
    links: [
      ["Link 4", "/comuni"],
      ["Link 5", "/ristorazione-collettiva"],
      ["Link 6", "/ufficio-gare"],
    ],
  },
  {
    title: "Titolo 3",
    links: [
      ["Link 7", "/riduzione-sprechi"],
      ["Link 8", "/pagamenti-pagopa"],
      ["Link 9", "/dashboard-kpi"],
      ["Link 10", "/diete-presenze"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-gray-800 text-white p-4 mt-8">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        {columns.map((column) => (
          <div key={column.title}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary-muted">
              {column.title}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {column.links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary-muted">
            Contatti
          </h2>
          <div className="mt-4 space-y-3 text-sm text-white/80">
            <p>SPLIT ® | GL S.r.l.s.</p>
            <a
              className="block hover:text-white"
              href="mailto:info@splitweb.it"
            >
              info@splitweb.it
            </a>
            <a className="block hover:text-white" href="https://splitweb.it">
              splitweb.it
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-sm text-white/80 text-center">
        &copy; 2026 SPLIT ® | GL S.r.l.s. Casse Automatiche. Tutti i diritti
        riservati.
      </div>
    </footer>
  );
}
