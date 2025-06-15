import { notFound } from 'next/navigation';
import { getSinglePost } from '@/lib/posts';
import Image from 'next/image';


export default async function PostDetailPage({ params }) {
    const post = await getSinglePost(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <main className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

                {post.featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl && (
                    <Image
                        src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                        alt={post.title}
                        width={800}
                        height={450}
                        className="mb-6 rounded-lg"
                    />
                )}

                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {post.categories?.nodes?.length > 0 && (
                    <div className="mt-6 text-sm text-gray-600">
                        <span>Categories: </span>
                        {post.categories.nodes.map((category, index) => (
                            <span key={category.slug}>
              {index > 0 && ', '}
                                <a href={`/category/${category.slug}`} className="text-blue-500 hover:underline">
                {category.name}
              </a>
            </span>
                        ))}
                    </div>
                )}
            </main>
        </>
    );
}
