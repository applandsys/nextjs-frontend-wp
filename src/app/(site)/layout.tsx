import type { Metadata } from "next";
import ThemeLayout from "@/components/layouts/ThemeLayout";

export const metadata: Metadata = {
    title: "Mentor of Cure",
    description: "All about Health and well being",
};

export default function SiteLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeLayout>
            {children}
        </ThemeLayout>
    );
}
