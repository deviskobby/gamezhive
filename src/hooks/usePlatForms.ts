import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";


const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatForms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: platforms
});

export default usePlatForms;