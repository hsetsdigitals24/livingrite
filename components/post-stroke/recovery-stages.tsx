"use client"

const stages = [
  { title: "Acute Stabilization", desc: "Initial medical stabilization and early mobility" },
  { title: "Functional Recovery", desc: "Task-specific rehab to restore daily activities" },
  { title: "Strength & Endurance", desc: "Build stamina and reduce fatigue with graded therapy" },
  { title: "Community Reintegration", desc: "Safe return to home routines and social activities" },
]

export function RecoveryStages() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Recovery Stages</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {stages.map((s) => (
            <div key={s.title} className="bg-white p-4 rounded-xl border">
              <h4 className="font-medium text-slate-800">{s.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecoveryStages
