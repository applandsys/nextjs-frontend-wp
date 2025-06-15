export default async function graphqlRequest(query: { query: string; }) {
    const url = "https://wp.mentorofcure.com/graphql";
    const headers = { 'Content-Type': 'application/json' };

    if(process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        headers[
            'Authorization'
        ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
    }

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(query)
    });

    const resJson = await res.json();
    return resJson;

}