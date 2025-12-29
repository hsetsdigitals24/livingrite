"use client"

export function CompassionateCare() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center animate-slide-up">
            Our Approach to Care
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Holistic Care",
                description: "We address physical, emotional, and spiritual needs of patients and families.",
              },
              {
                title: "Family-Centered",
                description: "Involving family members in care decisions and providing comprehensive family support.",
              },
              {
                title: "Comfort First",
                description: "Prioritizing comfort, pain management, and quality of life above all else.",
              },
              {
                title: "Professional Counseling",
                description: "Access to grief counselors and therapists for emotional and psychological support.",
              },
              {
                title: "Spiritual Support",
                description: "Respecting spiritual and religious beliefs with support from appropriate resources.",
              },
              {
                title: "Legacy Planning",
                description: "Helping families create meaningful moments and preserve precious memories.",
              },
            ].map((aspect, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-rose-500/20 rounded-lg p-6 hover:border-rose-500/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">{aspect.title}</h3>
                <p className="text-gray-300 leading-relaxed">{aspect.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
