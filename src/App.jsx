import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Label from './components/Label';
import Card from './components/Card';
import logo from './assets/logo.png';

export default function LMDriverCalculator() {
  const [fuelPrice, setFuelPrice] = useState('');
  const [kmPerLiter, setKmPerLiter] = useState('');
  const [dailyGoal, setDailyGoal] = useState('');
  const [rideValue, setRideValue] = useState('');
  const [distance, setDistance] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const fuelCost = (distance / kmPerLiter) * fuelPrice;
    const netValue = rideValue - fuelCost;
    const goalRate = (dailyGoal / 18);
    setResult({ netValue, goalRate });
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-4 py-6 font-sans">
      <div className="max-w-md mx-auto bg-zinc-800 p-6 rounded-xl shadow-lg space-y-6">
        <div className="flex justify-center">
          <img src={logo} alt="Logo ML Driver" className="h-12 w-auto" />
        </div>

        <h1 className="text-2xl font-bold text-center">ML Driver</h1>

        <h2 className="text-lg font-semibold">Configurações</h2>
        <Label>Combustível (R$/L)</Label>
        <Input
          type="number"
          value={fuelPrice}
          onChange={(e) => setFuelPrice(e.target.value.replace(',', '.'))}
          placeholder="Ex: 5,39"
        />

        <Label>Km por litro</Label>
        <Input
          type="number"
          value={kmPerLiter}
          onChange={(e) => setKmPerLiter(e.target.value.replace(',', '.'))}
          placeholder="Ex: 8,5"
        />

        <Label>Meta diária líquida</Label>
        <Input
          type="number"
          value={dailyGoal}
          onChange={(e) => setDailyGoal(e.target.value.replace(',', '.'))}
          placeholder="Ex: 250,00"
        />

        <h2 className="text-lg font-semibold">Corrida</h2>
        <Label>Valor da corrida (R$)</Label>
        <Input
          type="number"
          value={rideValue}
          onChange={(e) => setRideValue(e.target.value.replace(',', '.'))}
          placeholder="Ex: 12,75"
        />

        <Label>Distância (km)</Label>
        <Input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value.replace(',', '.'))}
          placeholder="Ex: 6,4"
        />

        <Button onClick={handleCalculate}>Calcular</Button>

        {result && (
          <Card>
            {result.netValue >= result.goalRate ? (
              <p className="text-green-400">Boa corrida! 🚀 (R$ {result.netValue.toFixed(2)} líquido)</p>
            ) : (
              <p className="text-red-400">Fuja dessa corrida! ⛔ (R$ {result.netValue.toFixed(2)} líquido)</p>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}
