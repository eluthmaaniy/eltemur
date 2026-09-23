import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Eltemur Zentra Studio, a Nigerian technology company building SaaS, websites, web apps, and mobile apps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo-horizontal.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          color: "#17213A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
        }}
      >
        {/* Satori renders this file. next/image is not available inside ImageResponse. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={460} height={63} alt="" />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              width: 72,
              height: 6,
              background: "#2457E6",
              marginBottom: 28,
            }}
          />
          <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.04em" }}>
            SaaS, websites, web apps, and mobile apps.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#3E4C63" }}>
          A registered technology company in Nigeria
        </div>
      </div>
    ),
    { ...size },
  );
}
