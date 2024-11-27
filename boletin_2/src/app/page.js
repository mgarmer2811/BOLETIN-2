"use client";
import StudentList from "./StudentList";
import LimitedCounter from "./LimitedCounter";
import AverageCalculator from "./AverageCalculator";
import SurveySimulator from "./SurverySimulator";
import ShoppingList from "./ShoppingList";
import LoginForm from "./LoginForm";
import ImageGallery from "./ImageGallery";
import MultiCounter from "./MultiCounter";
import GuessTheNumber from "./GuessTheNumber";
import UserTable from './UserTable';
import ThemeSelector from "./ThemeSelector";
import TextCarousel from "./TextCarousel";

const texts = [
    "Bienvenido al carrusel.",
    "Aquí puedes ver diferentes textos.",
    "Gracias por usar el carrusel."
];

export default function Home() {
    return (
        <div>
            <h1>Ejercicio 1 (StudentList)</h1>
            <br />
            <StudentList />
            <br />
            <h1>Ejercicio 2 (LimitedCounter)</h1>
            <br />
            <LimitedCounter />
            <br />
            <h1>Ejercicio 3 (AverageCalculator)</h1>
            <br />
            <AverageCalculator />
            <br />
            <h1>Ejercicio 4 (SurveySimulator)</h1>
            <br />
            <SurveySimulator />
            <br />
            <h1>Ejercicio 5 (ShoppingList)</h1>
            <br />
            <ShoppingList />
            <br />
            <h1>Ejercicio 6 (LoginForm)</h1>
            <br />
            <LoginForm />
            <br />
            <h1>Ejercicio 7 (ImageGallery)</h1>
            <br />
            <ImageGallery />
            <br />
            <h1>Ejercicio 8 (MultiCounter)</h1>
            <br />
            <MultiCounter />
            <br />
            <h1>Ejercicio 9 (UserTable)</h1>
            <br/>
            <UserTable />
            <br/>
            <h1>Ejercicio 10 (GuessTheNumber)</h1>
            <br />
            <GuessTheNumber />
            <br/>
            <h1>Ejercicio 12 (ThemeSelector)</h1>
            <br/>
            <ThemeSelector />
            <br/>
            <h1>Ejercicio 14 (Simulador de encuesta con porcentajes)</h1>
            <br/>
            <SurveySimulator />
            <br/>
            <h1>Ejercicio 15 (TextCarousel)</h1>
            <br/>
            <TextCarousel texts={texts}/>
        </div>
    );
}
