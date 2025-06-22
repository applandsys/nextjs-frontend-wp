const getPostBySlug = async (slug) => {
    const res = await fetch(`https://wp.mentorofcure.com/api/blog/detail/${slug}`);
    const {data} = await res.json();

    return data;
}

export default getPostBySlug;

