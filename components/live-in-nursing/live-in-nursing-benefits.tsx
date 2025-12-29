"use client"

export function LiveInNursingBenefits() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center animate-slide-up">
            Benefits of Live-in Nursing Care
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Peace of Mind",
                description: "Know your loved one is receiving professional care 24/7 without worrying about gaps in coverage.",
              },
              {
                title: "Consistent Relationships",
                description: "A dedicated caregiver develops deep understanding of your loved one's needs and preferences.",
              },
              {
                title: "Medical Excellence",
                description: "Professional nurses manage complex medical needs, medications, and health monitoring.",
              },
              {
                title: "Family Time",
                description: "Caregiving responsibilities are lifted, allowing families to focus on meaningful moments together.",
              },
              {
                title: "Home Comfort",
                description: "Patients remain in familiar surroundings, which aids recovery and reduces stress.",
              },
              {
                title: "Cost-Effective",
                description: "More affordable than institutional care while providing superior personalized attention.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <h3 className="text-lg font-semibold text-secondary mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
