"use client";

import dynamic from "next/dynamic";

const DynamicCertificates = dynamic(() => import("../homepage/certificates"), {
  ssr: false,
});

export default function CertificatesWrapper() {
  return <DynamicCertificates />;
}
