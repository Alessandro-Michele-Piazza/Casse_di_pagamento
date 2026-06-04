"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { leadSchema, type LeadPayload } from "@/lib/validators";

const inputClass =
  "min-h-12 rounded border border-slate-300 bg-white px-3 text-sm text-slate-950 shadow-sm transition focus:border-blue-600";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadPayload>({
    resolver: zodResolver(leadSchema),
    defaultValues: { privacy: false },
  });

  async function onSubmit(values: LeadPayload) {
    setStatus("idle");
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome e cognome" error={errors.fullName?.message}>
          <input
            {...register("fullName")}
            className={inputClass}
            autoComplete="name"
          />
        </Field>
        <Field label="Azienda" error={errors.company?.message}>
          <input
            {...register("company")}
            className={inputClass}
            autoComplete="organization"
          />
        </Field>
        <Field label="Telefono" error={errors.phone?.message}>
          <input
            {...register("phone")}
            className={inputClass}
            autoComplete="tel"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            className={inputClass}
            autoComplete="email"
          />
        </Field>
        <Field label="Comune / Provincia" error={errors.city?.message}>
          <input
            {...register("city")}
            className={inputClass}
            autoComplete="address-level2"
          />
        </Field>
        <Field label="Tipo attività" error={errors.businessType?.message}>
          <input
            {...register("businessType")}
            className={inputClass}
            placeholder="Bar, farmacia, retail..."
          />
        </Field>
      </div>
      <Field label="Messaggio" error={errors.message?.message}>
        <textarea
          {...register("message")}
          className={`${inputClass} min-h-32 py-3`}
        />
      </Field>
      <label className="flex items-start gap-3 text-sm leading-6 text-slate-700">
        <input
          type="checkbox"
          {...register("privacy")}
          className="mt-1 size-4 rounded border-slate-300"
        />
        <span>
          Ho letto l&apos;informativa privacy e autorizzo il trattamento dei
          dati per ricevere una risposta.
        </span>
      </label>
      {errors.privacy?.message && (
        <p className="text-sm font-semibold text-red-700">
          {errors.privacy.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-blue-600 px-6 text-sm font-bold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        <Send size={18} aria-hidden="true" />
        {isSubmitting ? "Invio in corso..." : "Invia richiesta"}
      </button>
      {status === "success" && (
        <p className="rounded bg-green-50 p-3 text-sm font-semibold text-green-800">
          Richiesta inviata correttamente.
        </p>
      )}
      {status === "error" && (
        <p className="rounded bg-red-50 p-3 text-sm font-semibold text-red-800">
          Controlla i dati inseriti e riprova.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-800">
      {label}
      {children}
      {error && <span className="font-medium text-red-700">{error}</span>}
    </label>
  );
}
