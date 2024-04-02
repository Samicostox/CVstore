import { FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa';


  export default function Footer() {
    return (
      <footer className="bg-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="https://www.tiktok.com/@innovation_studios_uk" className="text-gray-200 hover:text-teal-500">
              <FaTiktok className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/innovationstudiosuk/" className="text-gray-200 hover:text-teal-500">
              <FaInstagram className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/company/innovation-studios-uk" className="text-gray-200 hover:text-teal-500">
              <FaLinkedin className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-white">
              &copy; 2024 Innovation Studios Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }