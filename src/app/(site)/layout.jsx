
import ThemeLayout from "@/components/layouts/ThemeLayout";

export default function SiteLayout({
                                       children,
                                   }) {
    return (
        <ThemeLayout>
            {children}
        </ThemeLayout>
    );
}
