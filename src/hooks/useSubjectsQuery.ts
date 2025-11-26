import { useQuery } from "@tanstack/react-query";
import type { ISubject } from "../types/interfaces";

const getSubjects = async () => {
  const response = await fetch("http://localhost:8080/subjects/getSubjects");

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || `Error: ${response.status}`);
  }

  return data.subjects as ISubject[];
};

export const useSubjectsQuery = () => {
  return useQuery({
    queryKey: ["subjects"],
    queryFn: getSubjects,
  });
};
