const steps = [
  {
    num: '01',
    title: 'ÉCOUTER',
    desc: "Nous échangeons avec vous afin de comprendre vos besoins, vos contraintes techniques, vos objectifs et les caractéristiques de votre projet.",
    dark: false,
  },
  {
    num: '02',
    title: 'ÉTUDIER',
    desc: "À partir des informations disponibles, nous analysons les contraintes du projet afin d'orienter la réalisation vers une solution adaptée.",
    dark: true,
  },
  {
    num: '03',
    title: 'RÉALISER',
    desc: "Notre savoir-faire technique intervient pour transformer la solution définie en un ouvrage métallique concret, robuste et fonctionnel.",
    dark: false,
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-[#eef2f4] px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:pb-[128px] lg:pt-[93px]">
      <div className="max-w-[1024px] mx-auto">
        <p className="text-[#056c8f] text-[16px] font-bold uppercase text-center leading-[25px] mb-4">
          NOTRE PROCESSUS
        </p>
        <h2 className="font-gobold mx-auto mb-3 max-w-[602px] text-center text-[clamp(2rem,4vw,2.5rem)] uppercase leading-[1.3] text-[#011a23]">
          De votre besoin à la réalisation
        </h2>
        <p className="mx-auto mb-14 max-w-[551px] text-center text-[15px] leading-[1.6] text-[#595a5c] sm:text-[16px] sm:leading-[25px] lg:mb-[59px]">
          Parce qu&apos;un projet réussi commence par une bonne compréhension du besoin, METCO privilégie une démarche structurée à chaque étape.
        </p>

        {/* Steps grid */}
        <div className="relative pt-[35px]">
          <div className="grid grid-cols-1 gap-y-[60px] md:grid-cols-3 md:items-start md:gap-x-[47px] md:gap-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative px-[34px] pb-[20px] pt-[65px] text-center ${
                  step.dark
                    ? 'bg-[#011a23] min-h-[256px] md:-mt-[18px] md:pb-[38px] md:pt-[67px]'
                    : 'bg-white min-h-[220px]'
                }`}
              >
                {/* Number circle */}
                <div className={`absolute left-1/2 top-[-35px] flex h-[70px] w-[70px] -translate-x-1/2 items-center justify-center rounded-full text-[24px] font-bold ${step.dark ? 'bg-[#056c8f] text-white' : 'bg-white text-[#011a23]'}`}>
                  {step.num}
                </div>
                <h3 className={`font-outfit text-[24px] font-bold uppercase leading-[20px] ${step.dark ? 'mb-[31px] text-white' : 'mb-[15px] text-[#011a23]'}`}>
                  {step.title}
                </h3>
                <p className={`text-[16px] leading-[20px] ${step.dark ? 'text-[#eef2f4]/40' : 'text-[#595a5c]'}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
