import React, { Fragment } from "react";
import CustomInput from "./UI/input/CustomInput";
import CustomSelect from "./UI/select/CustomSelect";

function PostFilter({ filter, setFilter }) {

  const sortPosts = (sortMode) => {
    setFilter({ ...filter, sortMode });
  };

  return (
    <Fragment>
      <CustomInput
        value={filter.searchQuery}
        onChange={(e) => setFilter({ ...filter, searchQuery: e.target.value })}
        placeholder="Поиск поста"
      />
      <CustomSelect
        value={filter.sortMode}
        onChange={sortPosts}
        defaultValue={"Сортировка"}
        options={[
          { text: "По названию", value: "title" },
          { text: "По описанию", value: "body" },
        ]}
      />
    </Fragment>
  );
}

export default PostFilter;
