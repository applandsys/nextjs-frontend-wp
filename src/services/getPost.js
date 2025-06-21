const getPosts = async (page=1,count=10) => {
    const res = await fetch(`https://wp.mentorofcure.com/api/blogs?page=${page}&&count=${count}`);
    const {data} = await res.json();

    return data;
}

export {
    getPosts,
}