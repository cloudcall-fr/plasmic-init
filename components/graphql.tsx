import { DataProvider, repeatedElement, useSelector } from "@plasmicapp/host";
import { usePlasmicQueryData } from "@plasmicapp/query";
import L from "lodash";
import { ReactNode } from "react";
import { getI18nStrings } from "../lib/api";

export function GraphqlFetcher({
  type,
  children,
  className,
}: {
  type?: string;
  children?: ReactNode;
  className?: string;
}) {
  const {data} = usePlasmicQueryData<any[] | null>(
    type? JSON.stringify({ type }) : "id",
    async () => {
      return getI18nStrings();
    }
  );
  
  if (!data) {
    return null;
  }

  if (!data) {
    return <div>Please specify a field type.</div>;
  }
  return (
    <div className={className}>
      {data.map((item, index) => (
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
    return <div>ContentfulField must be used within a ContentfulFetcher</div>;
  }
  setControlContextData?.({ fields: Object.keys(item) });
  if (!path) {
    return <div>ContentfulField must specify a path.</div>;
  }
  const data = L.get(item, path);
  if (data?.url) {
    return <img src={data.url} />;
  } else {
    return <div className={className}>{data}</div>;
  }
}
