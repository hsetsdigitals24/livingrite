"use client"

export function RehabilitationPrograms() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center animate-slide-up">
            Our Rehabilitation Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Post-Surgical Recovery",
                description: "Specialized programs designed for patients recovering from orthopedic and general surgery.",
              },
              {
                title: "Injury Rehabilitation",
                description: "Comprehensive therapy for sports injuries, accidents, and work-related injuries.",
              },
              {
                title: "Stroke Recovery",
                description: "Intensive rehabilitation for stroke survivors focusing on neurological recovery and mobility.",
              },
              {
                title: "Joint Replacement Therapy",
                description: "Targeted exercises and treatment for hip, knee, and shoulder replacement recovery.",
              },
              {
                title: "Mobility Restoration",
                description: "Programs to improve balance, gait, and independence in daily activities.",
              },
              {
                title: "Pain Management",
                description: "Integrated approach to reduce pain and improve quality of life during recovery.",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-orange-500/20 rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">{program.title}</h3>
                <p className="text-gray-300 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
