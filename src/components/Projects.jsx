const Projects = () => {
  const projects = [
    {
      img: "https://tekplus.ca/wp-content/uploads/2023/01/ecommerce.jpeg", // E-commerce Platform
      title: "E-commerce Platform",
      desc: "Full-featured online store with payment integration, product management, and responsive design. Built using React, Node.js, and MongoDB.",
    },
    {
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80", // Business Website
      title: "Business Website",
      desc: "Corporate website with CMS, dynamic content, SEO optimization, and mobile-first design. Developed with Next.js and Tailwind CSS.",
    },
    {
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80", // Mobile App
      title: "Mobile App",
      desc: "Cross-platform app for booking services with push notifications, analytics, and real-time updates. Built using Flutter and Firebase.",
    },
    {
      img: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80", // SaaS Dashboard
      title: "SaaS Dashboard",
      desc: "Admin dashboard with charts, reporting tools, and user management. Developed with React, Redux, and Chart.js.",
    },
    {
      img: "https://cdn.prod.website-files.com/650c1bee516c4e723b11b29a/65206264927e177f8bd65950_651f6a5b0bcc2eb5956182ea_Top%252050%2520Healthcare%2520Companies%2520and%2520Their%2520Impact%2520on%2520the%2520Industry.webp", // Healthcare Portal
      title: "Healthcare Portal",
      desc: "Patient management portal with appointment scheduling, secure login, and data analytics. Built with Node.js, Express, and MongoDB.",
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // Creative Studio
      title: "Creative Studio Website",
      desc: "Portfolio website for a design agency with interactive animations and custom UI. Built using React and GSAP.",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-20">
      <h2 className="text-3xl font-semibold text-center mb-12">Our Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <div key={i} className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-gray-300 text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
