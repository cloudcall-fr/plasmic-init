import { DataProvider, repeatedElement, useSelector } from "@plasmicapp/host";
import { usePlasmicQueryData } from "@plasmicapp/query";
import L from "lodash";
import { ReactNode } from "react";
import { getStrings } from "../lib/api";

export function GqlFetcher({
  type,
  children,
  className,
}: {
  type?: string;
  children?: ReactNode;
  className?: string;
}) {
  const data = usePlasmicQueryData<any[] | null>(
    JSON.stringify({ type }),
    async () => {
      return getStrings();
    }
  );
  console.log("!", data);
  if (!data?.data) {
    return <div>Please specify a collection.</div>;
  }
  return (
    <div className={className}>
      {data?.data.map((item, index) => (
        <DataProvider key={item.id} name={"graphqlItem"} data={item}>
          {repeatedElement(index === 0, children)}
        </DataProvider>
      ))}
    </div>
  );
}

export function GraphqlField({
  className,
  path,
  setControlContextData,
}: {
  className?: string;
  path?: string;
  setControlContextData: (data: any) => void;
}) {
  const item = useSelector("graphqlItem");
  if (!item) {
    return <div>GraphqlField must be used within a GraphqlFetcher</div>;
  }
  setControlContextData?.({ fields: Object.keys(item) });
  if (!path) {
    return <div>GraphqlField must specify a path.</div>;
  }
  const data = L.get(item, path);
  if (data?.url) {
    return <img src={data.url} />;
  } else {
    return <div className={className}>{data}</div>;
  }
}
