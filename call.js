document.addEventListener("DOMContentLoaded", () => {

    const url =
        "https://playerok.com/graphql?operationName=user&variables=%7B%22username%22%3A%22Un1version%22%2C%22hasSupportAccess%22%3Afalse%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%222e2e3b656d2ba48e0b2cd5eeedf88ef70e4aabb4ac4d9d9e9b8feff343a37d98%22%7D%7D";

    fetch(url, {
        method: "GET",
        credentials: "include", // browser sends cookies automatically
        headers: {
            "accept": "*/*",
            "content-type": "application/json",
            "apollographql-client-name": "web",
            "apollo-require-preflight": "true",
            "x-gql-op": "user",
            "x-timezone-offset": "-120"
        }
    })
        .then(r => r.json())
        .then(data => console.log("Response:", data))
        .catch(err => console.error("ERROR:", err));

});
