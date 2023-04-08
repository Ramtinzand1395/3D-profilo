import { useTranslation } from "react-i18next";

const lngs = [
  { code: "en", native: "English" },
  { code: "fa", native: "فارسی" },
];

export default function Langchange() {
  const { i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div>
      {lngs.map((lng, index) => {
        const { code, native } = lng;
        return (
          <button
            key={index}
            className="bg-red-400 p-2 rounded-lg m-2"
            onClick={() => handleTrans(code)}
          >
            {native}
          </button>
        );
      })}
    </div>
  );
}
