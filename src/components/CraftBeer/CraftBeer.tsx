import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RussianCraft from "./RussianCraft";
import ImportCraft from "./ImportCraft";
import ContentNav from "../_common/ContentNav";
import { ActionBlock, SearchInput, Select, Wrapper } from "./CraftBeer.styled";
import { importCard } from "../_assets";

const { Option } = Select;

const CraftBeer = () => {
  const [search, setSearch] = useState("");
  const [filteredBeers, setFilteredBeers] = useState<any>([]);

  const searchItems = (searchValue: string) => {
    setSearch(searchValue);
  };

  useEffect(() => {
    const results = importCard.filter((item: any) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredBeers(results);
  }, [search]);

  return (
    <>
      <ContentNav
        links={[
          { name: "Российский крафт", path: "russia" },
          { name: "Импортный крафт", path: "import" },
        ]}
      />
      <Wrapper>
        <ActionBlock>
          <SearchInput
            placeholder="Искать по названию"
            allowClear
            enterButton="Поиск"
            value={search}
            onChange={(e) => searchItems(e.target.value)}
          />
          <Select
            placeholder="Сортировать по"
            allowClear
            dropdownStyle={{ borderRadius: "15px" }}
          >
            <Option value="population">По популярности</Option>
            <Option value="rating">По рейтингу</Option>
          </Select>
        </ActionBlock>
        <Routes>
          <Route path="russia" element={<RussianCraft />} />
          <Route
            path="import"
            element={<ImportCraft filteredBeers={filteredBeers} />}
          />
          <Route path="" element={<Navigate replace to="russia" />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default CraftBeer;
