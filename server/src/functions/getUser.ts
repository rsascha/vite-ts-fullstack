import { User } from "@library/types";

export function getUser() {
  const user: User = {
    id: 1,
    name: "John Doe",
    age: 30,
  };
  return user;
}
