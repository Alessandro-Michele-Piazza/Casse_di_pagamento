import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Privacy Policy | Informativa sito web",
  "Informativa privacy del sito web ai sensi dell'art. 13 del Regolamento UE 2016/679.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-black tracking-normal text-slate-950">
          Privacy Policy | Informativa sito web
        </h1>
        <div className="mt-8 space-y-8 text-base leading-8 text-slate-700">
          <p>
            In questa pagina si descrivono le modalità di gestione del sito
            www.splitweb.it in riferimento al trattamento dei dati personali dei
            visitatori che lo consultano. La presente informativa è resa ai
            sensi dell&apos;art. 13 del Regolamento UE 2016/679 (Regolamento in
            materia di protezione dei dati personali) a coloro che interagiscono
            con i servizi web di GL S.r.l.s. accessibili dal sito.
            L&apos;informativa è resa solo per il sito di GL S.r.l.s. e non
            anche per altri siti web eventualmente consultati dal visitatore.
          </p>

          <PolicySection title="Titolare del trattamento">
            <p>
              Il Titolare del trattamento è GL S.r.l.s., in persona del Legale
              Rappresentante, con sede legale in Via Palermo, 3 - 95014 Giarre
              (CT), C.F. e P.IVA 05362310871, mail: info@splitweb.it, pec:
              glsrls@pec.cgn.it, tel: 095.7791192.
            </p>
          </PolicySection>

          <PolicySection title="Responsabile della Protezione dei Dati (DPO)">
            <p>
              Il Titolare ha nominato un Responsabile della protezione dei dati
              (&quot;Data Protection Officer&quot; o &quot;DPO&quot;),
              contattabile per l&apos;esercizio dei diritti o per qualsiasi
              informazione relativa al trattamento:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                Per posta: GL S.r.l.s., Via Palermo, 3 - 95014 Giarre (CT),
                Att.ne Data Protection Officer
              </li>
              <li>
                Via email: info@splitweb.it - Att.ne Data Protection Officer
              </li>
              <li>
                Via PEC: glsrls@pec.cgn.it - Att.ne Data Protection Officer
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="Tipi di dati trattati e finalità del trattamento">
            <h3 className="text-xl font-bold text-slate-950">
              Dati di navigazione
            </h3>
            <p className="mt-3">
              I sistemi informatici e le procedure software preposte al
              funzionamento di questo sito web acquisiscono, nel corso del
              normale esercizio e per la sola durata della connessione, alcuni
              dati personali la cui trasmissione è implicita nell&apos;uso dei
              protocolli di comunicazione di Internet (indirizzi IP, nomi a
              dominio, URI delle risorse richieste, orario della richiesta,
              metodo HTTP, ecc.). Questi dati sono utilizzati esclusivamente per
              ricavare informazioni statistiche anonime sull&apos;uso del sito e
              controllarne il corretto funzionamento; vengono cancellati
              immediatamente dopo l&apos;elaborazione e non persistono per più
              di 7 giorni, fatta salva la necessità di accertamento di reati
              informatici.
            </p>

            <h3 className="mt-6 text-xl font-bold text-slate-950">
              Dati forniti volontariamente dall&apos;utente
            </h3>
            <p className="mt-3">
              Il facoltativo invio di email agli indirizzi presenti sul sito
              comporta l&apos;acquisizione dell&apos;indirizzo del mittente e
              degli eventuali dati personali inseriti nella missiva. Questi dati
              sono trattati esclusivamente per evadere la richiesta e, ove
              necessario per obblighi di legge, in base all&apos;art. 6(1)(c)
              del GDPR.
            </p>

            <h3 className="mt-6 text-xl font-bold text-slate-950">Cookies</h3>
            <p className="mt-3">
              Un cookie è un piccolo file inviato dal sito al browser
              dell&apos;utente per tracciare il percorso di navigazione e
              raccogliere dati anonimi. È possibile rifiutare i cookie tramite
              le impostazioni del browser; tuttavia, ciò può compromettere
              alcune funzionalità del sito. Per maggiori informazioni,
              consultare la pagina dedicata ai cookie.
            </p>
          </PolicySection>

          <PolicySection title="Luogo del trattamento">
            <p>
              I dati personali raccolti a seguito della consultazione del sito
              sono trattati sui server dell&apos;Azienda. I dati raccolti
              tramite email sono trattati presso la sede di GL S.r.l.s. in Via
              Palermo, 3 - 95014 Giarre (CT) e, se necessario, presso le sedi
              dei responsabili del trattamento.
            </p>
          </PolicySection>

          <PolicySection title="Facoltatività del conferimento dei dati personali">
            <p>
              Salvo i dati di navigazione, l&apos;utente è libero di fornire i
              dati nei moduli di contatto. Il rifiuto di fornire tali dati può
              comportare l&apos;impossibilità di ottenere quanto richiesto.
            </p>
          </PolicySection>

          <PolicySection title="Modalità del trattamento">
            <p>
              Il trattamento dei dati personali avviene in modo lecito e
              corretto con strumenti automatizzati e telematici, garantendo
              sicurezza e riservatezza secondo l&apos;art. 32 GDPR. I dati
              saranno conservati per il tempo strettamente necessario e,
              comunque, fino ai termini previsti dal Codice Civile (art. 2946 e
              ss.).
            </p>
          </PolicySection>

          <PolicySection title="Diritti degli interessati">
            <p>
              In qualità di interessato, Lei può esercitare i diritti previsti
              dagli articoli 15-21 del GDPR:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                Accesso, rettifica, cancellazione, limitazione del trattamento
              </li>
              <li>Portabilità dei dati</li>
              <li>Opposizione al trattamento</li>
              <li>
                Proporre reclamo al Garante Privacy (Piazza di Montecitorio 121,
                00186 Roma)
              </li>
            </ul>
            <p className="mt-4">
              Per esercitare i diritti o per ulteriori informazioni, contattare
              il Titolare via email a info@splitweb.it o per posta a Via
              Palermo, 3 - 95014 Giarre (CT). Le risposte saranno fornite entro
              un mese (massimo tre mesi in casi complessi).
            </p>
          </PolicySection>

          <PolicySection title="Soggetti a cui i dati possono essere comunicati">
            <p>
              I dati potranno essere comunicati ai responsabili del trattamento
              espressamente nominati dall&apos;Azienda, nei limiti delle
              finalità sopra descritte.
            </p>
          </PolicySection>
        </div>
      </div>
    </section>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-slate-200 pt-8">
      <h2 className="text-2xl font-black tracking-normal text-slate-950">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
