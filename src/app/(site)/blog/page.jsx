
import Link from "next/link";
// import { getPostList } from "@/lib/posts";
import Date from "@/components/Date";
import {getPosts} from "@/services/getPost.js";
import Description from "@/components/Ui/Descripton.jsx";
import Image from "next/image.js";

export const metadata = {
    title: "Mentor of Cure Blogs",
    description: "All about Health and well being",
};


const BlogPage = async () => {

    const allPosts = await getPosts();

    console.log(allPosts);

    return (
        <>
            <main>
                <section className="container mx-auto lg:max-w-5xl post-list mt-4">
                    <ul>
                        {allPosts.map((post) => (
                            <li key={post.id} className="grid grid-cols-5 gap-4 mb-4">
                                <div className="col-span-2">
                                    {post.featured_image && (
                                        <Image
                                        src={`https://wp.mentorofcure.com/${post.featured_image}`}
                                            alt={post.title}
                                            width={1024}
                                            height={1024}
                                            className="w-full h-auto"
                                        />
                                    )}
                                </div>
                                <div className="col-span-3">
                                    <h2 className="py-4">
                                        <Link
                                            href={`/blog/${post.id}`}
                                            className="text-blue-400 text-2xl hover:text-blue-600"
                                        >
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <div>
                                        <Description description={post.description} />
                                    </div>
                                    {/*<div className="py-4">Published on <Date dateString={post.date} /></div>*/}
                                    {/*<div className="text-lg" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>*/}
                                    {/*<div className="py-4">*/}
                                    {/*    Posted under{" "}*/}
                                    {/*    {post.categories.nodes.map((category) => (*/}
                                    {/*        <Link*/}
                                    {/*            key={category.slug}*/}
                                    {/*            className="text-blue-400 hover:text-blue-500"*/}
                                    {/*            href={`/category/${category.slug}`}*/}
                                    {/*        >*/}
                                    {/*            {category.name}*/}
                                    {/*        </Link>*/}
                                    {/*    ))}*/}
                                    {/*</div>*/}
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