import { z } from "zod";

const indianPhone = z
  .string()
  .transform((v) => v.replace(/[\s-]/g, ""))
  .pipe(z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"));

const numeric = (msg, min, minMsg, max, maxMsg) =>
  z.preprocess(
    (v) => (v === "" || v === null || v === undefined ? NaN : Number(v)),
    z
      .number({ message: msg })
      .int({ message: msg })
      .min(min, minMsg)
      .max(max, maxMsg)
  );

export const formSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(60),
  phone: indianPhone,
  email: z.string().email("Enter a valid email address"),
  age: numeric("Enter your age", 14, "Minimum age is 14", 90, "Maximum age is 90"),
  gender: z.string().min(1, "Select your gender"),
  heightCm: numeric("Enter your height", 100, "Height must be 100cm+", 250, "Height must be under 250cm"),
  weightKg: numeric("Enter your weight", 30, "Weight must be 30kg+", 250, "Weight must be under 250kg"),
  goal: z.string().min(1, "Select your goal"),
  foodPreference: z.string().min(1, "Select your food preference"),
  medicalConditions: z.array(z.string()).min(1, "Select at least one option"),
  challenge: z.string().min(1, "Select your biggest challenge"),
  bestTime: z.string().min(1, "Select preferred contact time"),
  notes: z.string().max(500).optional().or(z.literal("")),
});

export const stepFields = [
  ["name", "phone", "email"],
  ["age", "gender", "heightCm", "weightKg"],
  ["goal", "foodPreference"],
  ["medicalConditions", "challenge"],
  ["bestTime", "notes"],
  [],
];

export function validateStep(stepIndex, values) {
  const fields = stepFields[stepIndex] ?? [];
  if (fields.length === 0) return { success: true, data: values, error: null };
  
  const pickMask = fields.reduce((acc, f) => {
    acc[f] = true;
    return acc;
  }, {});
  
  const result = formSchema.pick(pickMask).safeParse(values);
  if (result.success) return { success: true, data: values, error: null };
  
  const fieldErrors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0];
    if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
  }
  return { success: false, data: values, error: fieldErrors };
}

export const optionSets = {
  gender: [
    { label: "Male", icon: "male" },
    { label: "Female", icon: "female" },
    { label: "Other", icon: "other" },
  ],
  goal: [
    { label: "Lose Fat", icon: "flame", hint: "Burn fat & slim down" },
    { label: "Gain Muscle", icon: "muscle", hint: "Build lean mass" },
    { label: "Body Recomposition", icon: "recomp", hint: "Lose fat, gain muscle" },
    { label: "Maintenance", icon: "shield", hint: "Stay fit & healthy" },
  ],
  foodPreference: [
    { label: "Veg", icon: "veg" },
    { label: "Non-Veg", icon: "nonveg" },
    { label: "Eggetarian", icon: "egg" },
    { label: "Vegan", icon: "vegan" },
  ],
  medicalConditions: [
    { label: "Diabetes", value: "Diabetes" },
    { label: "PCOS / PCOD", value: "PCOS" },
    { label: "Thyroid Issues", value: "Thyroid" },
    { label: "Hypertension", value: "Hypertension" },
    { label: "Joint / Back Pain", value: "Joint Pain" },
    { label: "Food Allergies", value: "Food Allergies" },
    { label: "None", value: "None" },
  ],
  challenge: [
    { label: "Lack of Consistency", value: "Consistency", hint: "Struggling to stay motivated day to day" },
    { label: "Busy Schedule / Work Stress", value: "Schedule", hint: "Long office hours or work pressure" },
    { label: "Cravings & Snacking", value: "Cravings", hint: "Hard to control sweet tooth or late night snacking" },
    { label: "Confused about Diet", value: "Confusion", hint: "Don't know what/how much to eat or cook" },
    { label: "Low Energy Levels", value: "Energy", hint: "Feeling tired and exhausted throughout the day" },
  ],
  bestTime: [
    { label: "Morning (9 AM – 12 PM)", value: "Morning" },
    { label: "Afternoon (12 PM – 4 PM)", value: "Afternoon" },
    { label: "Evening (4 PM – 8 PM)", value: "Evening" },
  ],
};
