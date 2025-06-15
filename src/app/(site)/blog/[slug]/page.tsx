import { notFound } from 'next/navigation';
import { getSinglePost } from '@/lib/posts';
import Head from 'next/head';
import {PostDetailProps} from "@/Interfaces/PostInterfaces";
import Image from 'next/image';

const PostDetailPage = async ({ params }: PostDetailProps) => {
    const { slug } = params;

    // Fetch the single post based on the slug
    const post = await getSinglePost(slug);

    // If the post is not found, return a 404 page
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
                            {/* Display the featured image if available */}
                            {post.featuredImage?.node?.mediaDetails.sizes[0]?.sourceUrl && (
                                <Image
                                    src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                                    alt={post.title}
                                    width={800} // Replace with actual width or use dynamic values
                                    height={600} // Replace with actual height or use dynamic values
                                    className="w-full h-auto mb-6"
                                />
                            )}
                        </div>
                        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                        <div className="text-lg text-gray-600 mb-6">
                            {/* You can display the post's date here */}
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
                  </a>
                                    {' '}
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
