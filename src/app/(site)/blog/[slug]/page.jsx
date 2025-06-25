import { notFound } from 'next/navigation';
import Image from 'next/image';
import Description from "@/components/Ui/Descripton.jsx";
import getPostBySlug from "@/services/getPostBySlug.js";

// For SEO Metadata
export async function generateMetadata({ params }) {
    const { slug } = params;
    const post = await getPostBySlug(slug);

    if (!post) notFound();

    return {
        title: post.news.title,
        description: post.news.description,
        openGraph: {
            title: post.news.title,
            description: post.news.description,
            images: post.news.featured_image
                ? [`https://wp.mentorofcure.com/${post.news.featured_image}`]
                : [],
        },
    };
}

// Page Component
export default async function PostDetailPage({ params }) {
    const { slug } = params;
    const post = await getPostBySlug(slug);

    if (!post) notFound();

    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{post.news.title}</h1>

            {/* Featured Image */}
            {post.news.featured_image && (
                <Image
                    src={`https://wp.mentorofcure.com/${post.news.featured_image}`}
                    alt={post.news.title}
                    width={1024}
                    height={1024}
                    className="w-full h-auto"
                    priority
                />
            )}

            {/* Description */}
            <div>
                <Description description={post.news.description} />
            </div>
        </main>
    );
}
