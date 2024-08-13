import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const getCorporate = () => {
  const axiosPublic = usePublicAxios();
  const {
    data: corporate = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["corporate"],
    queryFn: async () => {
      const res = await axiosPublic.get("/corporate");
      return res.data;
    },
  });
  return [corporate, loading, refetch];
};

export default getCorporate;
