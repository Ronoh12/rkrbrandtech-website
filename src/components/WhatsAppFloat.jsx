export default function WhatsAppFloat() {
  const phone = "254729279513";
  const message = encodeURIComponent(
    "Hi RKR BrandTech Solutions. I’d like to request remote IT support / cybersecurity assistance."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="
        fixed bottom-5 right-5 z-50
        h-12 w-12
        rounded-full
        bg-green-600
        flex items-center justify-center
        shadow-lg shadow-green-600/20
        hover:bg-green-500
        transition
        group
      "
      title="Chat on WhatsApp"
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 text-white"
      >
        <path d="M12.04 2C6.58 2 2.15 6.44 2.15 11.9c0 1.98.58 3.91 1.68 5.57L2 22l4.66-1.74a9.8 9.8 0 0 0 5.38 1.56h.01c5.46 0 9.89-4.44 9.89-9.9C21.93 6.44 17.5 2 12.04 2Zm5.77 14.08c-.24.67-1.18 1.23-1.66 1.3-.43.06-.99.09-1.6-.1-.37-.12-.85-.28-1.46-.55-2.56-1.11-4.22-3.84-4.35-4.01-.13-.17-1.04-1.38-1.04-2.63 0-1.25.65-1.86.88-2.12.23-.26.5-.32.67-.32.17 0 .34 0 .48.01.16.01.38-.06.6.46.24.58.82 2 .89 2.15.07.15.12.34.02.52-.1.17-.15.34-.3.52-.15.17-.32.38-.46.51-.15.15-.3.31-.13.59.17.28.75 1.24 1.6 2 .9.8 1.66 1.05 1.94 1.17.28.12.44.1.6-.07.17-.17.69-.8.88-1.08.18-.28.36-.23.6-.14.24.1 1.53.72 1.79.85.26.13.43.2.5.31.07.11.07.64-.17 1.31Z" />
      </svg>

      {/* Tooltip on hover */}
      <span
        className="
          absolute right-14 bottom-2
          hidden md:block
          whitespace-nowrap
          rounded-lg
          border border-white/10
          bg-black/70 backdrop-blur
          px-3 py-2 text-xs text-gray-200
          opacity-0 group-hover:opacity-100
          transition
        "
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
