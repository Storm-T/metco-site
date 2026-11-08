export default function ArticleComments({ title }: { title: string }) {
  const comments = [
    { date: 'May 14, 2024 at 4:11 am', name: 'ADMIN' },
    { date: 'May 14, 2024 at 4:11 am', name: 'ADMIN' },
  ]
  const comment = 'Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit.'

  return (
    <section className="px-5 md:px-8">
      <div className="mx-auto min-h-[586px] max-w-[804px] pt-2">
        <h2 className="text-[14px] font-extrabold uppercase text-[#011a23]">02 commentaires pour “{title}”</h2>
        <div className="mt-10">
          {comments.map((item, index) => (
            <article key={index} className="grid min-h-[235px] grid-cols-[78px_minmax(0,1fr)] gap-5 border-b border-slate-200 py-5 sm:grid-cols-[95px_minmax(0,1fr)] sm:gap-10">
              <span className="grid size-[70px] place-items-center rounded-full bg-[#eef2f4] font-gobold text-[25px] text-[#056c8f] sm:size-[95px]" aria-hidden="true">{index === 0 ? 'M' : 'H'}</span>
              <div>
                <p className="text-[11px] font-extrabold uppercase text-[#011a23]">{item.name}</p>
                <p className="mt-1 text-[11px] text-[#69777d]">{item.date}</p>
                <p className="mt-5 max-w-[540px] text-[13px] leading-6 text-[#595a5c]">{comment}</p>
                <a href={`mailto:contact@metco237.com?subject=${encodeURIComponent(`Réponse au commentaire — ${title}`)}`} className="metco-btn mt-4 inline-flex items-center justify-center bg-[#056c8f] font-bold uppercase text-white">Répondre</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
