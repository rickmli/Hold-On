import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
// import { PAGE_SIZE } from "../../utils/constants";

export function usePosts() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, error, bookings, count };
}
