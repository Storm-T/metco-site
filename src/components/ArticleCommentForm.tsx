'use client'

import type { FormEvent } from 'react'

export default function ArticleCommentForm({ title }: { title: string }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const body = `Nom : ${form.get('name')}\nEmail : ${form.get('email')}\n\n${form.get('comment')}`
    window.location.href = `mailto:contact@metco237.com?subject=${encodeURIComponent(`Commentaire — ${title}`)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="px-5 md:px-8">
      <div className="mx-auto min-h-[507px] max-w-[804px] pt-2">
        <h2 className="text-[14px] font-extrabold uppercase text-[#011a23]">Laissez un commentaire</h2>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input name="name" required autoComplete="name" placeholder="Votre nom" aria-label="Votre nom" className="h-[72px] border border-slate-200 bg-white px-6 text-[14px] outline-none transition-colors focus:border-[#056c8f]" />
            <input name="email" required type="email" autoComplete="email" placeholder="Adresse email" aria-label="Adresse email" className="h-[72px] border border-slate-200 bg-white px-6 text-[14px] outline-none transition-colors focus:border-[#056c8f]" />
          </div>
          <textarea name="comment" required rows={7} placeholder="Écrivez votre commentaire" aria-label="Écrivez votre commentaire" className="mt-4 block h-[276px] w-full resize-y border border-slate-200 bg-white p-6 text-[14px] outline-none transition-colors focus:border-[#056c8f]" />
          <button type="submit" className="metco-btn mt-5 inline-flex items-center justify-center bg-[#056c8f] font-extrabold uppercase text-white">Envoyer le commentaire</button>
        </form>
      </div>
    </section>
  )
}
