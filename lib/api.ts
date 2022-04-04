process.env.API_ENDPOINT = "https://api-dev.cloudcall.fr/v1/graphql";

const GRAPHQL_QUERY = `
query {
  string(limit: 10) {
    id
    code
    language
    value
  }
}
`;

async function fetchGraphql(query: string) {
  return fetch(
    `${process.env.API_ENDPOINT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractEntries(fetchResponse: any) {
  console.log("!!", fetchResponse.errors);
  return fetchResponse?.data.string;
}

export async function getStrings() {
  const entries = await fetchGraphql(GRAPHQL_QUERY);
  return extractEntries(entries);
}
