process.env.API_ENDPOINT = "https://api-dev.cloudcall.fr/v1/graphql";

const GQL_QUERY = `
query {
  string(limit: 10) {
    id
    code
    language
    value
  }
}
`;

async function fetchGql(query: string) {
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
  const entries = await fetchGql(GQL_QUERY);
  return extractEntries(entries);
}
