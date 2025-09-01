const TITLE = "Guide to Software in Climate Tech - Stepchange";
const DESCRIPTION =
  "A comprehensive guide to applying software to address climate change, from the Stepchange team.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [
    { name: "Ben", url: "https://www.linkedin.com/in/beneidelson/" },
    { name: "Nathan", url: "https://www.linkedin.com/in/nathan-eidelson-a201a734/" },
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://stepchange.vc/software",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@stepchange_vc",
  },
};

export default function SoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="my-20 sm:my-32 px-6 max-w-screen-sm xl:max-w-screen-lg mx-auto xl:gap-x-32 xl:grid grid-cols-5">
      {children}
    </main>
  );
}