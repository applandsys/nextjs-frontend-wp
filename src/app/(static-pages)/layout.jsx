
import ThemeLayout from "@/components/layouts/ThemeLayout";

export default function StaticPageLayout({
                                       children,
                                   }) {
    return (
        <ThemeLayout>
            {children}
        </ThemeLayout>
    );
}
