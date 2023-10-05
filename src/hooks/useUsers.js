import { useEffect, useState } from "react";
import { getUsers } from "../services/user-service";

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (err) {
      console.error(err);
    }
  };

  return { users };
};
