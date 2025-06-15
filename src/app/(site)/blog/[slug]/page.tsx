import { notFound } from 'next/navigation';
import { getSinglePost } from '@/lib/posts';
import Head from 'next/head';
import Image from 'next/image';
import type { Metadata } from 'next';

type PageProps = {
    params: {
        slug: string;
    };
};

const PostDetailPage = async ({ params }: PageProps) => {
    const { slug } = params;
    const post = await getSinglePost(slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <main>
                <section className="container mx-auto lg:max-w-5xl post-detail mt-8">
                    <article>
                        <div className="mb-4">
                            {post.featuredImage?.node?.mediaDetails.sizes[0]?.sourceUrl && (
                                <Image
                                    src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                                    alt={post.title}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto mb-6"
                                />
                            )}
                        </div>
                        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                        <div className="text-lg text-gray-600 mb-6">
                            Published on {/* Add Date Logic here */}
                        </div>
                        <div
                            className="post-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        ></div>
                        <div className="py-6">
                            Posted under{' '}
                            {post.categories.nodes.map((category) => (
                                <span key={category.slug}>
                  <a
                      href={`/category/${category.slug}`}
                      className="text-blue-400 hover:text-blue-500"
                  >
                    {category.name}
                  </a>{' '}
                </span>
                            ))}
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
};

export default PostDetailPage;
