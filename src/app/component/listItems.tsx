import { Box } from "@mui/material";
import { EntityId } from "redis-om";
import StoredListItem from "./storedListItem";
import { listItemsProps } from "@/lib/sharedType";

export default function ListItems({ data, ...other }: listItemsProps) {
  return (
    <Box>
      {data?.map((item: any, key: any) => {
        return (
          <StoredListItem
            key={key}
            item={JSON.parse(JSON.stringify(item))}
            id={item[EntityId]}
          />
        );
      })}
    </Box>
  );
}
