
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const getJobsPosts = () => {
  const axiosPublic = usePublicAxios();
  const { data: jobs = [], isLoading: loading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/jobs");
      return res.data;
    },
  });
  return [jobs, loading];
};

export default getJobsPosts;
