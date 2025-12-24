"use client"

export function SupportServices() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center animate-slide-up">
            Family Support Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Respite Care",
                description: "Temporary care allowing primary caregivers to take necessary breaks and rest.",
              },
              {
                title: "Counseling Services",
                description: "Professional counseling for grief, stress, and emotional challenges of caregiving.",
              },
              {
                title: "Support Groups",
                description: "Peer support groups where caregivers share experiences and provide mutual encouragement.",
              },
              {
                title: "Caregiver Training",
                description: "Education and training programs to improve caregiving skills and confidence.",
              },
              {
                title: "Care Coordination",
                description: "Professional coordination of care services and medical appointments.",
              },
              {
                title: "Resource Navigation",
                description: "Guidance in accessing community resources, benefits, and support services.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
