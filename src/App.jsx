import { useState } from 'react'

export default function App() {
  const [balanceFiat, setBalanceFiat] = useState(1200.55);
  const [balanceCrypto] = useState(0.056);
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h1>FINU – твой финансовый хаб</h1>
      <div>
        <h2>Фиатный баланс: ${balanceFiat.toFixed(2)}</h2>
        <h2>Криптовалюта (BTC): {balanceCrypto} BTC</h2>
      </div>
      <div>
        <input
          type="number"
          placeholder="Сумма перевода"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => setBalanceFiat(balanceFiat - amount)}>Перевести</button>
      </div>
    </div>
  );
}
