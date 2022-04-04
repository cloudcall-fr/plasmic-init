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

async function fetchGraphQL(query: string) {
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

export async function getStrings() {
  let entries: any[] | null = null;
  try {
    const response = await fetchGraphQL(GRAPHQL_QUERY);
    entries = response?.data?.string;
    console.log("entries", entries);
    return entries;
  }
  catch (error) {
    console.log("error");
    return { error, data: null };
  }
}
