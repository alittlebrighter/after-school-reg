import { Admin as TAdmin } from "../api/admin/Admin";

export const ADMIN_TITLE_FIELD = "id";

export const AdminTitle = (record: TAdmin) => {
  return record.id;
};
