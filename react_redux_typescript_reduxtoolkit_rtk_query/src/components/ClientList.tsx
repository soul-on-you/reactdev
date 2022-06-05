import React, { useEffect, useState } from "react";
import { clientAPI } from "../service/ClientService";
import ClientItem from "./ClientItem";

export interface IClientListProps {
  limit?: number;
}

export default function ClientList({ limit: _limit }: IClientListProps) {
  const [limit, setLimit] = useState<number | undefined>(); //_limit

  //! RTK_Query возбмет на себя работу с хэшем, изначально у нас один источник данных
  //! и из него мы присваиваем посты, но потом меняется limit, в store создается новый стейт
  //! и раньше 2 списка были к одному стэйту, а сейчас один отвязался и привязался к новому
  //! НО ВАЖНО помнить, все кэшируется, для примера, еще 1 таймаут, по истечении он не сделает запрос,
  //! для получения начального списка, но запрос не уйдет, а возьмет кэшг из сторы
  useEffect(() => {
    if (_limit)
      setTimeout(() => {
        setLimit(_limit);
        if (_limit < 10)
          setTimeout(() => {
            setLimit(undefined);
          }, 10000);
      }, _limit * 1000);
  }, []);

  const [deleteClient] = clientAPI.useDeleteClientMutation();

  const {
    data: clients,
    isLoading,
    isError,
  } = clientAPI.useFetchAllClientsQuery(limit);

  if (isLoading) return <h2>Идет загрузка...</h2>;

  if (isError) return <h2>Неудалось загрузить клиентов статус.</h2>;

  return (
    <div className="list__wrapper">
      {clients && clients.length > 0 ? (
        <div className="post__list">
          {clients.map((client) => (
            <ClientItem client={client} click={() => {deleteClient(client.id)}} key={client.id} />
          ))}
        </div>
      ) : (
        <h3>Клиентов пока нет</h3>
      )}
    </div>
  );
}
