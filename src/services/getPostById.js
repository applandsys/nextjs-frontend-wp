const getPostById = async (postId) => {
    const res = await fetch(`https://wp.mentorofcure.com/api/blog/${postId}`);
    const {data} = await res.json();

    return data;
}

export default getPostById;

