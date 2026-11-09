import industrialImg from "@/assets/newimg3.jpeg";

const GESTOES = [
  "Gestão Multidisciplinar em Campo",
  "Gestão da Garantia Predial",
  "Governança Técnica do Ativo Construído",
] as const;

const introCopy = [
  <>
    A CCA é uma empresa especializada na estruturação técnica da informação produzida ao longo do
    ciclo de vida do ativo construído. Há 9 anos no mercado, atua na inspeção e reabilitação de
    sistemas e subsistemas construtivos em empreendimentos prediais e industriais, com foco no
    desempenho técnico, na rastreabilidade das condições construtivas e na verificação de
    responsabilidades ao longo do tempo.
  </>,
  <>
    Sua atuação é orientada pelos princípios da Engenharia Diagnóstica, que integra ciência,
    pesquisa e metodologia aplicada para a análise do comportamento dos sistemas construtivos, por
    meio de diagnóstico, prognóstico e enquadramento técnico das condições verificadas em campo.
    Complementarmente, a Engenharia de Materiais fundamenta a prescrição técnica dos insumos e
    soluções aplicáveis, tanto na execução quanto na reabilitação de anomalias, considerando as
    condições de exposição e as particularidades regionais do ambiente de implantação do ativo,
    especialmente em zonas litorâneas e ambientes industriais sujeitos a agentes de degradação
    físico-química.
  </>,
  <>
    Essa abordagem permite transformar registros técnicos em informação qualificada para análise,
    apoio à tomada de decisão e gestão de riscos associados ao desempenho do ativo ao longo do
    tempo.
  </>,
] as const;

export function SobreNosContent() {
  return (
    <>
      {/* No desktop, a introdução ocupa exatamente a altura da tela (menos a navbar):
          texto, fonte e espaçamentos escalam com a altura da janela para caber sem rolar. */}
      <section className="relative bg-background lg:min-h-[calc(100dvh-4rem)] lg:flex lg:items-center">
        <div className="absolute inset-0 grid-bg-light opacity-40 pointer-events-none" />
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-[clamp(1.25rem,5vh,5rem)]">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-electric mb-3 lg:mb-[clamp(0.5rem,1.5vh,1rem)]">
            Sobre nós
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[clamp(2rem,5.5vh,3rem)] font-medium leading-tight text-foreground text-balance max-w-4xl">
            Quem é a <span className="text-gradient">CCA</span>
          </h1>

          {/* Colunas balanceadas: o texto se divide igualmente entre as duas colunas. */}
          <div
            lang="pt-BR"
            className="mt-8 lg:mt-[clamp(1.25rem,4vh,3rem)] lg:columns-2 lg:gap-x-12 xl:gap-x-16 [&>p+p]:mt-5 lg:[&>p+p]:mt-[clamp(0.75rem,2vh,1.5rem)]"
          >
            {introCopy.map((paragraph, i) => (
              <p
                key={i}
                className="text-base sm:text-lg lg:text-[clamp(1rem,2.3vh,1.25rem)] text-foreground/90 leading-relaxed tracking-[0.01em] text-justify hyphens-auto"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-35 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed tracking-[0.01em]">
            A atuação da CCA está organizada em três gestões independentes e complementares: Gestão
            Multidisciplinar em Campo, Gestão da Garantia Predial e Governança Técnica do Ativo
            Construído, aplicadas conforme as fases de produção, verificação de desempenho em
            garantia e operação do empreendimento. Cada uma de suas gestões pode ser contratada de
            forma autônoma, de acordo com o estágio do ativo e a necessidade do contratante.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {GESTOES.map((gestao) => (
              <article
                key={gestao}
                className="rounded-2xl border border-border bg-card/80 p-6 lg:p-8 hover:border-cyan-electric/30 transition-colors h-full"
              >
                <h2 className="font-display text-xl lg:text-2xl text-foreground leading-snug">
                  {gestao}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16 gap-y-10 lg:items-start">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-foreground text-balance">
              Onde a CCA <span className="text-gradient">Atua</span>
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-foreground/90 leading-relaxed tracking-[0.01em]">
              Atuação aplicada às fases de produção, garantia e operação do ativo — desde a obra até
              indústria em operação.
            </p>
          </div>

          <div className="relative lg:pt-2">
            <div className="absolute -inset-6 bg-cyan-electric/10 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-xl">
              <img
                src={industrialImg}
                alt="Inspeção técnica em ambiente industrial"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
