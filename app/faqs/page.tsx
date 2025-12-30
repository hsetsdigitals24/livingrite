"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

// export const metadata = {
//   title: "FAQs — LivingRite Care",
//   description: "Frequently asked questions about our services, bookings, safety protocols and payments.",
// }

interface FaqItem {
  q: string
  a: string
}

interface FaqCategory {
  name: string
  icon: string
  color: string
  faqs: FaqItem[]
}

const faqCategories: FaqCategory[] = [
  {
    name: "Booking and First Steps",
    icon: "📅",
    color: "from-blue-50 to-cyan-50",
    faqs: [
      {
        q: "How do I book a consultation with Livingrite Care?",
        a: "You can book a free 30-minute consultation from our website through this link. You can also contact us on WhatsApp at +234 703 593 2851 or +234 810 683 4519.",
      },
      {
        q: "Is the first consultation free?",
        a: "Yes. Our initial 30-minute consultation is free. During that time a doctor or a qualified nurse will assess your loved one's needs and explain how we can provide care for them.",
      },
      {
        q: "How long after the consultation will care start?",
        a: "Care usually begins once the care plan is approved and payment and logistics are finalized. We aim to start as soon as availability and logistics are settled between us and you.",
      },
    ],
  },
  {
    name: "Services and Care Plans",
    icon: "🏥",
    color: "from-emerald-50 to-teal-50",
    faqs: [
      {
        q: "What services does Livingrite Care offer?",
        a: "We offer neurorehabilitation, post-ICU recovery, post-surgical care, palliative and end-of-life care, geriatric care, and chronic wound management. Some of our additional services include home medical consultations, physiotherapy, routine laboratory services, and postpartum care.",
      },
      {
        q: "What does \"doctor-led\" care mean?",
        a: "Doctor-led care means our clinical protocols are designed and supervised by well-trained and experienced medical doctors, including neurocritical care specialists. A doctor provides clinical oversight, plans care, and is available for escalation when needed.",
      },
      {
        q: "What are your home care tier plans?",
        a: "We offer tailored tiers to match medical need and intensity. For neurorehabilitation we have Platinum, Diamond, and Gold tiers with each tier having different mixes of care providers assigned to your loved one.",
      },
      {
        q: "Do you provide 24-hour live-in care?",
        a: "Yes. We offer 24-hour live-in care options for patients who need continuous supervision and support.",
      },
      {
        q: "How is a care plan created and approved?",
        a: "After the free consultation, the clinician who assessed the patient drafts a personalized care plan. We send this plan to the family for review. Once the family approves and the payment and logistics are finalized, we implement the plan.",
      },
    ],
  },
  {
    name: "Costs, Payments, and Policies",
    icon: "💳",
    color: "from-amber-50 to-orange-50",
    faqs: [
      {
        q: "How much do your services cost?",
        a: "Costs depend on the service type, care tier, duration, and clinical needs you or your loved one might require. We provide a detailed cost estimate after the consultation and planning stage. For pricing details, please contact our team.",
      },
      {
        q: "Which payment methods do you accept?",
        a: "We accept different payment methods. Please contact us via email livingritecare@gmail.com or via whatsapp to discuss your payment method.",
      },
      {
        q: "What is your refund and cancellation policy?",
        a: "We have a transparent refund and cancellation policy. Requests should be made within ten working days and will be processed in line with our terms and conditions.",
      },
    ],
  },
  {
    name: "Clinical Safety and Emergency Handling",
    icon: "🚑",
    color: "from-red-50 to-rose-50",
    faqs: [
      {
        q: "What happens if my loved one's condition suddenly worsens at home?",
        a: "Caregivers are trained to provide immediate first-response care to stabilize the patient. The situation is quickly escalated to a supervising doctor. If needed, the doctor will attend in person or arrange a hospital transfer. We ensure that families are carried along every step of the way.",
      },
      {
        q: "Do you refer patients back to the hospital when needed?",
        a: "If needed, yes we do. We evaluate each situation and refer to hospital care when higher-level intervention is needed. We support the family through the transfer to ensure continuity of care.",
      },
      {
        q: "What clinical qualifications do your staff have?",
        a: "Our teams include medical doctors, neurocritical care specialists, registered nurses, physiotherapists, speech therapists, nutritionists, and trained nursing assistants. So be rest assured that your loved ones are in the safest hands.",
      },
    ],
  },
  {
    name: "Client Portal and Communication",
    icon: "💬",
    color: "from-purple-50 to-pink-50",
    faqs: [
      {
        q: "What information will I get through the client portal?",
        a: "Families receive daily care logs that include a summary of pathology, care given, current vital signs, medications and refill alerts, food and fluid intake, and any new complaints. Weekly reports include visual graphs tracking vital sign trends and recovery progress.",
      },
      {
        q: "How do families communicate with the care team?",
        a: "Families can communicate via the client portal, WhatsApp, SMS, or email. We also provide an admin contact number for daily updates or urgent questions.",
      },
    ],
  },
  {
    name: "Recovery Expectations",
    icon: "📈",
    color: "from-green-50 to-emerald-50",
    faqs: [
      {
        q: "How long will it take to see improvement?",
        a: "Recovery timelines vary by condition, severity, and individual response to therapy. Your clinician will set realistic milestones in the care plan and monitor progress. We focus on measurable, humane goals and share progress with your family regularly.",
      },
      {
        q: "Can Livingrite Care support stroke recovery at home?",
        a: "Yes. We provide specialized neurorehabilitation for stroke recovery. Our programs combine medical oversight with physiotherapy, speech therapy, nutrition support, and caregiver training.",
      },
      {
        q: "Can you provide end-of-life care at home?",
        a: "Yes. We offer compassionate palliative care and end-of-life support focused on pain control, comfort, dignity, and family support.",
      },
    ],
  },
  {
    name: "Corporate and Community",
    icon: "🤝",
    color: "from-indigo-50 to-blue-50",
    faqs: [
      {
        q: "Do you provide corporate wellness or employer packages?",
        a: "We are developing corporate care packages for 2026 that will include routine screening and health packages. Please contact us for planning and partnership discussions.",
      },
      {
        q: "What is Living Well with Livingrite Care?",
        a: "This is our email and WhatsApp community. It shares practical health tips, myth-busting information, caregiver support, and preventive care advice. It is a safe space for families and caregivers to learn and ask questions.",
      },
    ],
  },
  {
    name: "Location and Coverage",
    icon: "📍",
    color: "from-cyan-50 to-blue-50",
    faqs: [
      {
        q: "Where do you operate?",
        a: "Our primary operations are in Lagos, Nigeria. We deliver services across Lagos and can support clients in nearby regions. For locations outside Lagos please contact us to discuss feasibility.",
      },
      {
        q: "How do I know if you can come to my area?",
        a: "Contact us with your full address and we will confirm availability and logistics.",
      },
    ],
  },
  {
    name: "Testimonials and Evidence",
    icon: "⭐",
    color: "from-yellow-50 to-amber-50",
    faqs: [
      {
        q: "Do you have client reviews I can read?",
        a: "Yes. We have verified reviews on our Google My Business profile and additional feedback via WhatsApp. We also collect video testimonials with permission and plan to display selected case stories responsibly.",
      },
    ],
  },
]

function FaqAccordionItem({ q, a }: FaqItem) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary/30 transition">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition"
      >
        <span className="text-left font-medium text-gray-900">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-28 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">FAQs</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our services, bookings, safety protocols, and more.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {faqCategories.map((category) => (
            <div key={category.name}>
              <div className={`bg-gradient-to-r ${category.color} rounded-xl p-6 mb-8`}>
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  {category.name}
                </h2>
              </div>
              <div className="space-y-4">
                {category.faqs.map((faq, idx) => (
                  <FaqAccordionItem key={idx} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-sm text-gray-600 mb-4">Our team is ready to help with any additional questions.</p>
              <a href="https://wa.me/+2347035932851" className="inline-block text-sm text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition">Contact via WhatsApp</a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Email us</h3>
              <p className="text-sm text-gray-600 mb-4">Get detailed information tailored to your needs.</p>
              <a href="mailto:livingritecare@gmail.com" className="inline-block text-sm text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition">Send an Email</a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Book a consultation</h3>
              <p className="text-sm text-gray-600 mb-4">Get a free 30-minute assessment from our experts.</p>
              <a href="#contact" className="inline-block text-sm text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition">Book Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
