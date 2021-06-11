import { InstructorWhereInput } from "./InstructorWhereInput";
import { InstructorOrderByInput } from "./InstructorOrderByInput";

export type InstructorFindManyArgs = {
  where?: InstructorWhereInput;
  orderBy?: InstructorOrderByInput;
  skip?: number;
  take?: number;
};
