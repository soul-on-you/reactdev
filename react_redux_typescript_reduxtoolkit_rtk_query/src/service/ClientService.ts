import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IClient } from "../models/IClient";
import env from "react-dotenv";

export const clientAPI = createApi({
  reducerPath: "clientAPI",
  baseQuery: fetchBaseQuery({ baseUrl: env.CLIENT_SERVER_URL }),
  tagTypes: ["Client"],
  endpoints: (build) => ({
    fetchAllClients: build.query<IClient[], number | undefined>({
      /**
       * @param {number} [limit=undefined]
       */
      query: (limit) => ({ url: "/client", params: { _limit: limit } }),
      providesTags: (result) => ["Client"],
    }),
    addClient: build.mutation<IClient, { name: string; phone: string }>({
      query: (client) => ({
        url: "/client",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: client,
      }),
      invalidatesTags: ["Client"],
    }),
    updateClient: build.mutation<IClient, IClient>({
      query: (client) => ({
        url: `/client/${client.id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: client,
      }),
      invalidatesTags: ["Client"],
    }),
    deleteClient: build.mutation<IClient, IClient["id"]>({
      query: (clientId) => ({
        url: `/client/${clientId}`,
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["Client"],
    }),
  }),
});
