document.addEventListener("DOMContentLoaded", () => {

    const token = document.cookie
        .split("; ")
        .find(c => c.startsWith("token="))
        ?.split("=")[1];

    if (!token) {
        console.error("Token not found in cookies");
        return;
    }

    const url =
        "https://playerok.com/graphql?operationName=user&variables=%7B%22username%22%3A%22Un1version%22%2C%22hasSupportAccess%22%3Afalse%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%222e2e3b656d2ba48e0b2cd5eeedf88ef70e4aabb4ac4d9d9e9b8feff343a37d98%22%7D%7D";

    fetch(url, {
        headers: {
            "accept": "*/*",
            "content-type": "application/json",
            "apollographql-client-name": "web",
            "apollo-require-preflight": "true",
            "x-gql-op": "user",
            "x-timezone-offset": "-120",
            "cookie": `token=${token}; need_verification=true`,
        },
        method: "GET",
        credentials: "include"
    })
        .then(res => res.json())
        .then(data => {
            console.log("API Response:", data);
        })
        .catch(err => console.error("ERROR:", err));

});
