import * as React from "react";
import { IClient } from "../models/IClient";
import Button from "./UI/Button/Button";

export interface IClientItemProps {
  client: IClient;
  click: () => void;
}

export default function ClientItem({ client, click }: IClientItemProps) {
  return (
    <div className="user">
      {client.id}){client.name}:{client.phone}
      <Button onClick={click}>Удалить</Button>
    </div>
  );
}
