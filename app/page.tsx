"use client"

import { useEffect, useState } from "react"
import { getTopCryptos } from "@/lib/api"

export default function HomePage() {
  const [cryptos, setCryptos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTopCryptos(10).then(data => {
      setCryptos(data)
      setLoading(false)
    })
  }, [])

  if (loading) return <p>Loading...</p>

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
