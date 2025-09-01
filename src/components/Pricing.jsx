const Pricing = () => {
  const services = [
    {
      category: "Website Development",
      plans: [
        {
          name: "Basic Website",
          price: "₹20,000 – ₹50,000",
          description: "5-8 page informational site, responsive design, basic SEO",
        },
        {
          name: "Business Website",
          price: "₹50,000 – ₹1,50,000",
          description: "CMS, blogs, dynamic content, SEO & analytics",
        },
        {
          name: "E-commerce Website",
          price: "₹1,50,000 – ₹4,00,000",
          description: "Online store with product management, payments, custom features",
        },
        {
          name: "Enterprise Solutions",
          price: "₹2,00,000 – ₹6,00,000+",
          description: "Custom features, integrations, scalability, dedicated support",
        },
      ],
    },
    {
      category: "App Development",
      plans: [
        {
          name: "Basic App",
          price: "₹1,50,000 – ₹3,00,000",
          description: "Simple mobile app with core features, Android/iOS single platform",
        },
        {
          name: "Cross-Platform App",
          price: "₹3,00,000 – ₹6,00,000",
          description: "React Native/Flutter app, APIs, multi-device support",
        },
        {
          name: "Advanced App",
          price: "₹6,00,000 – ₹12,00,000+",
          description: "Custom features, payments, chat, maps, scalability & security",
        },
      ],
    },
    {
      category: "Software Development",
      plans: [
        {
          name: "Custom Business Software",
          price: "₹2,00,000 – ₹6,00,000",
          description: "Tailored apps for small businesses (CRM, inventory, HRMS)",
        },
        {
          name: "Enterprise Software",
          price: "₹6,00,000 – ₹12,00,000",
          description: "ERP, SaaS platforms, multi-user apps with integrations",
        },
        {
          name: "Large-Scale Systems",
          price: "₹12,00,000 – ₹15,00,000+",
          description: "AI/ML, cloud solutions, high-performance & secure systems",
        },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 lg:px-20 text-center">

      {services.map((service, si) => (
        <div key={si} className="mb-16">
          <h3 className="text-2xl font-bold mb-8">{service.category}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {service.plans.map((p, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold mb-4">{p.name}</h4>
                <p className="text-2xl font-bold mb-4">{p.price}</p>
                <p className="mb-6 text-gray-400">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Pricing;
