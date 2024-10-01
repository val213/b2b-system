import { FetchError } from "@medusajs/js-sdk";
import { HttpTypes } from "@medusajs/types";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { queryKeysFactory } from "../../lib/query-key-factory";
import { sdk } from "../../lib/sdk";

export const orderPreviewQueryKey = queryKeysFactory("custom_orders");

export const useOrderPreview = (
  id: string,
  query?: HttpTypes.AdminOrderFilters,
  options?: Omit<
    UseQueryOptions<
      HttpTypes.AdminOrderPreviewResponse,
      FetchError,
      HttpTypes.AdminOrderPreviewResponse,
      QueryKey
    >,
    "queryFn" | "queryKey"
  >
) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => sdk.admin.order.retrievePreview(id, query),
    queryKey: orderPreviewQueryKey.detail(id),
    ...options,
  });

  return { ...data, ...rest };
};