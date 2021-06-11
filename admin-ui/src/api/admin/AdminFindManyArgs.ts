import { AdminWhereInput } from "./AdminWhereInput";
import { AdminOrderByInput } from "./AdminOrderByInput";

export type AdminFindManyArgs = {
  where?: AdminWhereInput;
  orderBy?: AdminOrderByInput;
  skip?: number;
  take?: number;
};
