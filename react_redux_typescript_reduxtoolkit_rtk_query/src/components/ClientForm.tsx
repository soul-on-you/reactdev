import React, { useCallback, useRef, useState } from "react";
import { clientAPI } from "../service/ClientService";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";

export interface IClientFormProps {}

export default function ClientForm(props: IClientFormProps) {
  //! без useCallback ссылка на функцию постоянно обновляется
  //! и оптимизация рендера кнопки при помощи memo не срабатывает
  //   const addClient = (e: any) => {
  //     e.preventDefault();
  //     console.log(e.target.innerText);
  //     setName("");
  //     setPhone("");
  //   };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  //! ref нужен чтобы ссылка не менялась, но был доступ к значению addClient
  //! если передавать туда name то очень часто(почти всегда) кнопка перерендерится
  //! из-за смены ссылки на функцию
  const nameRef = useRef("");
  const phoneRef = useRef("");
  nameRef.current = name;
  phoneRef.current = phone;

  //! чтобы понять, что переменная постоянно переприсваивается, чтобы этого не было можно использовать useMemo
  //! но кажется это уже костыли и не очень эффективно
  //   const aRef = useRef<void>();
  //   aRef.current = useMemo(() => console.log("REF_USED"), [name]);

  const [addClientOnServer /*{ isLoading, isError }*/] =
    clientAPI.useAddClientMutation();

  const addClient = useCallback(
    (e: any) => {
      e.preventDefault();

      //! не подходит т.к. стейт замыкается на момент создания функции
      // console.log(name);

      console.log(nameRef.current);
      console.log(phoneRef.current);

      if (nameRef.current && phoneRef.current) {
        // clientAPI.useAddClientMutation() {name: nameRef.current, phone: phoneRef.current}
        addClientOnServer({ name: nameRef.current, phone: phoneRef.current });
        setName("");
        setPhone("");
      }
    },
    [addClientOnServer]
  );

  //?   console.log("RENDER_FORM");           СРАБОТАЕТ ВСЕГДА, ПОЭТОМУ НЕ СМЫСЛА ЗАМОРАЧИВАТЬСЯ
  return (
    <div className="form__wrapper">
      <form>
        <Input
          //   id={1}
          value={name}
          setValue={setName}
          placeholder="Имя клиента"
        />
        <Input
          //   id={2}
          value={phone}
          setValue={setPhone}
          placeholder="Телефон клиента"
        />
        <div className="btns">
          <Button
            //   id={1}
            onClick={addClient}
          >
            Добавить
          </Button>
          <Button
            //   id={2}
            onClick={addClient}
          >
            Удалить
          </Button>
        </div>
      </form>
    </div>
  );
}
