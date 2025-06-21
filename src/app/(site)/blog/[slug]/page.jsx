import { notFound } from 'next/navigation';
import { getSinglePost } from '@/lib/posts';
import Image from 'next/image';
import getPostById from "@/services/getPostById.js";
import Description from "@/components/Ui/Descripton.jsx";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPostById(slug);

    if (!post) {
        notFound();
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            images: post.featured_image || null,
        },
    };
}


export default async function PostDetailPage({ params }) {
    const { slug } = await params;
    const post = await getPostById(slug);

    if (!post) {
        notFound();
    }

    console.log(post);

    return (
        <>
            <main className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">{post.news.title}</h1>
                {post.news.featured_image && (
                    <Image
                        src={`https://wp.mentorofcure.com/${post.news.featured_image}`}
                        alt={post.news.title}
                        width={1024}
                        height={1024}
                        className="w-full h-auto"
                    />
                )}

                <div>
                    <Description description={post.news.description} />
                </div>



            </main>
        </>
    );
}
