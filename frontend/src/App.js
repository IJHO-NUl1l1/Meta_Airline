import React, { useEffect, useRef } from 'react';
import './App.css';

const TradingViewWidget = ({ symbol }) => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        "container_id": widgetRef.current.id,
        "symbol": symbol,
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "kr",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "details": true,
      });
    };
    widgetRef.current.appendChild(script);
  }, [symbol]); // 종목 코드가 변경될 때마다 위젯을 다시 로드합니다.

  return <div ref={widgetRef} id="tradingview-widget-container" />;
};

export default TradingViewWidget;
