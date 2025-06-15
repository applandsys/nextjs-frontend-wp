
import ThemeLayout from "@/components/layouts/ThemeLayout";

export const metadata = {
    title: "Mentor of Cure",
    description: "All about Health and well being",
};

export default function SiteLayout({
                                       children,
                                   }) {
    return (
        <ThemeLayout>
            {children}
        </ThemeLayout>
    );
}
