'use client'
import StudentList from "./StudentList";
import LimitedCounter from "./LimitedCounter";
import AverageCalculator from "./AverageCalculator";
import SurveySimulator from "./SurverySimulator";
import ShoppingList from "./ShoppingList";

export default function Home() {
  return (
    <div>
      <h1>Ejercicio 1 (StudentList)</h1>
      <br/>
      <StudentList />
      <br/>
      <h1>Ejercicio 2 (LimitedCounter)</h1>
      <br/>
      <LimitedCounter />
      <br/>
      <h1>Ejercicio 3 (AverageCalculator)</h1>
      <br/>
      <AverageCalculator />
      <br/>
      <h1>Ejercicio 4 (SurveySimulator)</h1>
      <br/>
      <SurveySimulator />
      <br/>
      <h1>Ejercicio 5 (ShoppingList)</h1>
      <br/>
      <ShoppingList />
      <br/>
    </div>
  );
}
