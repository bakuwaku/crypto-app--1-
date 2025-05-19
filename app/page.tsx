"use client"

import { useEffect, useState } from "react"
import { getTopCryptos } from "@/lib/api"

export default function Page() {
  const [cryptos, setCryptos] = useState([])

  useEffect(() => {
    getTopCryptos(10).then(setCryptos)
  }, [])

  return (
    <div>
      <h1>Top Cryptocurrencies</h1>
      {cryptos.map((coin) => (
        <div key={coin.id}>
          {coin.rank}. {coin.name} (${parseFloat(coin.priceUsd).toFixed(2)})
        </div>
      ))}
    </div>
  )
}
