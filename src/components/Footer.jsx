const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full py-2 px-6 lg:px-20 bg-[#111] text-center text-gray-400">
      <p className="text-sm">
        © {new Date().getFullYear()} Red³ Agency. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://www.instagram.com/redcubeagency"
          className="hover:text-white transition-colors"
        >
          <i className="bx bxl-instagram text-2xl"></i>
        </a>

        <a
          href="https://www.linkedin.com/company/red-cube-agency"
          className="hover:text-white transition-colors"
        >
          <i className="bx bxl-linkedin text-2xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
