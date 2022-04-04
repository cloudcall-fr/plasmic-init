import { DataProvider, repeatedElement, useSelector } from "@plasmicapp/host";
import { usePlasmicQueryData } from "@plasmicapp/query";
import L from "lodash";
import { Key, ReactNode } from "react";
import { getStrings } from "../lib/api";

export function GraphqlFetcher({
  type,
  children,
  className,
}: {
  type: string;
  children?: ReactNode;
  className?: string;
}) {
  const data = usePlasmicQueryData<any[] | null>(
    JSON.stringify({ type }),
    async () => {
      return getStrings();
    }
  );

  if (!data?.data) {
    return <div>Please specify a field type.</div>;
  }
  return (
    <div className={className}>
      {data?.data?.map((item: { id: Key }, index: number) => (
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
  return <div className={className}>{data}</div>;
}
