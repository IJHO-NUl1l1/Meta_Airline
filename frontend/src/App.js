import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const Chart = () => {
  return (
    <AdvancedRealTimeChart
      theme="dark"
      width={850}
      height={600}
      symbol="BINANCE:BTCUSDT"
      interval="D"
      timezone="Asia/Seoul"
      style="1"
      locale="kr"
      toolbar_bg="#f1f3f6"
      allow_symbol_change={false}
      container_id="tradingview_dcf24"
    ></AdvancedRealTimeChart>
  );
};

export default Chart;