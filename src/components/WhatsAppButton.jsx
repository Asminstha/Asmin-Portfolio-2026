const BUTTON_SIZE = 42;

export default function WhatsAppButton({
  phone = "+9779861362710",
  message = "Hi! I found you from your portfolio.",
  positionClass = "left-6 bottom-6 md:left-10 md:bottom-10"
}) {
  const waNumber = phone.replace(/[^+\d]/g, "");
  const waUrl = `https://wa.me/${waNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed z-50 ${positionClass} flex items-center justify-center 
      hover:scale-110 active:scale-95 focus:scale-105 transition-transform duration-150`}
      style={{
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
      }}
    >
      <span
        className="
          flex items-center justify-center rounded-full
          bg-[#25D366]
          shadow-md
        "
        style={{
          width: BUTTON_SIZE,
          height: BUTTON_SIZE,
        }}
      >
        {/* Minimal WhatsApp SVG: Phone in chat bubble */}
        <svg
          width={22}
          height={22}
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <g>
            <path
              fill="#fff"
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164s-.347.223-.644.075c-.297-.149-1.256-.463-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.346.447-.519.149-.173.198-.298.298-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.613-.917-2.207-.242-.579-.487-.501-.669-.511-.173-.011-.372-.013-.571-.013-.198 0-.52.075-.793.372-.273.297-1.042 1.018-1.042 2.481 0 1.462 1.067 2.876 1.216 3.074.148.198 2.099 3.309 5.077 4.509.711.306 1.265.489 1.698.626.713.226 1.36.194 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.289.173-1.413-.074-.125-.273-.198-.57-.347zm-5.421 5.605a8.821 8.821 0 01-4.688-1.366l-.337-.201-3.484.917.93-3.398-.217-.348A8.814 8.814 0 013.18 12.23c0-4.866 3.957-8.824 8.824-8.824 2.36 0 4.577.918 6.247 2.589a8.712 8.712 0 012.577 6.235c-.003 4.867-3.96 8.824-8.827 8.824z"
            />
          </g>
        </svg>
      </span>
    </a>
  );
}