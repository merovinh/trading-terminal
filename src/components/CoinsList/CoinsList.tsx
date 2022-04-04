import { ReactNode, useEffect, useState } from "react";
import {
  StyledCoinsItem,
  StyledCoinsList,
  ListContainer,
  InputContainer,
} from "./CoinsList.styles";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CoinsList = ({ coins }: any) => {
  const [filteredCoins, setFilteredCoins] = useState(coins);

  const renderCoins = (arr: []): ReactNode =>
    arr.map((elem: any) => (
      <StyledCoinsItem key={elem.id}>{elem.symbol}</StyledCoinsItem>
    ));

  const handleClick = (e: any) => {
    console.log(e.target.innerText);
  };

  const handleFilter = (e: any) => {
    let newArray = coins.filter((el: { symbol: string }) =>
      el.symbol.startsWith(e.target.value.toUpperCase())
    );
    setFilteredCoins(newArray);
  };

  useEffect(() => {
    setFilteredCoins(coins);
  }, [coins]);

  return (
    <ListContainer>
      <InputContainer>
        <Box>
          <TextField onChange={handleFilter} label="Enter coin name" />
        </Box>
      </InputContainer>

      <StyledCoinsList onClick={handleClick}>
        {renderCoins(filteredCoins)}
      </StyledCoinsList>
    </ListContainer>
  );
};
export default CoinsList;
