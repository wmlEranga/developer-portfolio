import Image from "next/image";
import { FaMedal, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

const CertificateCard = ({ certificate }) => {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] overflow-hidden shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.02] flex flex-col md:flex-row w-full h-[450px] md:h-[300px]">
      {/* Certificate Image */}
      <div className="relative w-full md:w-1/2 h-[200px] md:h-full">
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Certificate Info */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#16f2b3] mb-2 line-clamp-2">
            {certificate.title}
          </h3>

          <div className="flex items-center gap-2 text-gray-300 mb-2">
            <FaMedal className="text-[#16f2b3] flex-shrink-0" />
            <span className="line-clamp-1">{certificate.issuedBy}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-300 mb-4">
            <FaCalendarAlt className="text-[#16f2b3] flex-shrink-0" />
            <span>{certificate.date}</span>
          </div>

          <p className="text-gray-300 mb-6 line-clamp-3">
            {certificate.description}
          </p>
        </div>

        {certificate.credentialLink && (
          <a
            href={certificate.credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#16f2b3] hover:underline w-fit mt-auto"
          >
            <span>View Credential</span>
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;
