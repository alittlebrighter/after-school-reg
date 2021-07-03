import { Parent as TParent } from "../api/parent/Parent";

export const PARENT_TITLE_FIELD = "id";

export const ParentTitle = (record: TParent) => {
  return record.id;
};
