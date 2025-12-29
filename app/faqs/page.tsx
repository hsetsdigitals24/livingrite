import FaqsAccordion from "@/components/faqs/faqs-accordion"

export const metadata = {
  title: "FAQs — LivingRite Care",
  description: "Frequently asked questions about our services, bookings, safety protocols and payments.",
}

const faqs = [
  {
    q: "What services does LivingRite Care provide?",
    a: "We provide post-stroke care, post-ICU support, physiotherapy sessions, live-in nursing, rehabilitation support, and end-of-life care — all delivered at home by hospital-trained clinicians.",
  },
  {
    q: "How do I book a free consultation?",
    a: "Click the 'Book a Consultation' button on any service page or use the contact form. We offer a free 15-minute intake call to assess needs and recommend the right service.",
  },
  {
    q: "Do you provide care equipment and supplies?",
    a: "Yes — where clinically required we arrange medical equipment setup and training for safe use at home. Equipment provision is discussed during the intake and care planning.",
  },
  {
    q: "Is your team licensed and background checked?",
    a: "All clinicians are hospital-trained and undergo background checks, credential verification and ongoing clinical supervision.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept major local payment methods and online payments; enterprise clients can be invoiced. Contact support for Paystack/Stripe arrangements.",
  },
  {
    q: "Can I request a specific caregiver?",
    a: "We match caregivers to clinical needs and family preferences; you can request specific personnel and we’ll do our best to accommodate availability.",
  },
  {
    q: "How do you handle emergencies?",
    a: "Our care teams follow emergency protocols and coordinate with local hospitals when necessary. We maintain escalation pathways and rapid response procedures.",
  },
  {
    q: "Do you offer caregiver training for family members?",
    a: "Yes — we provide caregiver coaching and practical training so families can safely support recovery at home.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-28 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">FAQs</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Clear answers about our services, bookings, safety protocols and payments.</p>
        </div>
      </section>

      <section className="py-12">
        <FaqsAccordion faqs={faqs} />
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Still have questions?</h3>
            <p className="text-sm text-gray-600">Reach out to our team for personalised answers and guidance.</p>
            <a href="/contact" className="inline-block mt-4 text-sm text-white bg-primary px-4 py-2 rounded-lg">Contact Us</a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Quick resources</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="/resources/post-stroke-guide" className="text-primary underline">Post-Stroke Recovery Guide</a></li>
              <li><a href="/resources/caregiver-checklist" className="text-primary underline">Family Caregiver Checklist</a></li>
              <li><a href="/contact" className="text-primary underline">Booking & Pricing</a></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
