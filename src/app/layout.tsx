import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "@jetio/schema-builder",
    template: "%s | @jetio/schema-builder",
  },
  description: "Json Schema compliant schema builder and type inference",
};

const banner = (
  <Banner storageKey="jet-schema-banner">
    @jetio/schema-builder docs are live 🎉
  </Banner>
);
const navbar = <Navbar logo={<b>@jetio/schema-builder</b>} />;
const footer = (
  <Footer>MIT {new Date().getFullYear()} © @jetio/schema-builder.</Footer>
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body
        className={`${outfit.className}  antialiased`}
      >
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/official-jetio/jet-schema-doc"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}