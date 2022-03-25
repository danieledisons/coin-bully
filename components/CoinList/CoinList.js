import Image from 'next/image'
import Coins from "../Coins";
import { List, Typography, Divider } from "antd";

const CoinList = ({ filteredCoins }) => {
  return (
    <>
      <List
        header={<div>Cryptocurreny Prices by MarketCap</div>}
        bordered
        dataSource={filteredCoins}
        renderItem={item => (
          <List.Item>
            <img src={item.image} alt='coin' width='40' height='40' /> <strong>{item.name}</strong> {item.symbol.toUpperCase()} {item.current_price} {item.price_change_percentage_24h} {item.market_cap}
          </List.Item>
        )}
      />
      {filteredCoins.map((coin) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            id={coin.id}
            price={coin.current_price}
            marketcap={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
};

export default CoinList;
