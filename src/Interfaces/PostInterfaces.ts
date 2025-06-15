export interface Category {
    name: string;
    slug: string;
}

export interface Post {
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    featuredImage: {
        node: {
            mediaDetails: {
                sizes: {
                    sourceUrl: string;
                    width: number;
                    height: number;
                }[];
            };
        };
    };
    categories: {
        nodes: Category[];
    };
}

// export interface PostDetailProps {
//     params: { slug: string };
// }