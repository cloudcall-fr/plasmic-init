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
  const response = await fetch(
    `${process.env.API_ENDPOINT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }
  )
  return response.json();
}

export async function getStrings() {
  let entries: any[] | null = null;
  try {
    const response = await fetchGraphQL(GRAPHQL_QUERY);
    entries = response?.data?.string;
    return entries;
  }
  catch (error) {
    return [{id: 1, code: "code", value: "value"}];
  }
}
