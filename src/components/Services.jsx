const Services = () => {
  const services = [
    {
      icon: "bx bx-code",
      title: "Web Development",
      desc: "Responsive, high-performance websites built with the latest frameworks (React, Next.js, MERN). Tailored for startups, businesses, and enterprises.",
    },
    {
      icon: "bx bx-mobile-alt",
      title: "App Development",
      desc: "Cross-platform mobile & desktop applications using React Native and Flutter. Smooth, scalable, and optimized for performance.",
    },
    {
      icon: "bx bx-paint",
      title: "UI/UX Design",
      desc: "Intuitive user experiences and modern designs that boost engagement. From wireframes to pixel-perfect prototypes.",
    },
    {
      icon: "bx bx-trending-up",
      title: "Digital Marketing",
      desc: "SEO, Google Ads, and social media campaigns that drive real traffic and measurable growth for your business.",
    },
    {
      icon: "bx bx-data",
      title: "Software Development",
      desc: "Custom business software, ERP solutions, and automation tools designed to simplify operations and increase efficiency.",
    },
    {
      icon: "bx bx-cloud",
      title: "Cloud & DevOps",
      desc: "Cloud hosting, CI/CD pipelines, and scalable infrastructure solutions on AWS, Azure, and GCP for modern businesses.",
    },
    {
      icon: "bx bx-cart",
      title: "E-commerce Solutions",
      desc: "Full-stack e-commerce platforms with secure payment gateways, product management, and advanced analytics.",
    },
    {
      icon: "bx bx-shield",
      title: "Cybersecurity",
      desc: "Security audits, penetration testing, and advanced protection to safeguard your business from digital threats.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 lg:px-20 text-center">
      <h2 className="text-3xl font-semibold mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] p-8 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <i className={`${s.icon} text-4xl mb-4 text-orange-400`}></i>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
