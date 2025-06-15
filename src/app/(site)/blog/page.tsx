import Head from "next/head";
import Link from "next/link";
import { getPostList } from "@/lib/posts";
import {Post} from "@/Interfaces/PostInterfaces";


const BlogPage = async () => {

    const allPosts: Post[] = await getPostList();

    return (
        <>
            <Head>
                <title>Blogs</title>
            </Head>
            <main>
                <section className="container mx-auto lg:max-w-5xl post-list mt-4">
                    <ul>
                        {allPosts.nodes.map((post) => (
                            <li key={post.slug} className="grid grid-cols-5 gap-4 mb-4">
                                <div className="col-span-2">
                                    {/* Display Featured Image if available */}
                                    {post.featuredImage?.node?.mediaDetails.sizes[0]?.sourceUrl && (
                                        <img
                                            src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                                            alt={post.title}
                                            className="w-full h-auto"
                                        />
                                    )}
                                </div>
                                <div className="col-span-3">
                                    <h2 className="py-4">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="text-blue-400 text-2xl hover:text-blue-600"
                                        >
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <div className="py-4">Published on {/* Add Date Logic here */}</div>
                                    <div className="text-lg" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                                    <div className="py-4">
                                        Posted under{" "}
                                        {post.categories.nodes.map((category) => (
                                            <Link
                                                key={category.slug}
                                                className="text-blue-400 hover:text-blue-500"
                                                href={`/category/${category.slug}`}
                                            >
                                                {category.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
};

export default BlogPage;
