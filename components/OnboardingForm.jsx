"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { optionSets, validateStep, stepFields } from "@/lib/form-schema";
import { submitLead, detectSource } from "@/lib/submit";
import Button from "@/components/ui/Button";
import { OptionIcon, CheckIcon, WhatsAppIcon, SparkIcon } from "@/components/icons";

const steps = [
  { title: "Your Details", subtitle: "How should your coach reach you?" },
  { title: "Your Body", subtitle: "Helps us calculate your targets" },
  { title: "Goal & Diet", subtitle: "What are your targets and food preferences?" },
  { title: "Struggles & Medicals", subtitle: "What obstacles or conditions do you have?" },
  { title: "Contact Preference & Question", subtitle: "When should we reach out and what is your query?" },
  { title: "Review & Submit", subtitle: "Double-check and lock it in" },
];

const totalSteps = steps.length;
const ease = [0.22, 1, 0.36, 1];

const defaultValues = {
  name: "",
  phone: "",
  email: "",
  age: "",
  gender: "",
  heightCm: "",
  weightKg: "",
  goal: "",
  foodPreference: "",
  medicalConditions: [],
  challenge: "",
  bestTime: "",
  notes: "",
};

function FieldError({ error }) {
  if (!error) return null;
  return (
    <p className="mt-1.5 text-xs font-medium text-[#ff8a8a]">{error}</p>
  );
}

function Label({ htmlFor, children, error }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`mb-2 block text-sm font-semibold ${error ? "text-[#ff8a8a]" : "text-white/80"}`}
    >
      {children}
    </label>
  );
}

function OptionCards({ options, value, onSelect, columns = 2, mobileColumns = 1, compact = false, showHint = false }) {
  const smColClass =
    columns === 3
      ? "sm:grid-cols-3"
      : columns === 1
        ? "sm:grid-cols-1"
        : "sm:grid-cols-2";
        
  const baseColClass = 
    mobileColumns === 3 ? "grid-cols-3" : mobileColumns === 2 ? "grid-cols-2" : "grid-cols-1";

  return (
    <div className={`grid gap-3 sm:gap-4 ${baseColClass} ${smColClass}`}>
      {options.map((opt) => {
        const selected = value === opt.label || value === opt.value;
        return (
          <button
            key={opt.label}
            type="button"
            onClick={() => onSelect(opt.label)}
            className={`flex items-center text-left transition-all duration-200 border-2 rounded-2xl ${
              compact ? "gap-2.5 p-3 sm:gap-4 sm:p-4" : "gap-4 p-4"
            } ${
              selected
                ? "border-lime bg-lime/10"
                : "border-white/10 bg-white/5 hover:border-white/25"
            }`}
          >
            <span
              className={`flex shrink-0 items-center justify-center rounded-xl transition-colors ${
                compact ? "h-10 w-10 sm:h-12 sm:w-12" : "h-12 w-12"
              } ${selected ? "bg-lime text-ink" : "bg-white/10 text-lime"}`}
            >
              {opt.icon ? <OptionIcon name={opt.icon} className={compact ? "scale-75 sm:scale-100" : ""} /> : null}
            </span>
            <span className="flex-1 min-w-0">
              <span
                className={`block font-semibold ${compact ? "text-sm sm:text-base" : ""} ${
                  selected ? "text-lime" : "text-white"
                } whitespace-normal break-words leading-snug`}
              >
                {opt.label}
              </span>
              {showHint && opt.hint ? (
                <span className={`mt-0.5 block text-xs text-white/45 ${compact ? "whitespace-normal break-words" : "whitespace-normal break-words"}`}>
                  {opt.hint}
                </span>
              ) : null}
            </span>
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                selected ? "border-lime bg-lime text-ink" : "border-white/25"
              }`}
            >
              {selected ? <CheckIcon className="h-4 w-4" /> : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ChipMultiSelect({ options, value, onToggle }) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => {
        const selected = value.includes(opt.value);
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onToggle(opt.value)}
            className={`flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all duration-200 sm:px-5 sm:py-2.5 whitespace-nowrap ${
              selected
                ? "border-lime bg-lime text-ink"
                : "border-white/15 bg-white/5 text-white/70 hover:border-white/30"
            }`}
          >
            {selected ? <CheckIcon className="h-4 w-4" /> : null}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export default function OnboardingForm() {
  const { register, watch, setValue, getValues } = useForm({ defaultValues });

  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const values = watch();
  const current = steps[step];
  const progress = ((step + 1) / totalSteps) * 100;

  const clearErrors = (fields) =>
    setErrors((prev) => {
      const next = { ...prev };
      fields.forEach((f) => delete next[f]);
      return next;
    });

  const goNext = () => {
    const result = validateStep(step, getValues());
    if (!result.success) {
      setErrors(result.error);
      return;
    }
    setErrors({});
    if (step < totalSteps - 1) {
      setStep((s) => s + 1);
    } else {
      handleSubmit();
    }
  };

  const goBack = () => {
    setErrors({});
    if (step > 0) setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const v = getValues();
    const payload = {
      Timestamp: new Date().toISOString(),
      Name: v.name,
      Phone: v.phone,
      Email: v.email,
      Age: v.age,
      Gender: v.gender,
      Height: `${v.heightCm} cm`,
      Weight: `${v.weightKg} kg`,
      Goal: v.goal,
      "Food Preference": v.foodPreference,
      "Medical Conditions": v.medicalConditions.join(", "),
      "Biggest Challenge": v.challenge,
      "Best Time to Contact": v.bestTime,
      "Questions & Comments": v.notes || "",
      Source: detectSource(),
      Status: "New",
    };
    try {
      await submitLead(payload);
      setSubmitting(false);
      setSubmitted(true);
    } catch {
      setSubmitting(false);
      setErrors({ form: "Something went wrong. Please try again." });
    }
  };

  const toggleMedical = (opt) => {
    const currentList = getValues("medicalConditions") || [];
    let next;
    if (opt === "None") {
      next = ["None"];
    } else if (currentList.includes("None")) {
      next = [opt];
    } else if (currentList.includes(opt)) {
      next = currentList.filter((x) => x !== opt);
    } else {
      next = [...currentList, opt];
    }
    setValue("medicalConditions", next, { shouldDirty: true });
    clearErrors(["medicalConditions"]);
  };

  const selectOption = (field, label) => {
    setValue(field, label, { shouldDirty: true });
    clearErrors([field]);
  };

  /* ---------- Success / loading screens ---------- */

  if (submitted) {
    return (
      <section id="onboarding" className="relative overflow-hidden bg-ink">
        <div className="glow-blob left-1/4 top-0 h-96 w-96 bg-lime/40" />
        <div className="container-app relative section-pad">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease }}
            className="mx-auto max-w-xl rounded-[2rem] glass-dark p-10 text-center sm:p-14"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 14 }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime text-ink"
            >
              <CheckIcon className="h-10 w-10" />
            </motion.span>
            <h2 className="heading mt-7 text-3xl text-white sm:text-4xl">
              Thank You!
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Our coach will review your details and contact you soon on your phone or email. Keep your
              phone nearby — expect a message on WhatsApp or a call shortly.
            </p>
            <div className="mt-8">
              <Button href={process.env.NEXT_PUBLIC_WHATSAPP || "https://wa.me/919876543210"} target="_blank" variant="outline">
                <WhatsAppIcon className="h-5 w-5" />
                Message us on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="onboarding" className="relative overflow-hidden bg-ink">
      <div className="glow-blob -right-32 top-24 h-96 w-96 bg-lime/30" />
      <div className="glow-blob -left-24 bottom-0 h-80 w-80 bg-[#3dff8f]/25" />

      <div className="container-app relative section-pad grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Trust column */}
        <div className="lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lime">
            <SparkIcon className="h-4 w-4" />
            Start in 2 minutes
          </span>
          <h2 className="heading mt-5 text-3xl text-white sm:text-4xl md:text-[2.75rem]">
            Your transformation starts with one form
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Answer a few quick questions. Our head coach will personally review your body metrics, goals, and struggles to design a sustainable roadmap for you.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {[
              "Free assessment call with your coach",
              "Personalized targets delivered within 24 hours",
              "No hidden fees, no credit card needed",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="font-medium text-white/80">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 hidden items-center gap-4 rounded-2xl glass-dark p-5 lg:flex">
            <Image
              src="/logo.png"
              alt="FitEatsBLR"
              width={48}
              height={48}
              className="rounded-xl"
            />
            <div>
              <p className="text-sm font-semibold text-white">
                500+ members transformed
              </p>
              <p className="text-xs text-white/50">Average rating 4.9 / 5</p>
            </div>
          </div>
        </div>

        {/* Form card */}
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-dark shadow-2xl">
          {/* Progress bar */}
          <div className="h-1.5 w-full bg-white/10">
            <motion.div
              className="h-full bg-lime"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease }}
            />
          </div>

          <div className="p-6 sm:p-10">
            <div className="mb-7 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                Step {step + 1} of {totalSteps}
              </p>
              <p className="heading text-sm text-lime">{Math.round(progress)}%</p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3, ease }}
              >
                <h3 className="heading text-2xl text-white">{current.title}</h3>
                <p className="mt-1.5 text-sm text-white/50">{current.subtitle}</p>

                <div className="mt-7">
                  {/* Step 1 — Personal */}
                  {step === 0 ? (
                    <div className="flex flex-col gap-5">
                      <div>
                        <Label htmlFor="name" error={errors.name}>
                          Full Name
                        </Label>
                        <input
                          id="name"
                          {...register("name")}
                          onChange={(e) => {
                            setValue("name", e.target.value, { shouldDirty: true });
                            if (errors.name) clearErrors(["name"]);
                          }}
                          placeholder="Your full name"
                          className="input-field"
                        />
                        <FieldError error={errors.name} />
                      </div>
                      <div>
                        <Label htmlFor="phone" error={errors.phone}>
                          Mobile Number
                        </Label>
                        <input
                          id="phone"
                          type="tel"
                          inputMode="numeric"
                          {...register("phone")}
                          onChange={(e) => {
                            setValue("phone", e.target.value, { shouldDirty: true });
                            if (errors.phone) clearErrors(["phone"]);
                          }}
                          placeholder="10-digit mobile number"
                          className="input-field"
                        />
                        <FieldError error={errors.phone} />
                      </div>
                      <div>
                        <Label htmlFor="email" error={errors.email}>
                          Email Address
                        </Label>
                        <input
                          id="email"
                          type="email"
                          {...register("email")}
                          onChange={(e) => {
                            setValue("email", e.target.value, { shouldDirty: true });
                            if (errors.email) clearErrors(["email"]);
                          }}
                          placeholder="you@example.com"
                          className="input-field"
                        />
                        <FieldError error={errors.email} />
                      </div>
                    </div>
                  ) : null}

                  {/* Step 2 — Body */}
                  {step === 1 ? (
                    <div className="flex flex-col gap-5">
                      <div>
                        <Label error={errors.gender}>Gender</Label>
                        <OptionCards
                          options={optionSets.gender}
                          value={values.gender}
                          onSelect={(l) => selectOption("gender", l)}
                          columns={3}
                          mobileColumns={3}
                        />
                        <FieldError error={errors.gender} />
                      </div>
                      <div className="grid grid-cols-3 gap-3 sm:gap-4">
                        <div>
                          <Label htmlFor="age" error={errors.age}>Age</Label>
                          <input
                            id="age"
                            type="number"
                            inputMode="numeric"
                            min={14}
                            max={90}
                            {...register("age")}
                            onChange={(e) => {
                              setValue("age", e.target.value, { shouldDirty: true });
                              if (errors.age) clearErrors(["age"]);
                            }}
                            placeholder="24"
                            className="input-field"
                          />
                          <FieldError error={errors.age} />
                        </div>
                        <div>
                          <Label htmlFor="heightCm" error={errors.heightCm}>Ht (cm)</Label>
                          <input
                            id="heightCm"
                            type="number"
                            inputMode="numeric"
                            {...register("heightCm")}
                            onChange={(e) => {
                              setValue("heightCm", e.target.value, { shouldDirty: true });
                              if (errors.heightCm) clearErrors(["heightCm"]);
                            }}
                            placeholder="168"
                            className="input-field"
                          />
                          <FieldError error={errors.heightCm} />
                        </div>
                        <div>
                          <Label htmlFor="weightKg" error={errors.weightKg}>Wt (kg)</Label>
                          <input
                            id="weightKg"
                            type="number"
                            inputMode="numeric"
                            {...register("weightKg")}
                            onChange={(e) => {
                              setValue("weightKg", e.target.value, { shouldDirty: true });
                              if (errors.weightKg) clearErrors(["weightKg"]);
                            }}
                            placeholder="72"
                            className="input-field"
                          />
                          <FieldError error={errors.weightKg} />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* Step 3 — Goal & Diet */}
                  {step === 2 ? (
                    <div className="flex flex-col gap-6">
                      <div>
                        <Label error={errors.goal}>Primary Fitness Goal</Label>
                        <OptionCards
                          options={optionSets.goal}
                          value={values.goal}
                          onSelect={(l) => selectOption("goal", l)}
                          columns={2}
                          mobileColumns={2}
                          showHint
                        />
                        <FieldError error={errors.goal} />
                      </div>
                      <div>
                        <Label error={errors.foodPreference}>Food Preference</Label>
                        <OptionCards
                          options={optionSets.foodPreference}
                          value={values.foodPreference}
                          onSelect={(l) => selectOption("foodPreference", l)}
                          columns={2}
                          mobileColumns={2}
                          compact={true}
                        />
                        <FieldError error={errors.foodPreference} />
                      </div>
                    </div>
                  ) : null}

                  {/* Step 4 — Struggles & Medicals */}
                  {step === 3 ? (
                    <div className="flex flex-col gap-6">
                      <div>
                        <Label error={errors.medicalConditions}>Do you have any medical conditions or joint pain?</Label>
                        <ChipMultiSelect
                          options={optionSets.medicalConditions}
                          value={values.medicalConditions || []}
                          onToggle={toggleMedical}
                        />
                        <FieldError error={errors.medicalConditions} />
                      </div>
                      <div>
                        <Label error={errors.challenge}>What is the single biggest obstacle holding you back?</Label>
                        <OptionCards
                          options={optionSets.challenge}
                          value={values.challenge}
                          onSelect={(l) => selectOption("challenge", l)}
                          columns={1}
                          showHint
                        />
                        <FieldError error={errors.challenge} />
                      </div>
                    </div>
                  ) : null}

                  {/* Step 5 — Contact Preference & Custom Question */}
                  {step === 4 ? (
                    <div className="flex flex-col gap-6">
                      <div>
                        <Label error={errors.bestTime}>Preferred Time for a Call / WhatsApp Chat</Label>
                        <OptionCards
                          options={optionSets.bestTime}
                          value={values.bestTime}
                          onSelect={(l) => selectOption("bestTime", l)}
                          columns={3}
                          mobileColumns={3}
                        />
                        <FieldError error={errors.bestTime} />
                      </div>
                      <div>
                        <Label htmlFor="notes" error={errors.notes}>
                          Ask our coach a specific question or describe your struggle:
                        </Label>
                        <textarea
                          id="notes"
                          rows={4}
                          {...register("notes")}
                          onChange={(e) => {
                            setValue("notes", e.target.value, { shouldDirty: true });
                            if (errors.notes) clearErrors(["notes"]);
                          }}
                          placeholder="Allergies, injuries, work shift constraints, or specific queries you want us to reply to..."
                          className="input-field resize-none"
                        />
                        <FieldError error={errors.notes} />
                      </div>
                    </div>
                  ) : null}

                  {/* Step 6 — Review */}
                  {step === 5 ? (
                    <div>
                      <div className="grid grid-cols-1 gap-x-6 gap-y-3 rounded-2xl bg-white/5 p-5 sm:grid-cols-2">
                        {[
                          ["Name", values.name],
                          ["Phone", values.phone],
                          ["Email", values.email],
                          ["Age", values.age],
                          ["Gender", values.gender],
                          ["Height", `${values.heightCm} cm`],
                          ["Weight", `${values.weightKg} kg`],
                          ["Goal", values.goal],
                          ["Food Preference", values.foodPreference],
                          ["Medical Conditions", (values.medicalConditions || []).join(", ")],
                          ["Biggest Challenge", values.challenge],
                          ["Best Time to Contact", values.bestTime],
                        ].map(([label, value]) => (
                          <div key={label}>
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                              {label}
                            </p>
                            <p className="mt-0.5 text-sm font-medium text-white">
                              {value || "—"}
                            </p>
                          </div>
                        ))}
                      </div>
                      {values.notes && (
                        <div className="mt-5 rounded-2xl bg-white/5 p-5">
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                            Your Questions / Comments
                          </p>
                          <p className="mt-1.5 text-sm font-medium leading-relaxed text-white/80 italic">
                            &ldquo;{values.notes}&rdquo;
                          </p>
                        </div>
                      )}
                    </div>
                  ) : null}

                  <FieldError error={errors.form} />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-9 flex items-center justify-between gap-3">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={goBack}
                  className="rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white/70 transition-colors hover:border-white/35 hover:text-white sm:px-6 sm:py-3.5"
                >
                  Back
                </button>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={goNext}
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime px-5 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:bg-[#d9ff45] hover:shadow-[0_10px_40px_-10px_rgba(204,255,0,0.7)] disabled:cursor-not-allowed disabled:opacity-60 sm:px-8 sm:py-4 sm:text-base"
              >
                {step === totalSteps - 1 ? "Submit Form" : "Continue"}
                {submitting ? (
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                )}
              </button>
            </div>

            {submitting ? (
              <div className="mt-6 rounded-2xl border border-lime/30 bg-lime/10 p-4 text-center">
                <p className="text-sm font-semibold text-lime">
                  Sending details to our coach...
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
