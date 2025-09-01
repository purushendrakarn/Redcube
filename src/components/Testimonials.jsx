const Testimonials = () => {
  const reviews = [
    {
      name: "Rohit Mehra",
      role: "Founder, Delhi Startup Hub",
      text: "Red³ Agency transformed our idea into a functional web app in record time. Their team was responsive, transparent, and truly cared about our vision.",
    },
    {
      name: "Ananya Gupta",
      role: "E-commerce Entrepreneur, Mumbai",
      text: "Our online sales doubled within 3 months after the new website launch. The design, SEO, and marketing strategy exceeded our expectations.",
    },
    {
      name: "Priya Menon",
      role: "Healthcare Consultant, Kochi",
      text: "Their software solution streamlined patient data management for our clinic. Secure, reliable, and extremely user-friendly.",
    },
    {
      name: "Vikram Desai",
      role: "CEO, FinTech Startup, Pune",
      text: "We needed a scalable SaaS platform, and they delivered beyond expectations. The tech stack and deployment were world-class.",
    },
    {
      name: "James Carter",
      role: "Tech Entrepreneur, London",
      text: "They built a custom dashboard for my SaaS project. Clean UI, excellent performance, and delivered ahead of schedule.",
    },
    {
      name: "Isabella Martinez",
      role: "Founder, Madrid Creative Studio",
      text: "The new website completely elevated our brand identity. Our clients compliment the design every single day.",
    },
    {
      name: "Meera Iyer",
      role: "Education Startup Founder, Chennai",
      text: "Their team created an e-learning platform with video, quizzes, and analytics. It’s helping thousands of students every month.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 lg:px-20 bg-[#111] text-center">
      <h2 className="text-3xl font-semibold mb-12">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] p-8 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-2"
          >
            {/* Avatar with initials */}
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold text-lg">
              {r.name.split(" ").map((n) => n[0]).join("")}
            </div>

            <p className="text-gray-300 italic mb-4">“{r.text}”</p>
            <h3 className="font-semibold text-lg">{r.name}</h3>
            <span className="text-sm text-gray-500">{r.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
