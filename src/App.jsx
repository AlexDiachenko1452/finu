import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [balanceFiat, setBalanceFiat] = useState(1200.55);
  const [balanceCrypto, setBalanceCrypto] = useState(0.056); // BTC условно
  const [amount, setAmount] = useState(0);

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Card className="w-full max-w-md p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Добро пожаловать в FINU</h2>
          <Input placeholder="Email" className="mb-2" />
          <Input type="password" placeholder="Пароль" className="mb-4" />
          <Button className="w-full" onClick={() => setLoggedIn(true)}>Войти</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">FINU – твой финансовый хаб</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Фиатный баланс</h2>
            <p className="text-2xl">${balanceFiat.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Криптовалюта (BTC)</h2>
            <p className="text-2xl">{balanceCrypto} BTC</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-2">Перевести средства</h2>
          <Input
            type="number"
            placeholder="Сумма"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mb-2"
          />
          <Button onClick={() => setBalanceFiat(balanceFiat - amount)}>Перевести</Button>
        </CardContent>
      </Card>

      <p className="text-sm text-gray-500">* Все данные условные. Реальная интеграция в будущем.</p>
    </div>
  );
}

