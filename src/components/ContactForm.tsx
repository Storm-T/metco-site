'use client'

import type { FormEvent } from 'react'

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = `Demande METCO — ${String(form.get('subject'))}`
    const body = [
      `Nom : ${form.get('name')}`,
      `Email : ${form.get('email')}`,
      `Téléphone : ${form.get('phone')}`,
      '',
      String(form.get('message')),
    ].join('\n')
    window.location.href = `mailto:contact@metco237.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const fieldClassName = 'contact-field h-[90px] w-full border-0 bg-[#eef2f4] px-[25px] text-[16px] leading-[30px] text-[#595a5c] placeholder:text-[#595a5c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056c8f]'

  return (
    <form onSubmit={handleSubmit} className="contact-form w-full" data-reveal="fade-up">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-[36px]">
        <label className="block">
          <span className="sr-only">Votre nom</span>
          <input name="name" required autoComplete="name" aria-label="Votre nom" className={fieldClassName} placeholder="Votre nom" />
        </label>
        <label className="block">
          <span className="sr-only">Votre adresse email</span>
          <input name="email" required type="email" autoComplete="email" aria-label="Votre adresse email" className={fieldClassName} placeholder="Votre adresse email" />
        </label>
        <label className="block">
          <span className="sr-only">Numéro de téléphone</span>
          <input name="phone" type="tel" autoComplete="tel" aria-label="Numéro de téléphone" className={fieldClassName} placeholder="Numéro de téléphone" />
        </label>
        <label className="block">
          <span className="sr-only">Objet</span>
          <input name="subject" required aria-label="Objet" className={fieldClassName} placeholder="Objet" />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="sr-only">Écrivez votre texte</span>
        <textarea
          name="message"
          required
          rows={6}
          aria-label="Écrivez votre texte"
          className="contact-field block h-[276px] w-full resize-y border-0 bg-[#eef2f4] px-[25px] pt-[41px] text-[16px] leading-[30px] text-[#595a5c] placeholder:text-[#595a5c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056c8f]"
          placeholder="Écrivez votre texte"
        />
      </label>

      <button
        type="submit"
        className="metco-btn metco-btn--blue mx-auto mt-[50px] flex h-[55px] w-[247px] items-center justify-center bg-[#011a23] text-[20px] font-medium normal-case text-white"
      >
        Envoyer
      </button>
    </form>
  )
}
