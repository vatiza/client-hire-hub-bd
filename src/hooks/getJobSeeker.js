import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const getJobSeeker = () => {
  const axiosPublic = usePublicAxios();
  const {
    data: jobseeker = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["jobseeker"],
    queryFn: async () => {
      const res = await axiosPublic.get("/jobseeker");
      return res.data;
    },
  });

  return [jobseeker, loading];
};

export default getJobSeeker;
