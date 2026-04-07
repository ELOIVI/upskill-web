"use client";

import { useState } from "react";

interface Props {
  locale: string;
  titol: string;
  subtitol: string;
  labels: {
    nom: string;
    grau: string;
    curs: string;
    assistencia: string;
    comoHaTrobat: string;
    motivacio: string;
    contacte: string;
    enviar: string;
    exit: string;
    error: string;
  };
  opcions: {
    assistencia: { value: string; label: string }[];
    curs: string[];
    comoHaTrobat: string[];
  };
}

// Formulari d'inscripció: envia les dades a l'API route /api/inscripcio
export default function FormulariInscripcio({ titol, subtitol, labels, opcions }: Props) {
  const [estat, setEstat] = useState<"idle" | "loading" | "exit" | "error">("idle");
  const [form, setForm] = useState({
    nom: "",
    grau: "",
    curs: "",
    assistencia: "",
    comoHaTrobat: "",
    motivacio: "",
    contacte: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setEstat("loading");

    try {
      const res = await fetch("/api/inscripcio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setEstat("exit");
      } else {
        setEstat("error");
      }
    } catch {
      setEstat("error");
    }
  };

  // Missatge d'èxit
  if (estat === "exit") {
    return (
      <div className="text-center py-16 flex flex-col items-center">
        <img
          src="/images/brand/4_transparente.svg"
          alt="UpSkill"
          className="h-60 w-auto mb-6"
        />
        <h2 className="text-[32px] font-extrabold text-us-dark mb-3">{labels.exit}</h2>
      </div>
    );
  }

  return (
    <div>
      {/* Capçalera */}
      <div className="mb-10 text-center">
        <img
          src="/images/brand/4_transparente.svg"
          alt="UpSkill"
          className="h-40 w-auto mx-auto mb-6"
        />
        <h1 className="text-[40px] font-extrabold tracking-tight text-us-dark mb-2">{titol}</h1>
        <p className="text-[16px] text-us-dark/70 leading-relaxed">{subtitol}</p>
      </div>

      {/* Camps del formulari */}
      <div className="flex flex-col gap-6">

        {/* Nom */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-semibold text-us-dark">{labels.nom} *</label>
          <input
            name="nom"
            value={form.nom}
            onChange={handleChange}
            className="border-[1.5px] border-us-dark/20 rounded-xl px-4 py-3 text-[15px] text-us-dark bg-white focus:border-us-purple focus:outline-none transition-colors"
            required
          />
        </div>

        {/* Grau */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-semibold text-us-dark">{labels.grau} *</label>
          <input
            name="grau"
            value={form.grau}
            onChange={handleChange}
            className="border-[1.5px] border-us-dark/20 rounded-xl px-4 py-3 text-[15px] text-us-dark bg-white focus:border-us-purple focus:outline-none transition-colors"
            required
          />
        </div>

        {/* Curs */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-semibold text-us-dark">{labels.curs} *</label>
          <div className="flex flex-wrap gap-2">
            {opcions.curs.map((c) => (
              <button
                key={c}
                onClick={() => setForm({ ...form, curs: c })}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold border-[1.5px] transition-all ${
                  form.curs === c
                    ? "bg-us-dark text-us-cream border-us-dark"
                    : "border-us-dark/20 text-us-dark hover:border-us-dark/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Assistència */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-semibold text-us-dark">{labels.assistencia} *</label>
          <div className="flex flex-col gap-2">
            {opcions.assistencia.map((op) => (
              <button
                key={op.value}
                onClick={() => setForm({ ...form, assistencia: op.value })}
                className={`px-4 py-3 rounded-xl text-[14px] font-medium border-[1.5px] text-left transition-all ${
                  form.assistencia === op.value
                    ? "bg-us-dark text-us-cream border-us-dark"
                    : "border-us-dark/20 text-us-dark hover:border-us-dark/50"
                }`}
              >
                {op.label}
              </button>
            ))}
          </div>
        </div>

        {/* Com ha trobat UpSkill */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-semibold text-us-dark">{labels.comoHaTrobat}</label>
          <div className="flex flex-wrap gap-2">
            {opcions.comoHaTrobat.map((op) => (
              <button
                key={op}
                onClick={() => setForm({ ...form, comoHaTrobat: op })}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold border-[1.5px] transition-all ${
                  form.comoHaTrobat === op
                    ? "bg-us-dark text-us-cream border-us-dark"
                    : "border-us-dark/20 text-us-dark hover:border-us-dark/50"
                }`}
              >
                {op}
              </button>
            ))}
          </div>
        </div>

        {/* Motivació */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-semibold text-us-dark">{labels.motivacio}</label>
          <textarea
            name="motivacio"
            value={form.motivacio}
            onChange={handleChange}
            rows={3}
            className="border-[1.5px] border-us-dark/20 rounded-xl px-4 py-3 text-[15px] text-us-dark bg-white focus:border-us-purple focus:outline-none transition-colors resize-none"
          />
        </div>

        {/* Contacte */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-semibold text-us-dark">{labels.contacte}</label>
          <input
            name="contacte"
            value={form.contacte}
            onChange={handleChange}
            className="border-[1.5px] border-us-dark/20 rounded-xl px-4 py-3 text-[15px] text-us-dark bg-white focus:border-us-purple focus:outline-none transition-colors"
          />
        </div>

        {/* Error */}
        {estat === "error" && (
          <p className="text-red-600 text-[14px] font-medium">{labels.error}</p>
        )}

        {/* Botó d'enviament */}
        <button
          onClick={handleSubmit}
          disabled={estat === "loading" || !form.nom || !form.grau || !form.curs || !form.assistencia}
          className="bg-us-dark text-us-cream text-[14px] font-bold px-8 py-4 rounded-full hover:opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed mt-2"
        >
          {estat === "loading" ? "..." : labels.enviar}
        </button>

      </div>
    </div>
  );
}