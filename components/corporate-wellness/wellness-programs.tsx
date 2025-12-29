"use client"

export function WellnessPrograms() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center animate-slide-up">
            Corporate Wellness Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Health Assessments",
                description: "Comprehensive health screenings and personalized wellness evaluations for employees.",
              },
              {
                title: "Fitness Programs",
                description: "On-site fitness classes, gym memberships, and personalized exercise programs.",
              },
              {
                title: "Nutrition Counseling",
                description: "Dietary guidance and meal planning workshops to promote healthy eating habits.",
              },
              {
                title: "Mental Health Support",
                description: "Stress management, meditation, and access to counseling services for mental wellbeing.",
              },
              {
                title: "Occupational Health",
                description: "Ergonomic assessments, injury prevention, and workplace health optimization.",
              },
              {
                title: "Wellness Incentives",
                description: "Reward programs and challenges to encourage ongoing participation and engagement.",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-6 hover:border-indigo-500/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">{program.title}</h3>
                <p className="text-gray-300 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
