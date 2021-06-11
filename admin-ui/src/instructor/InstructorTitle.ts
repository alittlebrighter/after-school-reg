import { Instructor as TInstructor } from "../api/instructor/Instructor";

export const INSTRUCTOR_TITLE_FIELD = "id";

export const InstructorTitle = (record: TInstructor) => {
  return record.id;
};
