1. Naudojant create-react-app sukurti naują projektą pavadinimu „react-learning".<br>
2. Naudojant react-router-dom sukurti du routes (puslapius): Home ir Shopping List.<br>
    2.1. Sukurti navigacijos komponentą, kuriame yra nuorodos, nukreipiančios į šiuos du puslapius (naudoti Link komponentą iš react-router-dom).<br>

3. ShoppingList komponente sukurti masyvą su penkių pirkinių sąrašu. Kiekvienas pirkinys turi būti objektas ir turėti properties:<br>
    3.1 title (string tipo)<br>
    3.2. done (boolean tipo)<br>
    
4. TASK<br>
    4.1. Jeigu pirkinių masyvas neturi nei vieno nario, tai į ekrane parašyti: „Your shopping list is empty."<br>
    4.2. Jeigu pirkinių masyve yra bent vienas narys, tai kiekvieną nario title property išvesti į ekraną panaudojant ShoppingItem komponentą jam paduodant informaciją per props.<br>
<br>
<br>
CARS užduotis:<br>
1. Sukurti masyvą (bent 3 nariai), kurio kiekvienas narys yra automobilio objektas ir turi šiuos properties:<br>
    1.1. Brand'ą<br>
    1.2. Modelį<br>
    1.3. Variklio tipą<br>
    1.4. Bazinę kainą<br>
    1.5. Kilometražą<br>
    1.6. Spalvą<br>
    1.7. Nuorodą į automobilio nuotrauką<br>
2. Tokiu pačiu principu, kaip pirmoje užduotyje, išvesti automobilių informaciją į ekraną. <br>
3. Pridėti stilių.<br>
<br>
<br>
CITIES užduotis:<br>
1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:<br>
    1.1. name - miesto pavadinimas (string)<br>
    1.2. population - miesto populiacija (number)<br>
    1.3. location - (object)<br>
        1.3.1. continent - žemynas (string)<br>
        1.3.2. country - šalis (string)<br>
    1.4. touristAttractions - lankytinos vietos (array)<br>
    1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)<br>
2. Atvaizduoti visų miestų informaciją sukuriant CityItem komponentą.<br>
<br>
3.1. Jeigu miestas yra sostinė, tai:<br>
    3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)<br>
    3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."<br>
    3.1.3. Jeigu miestas yra sostinė, tai prie apgaubiančio elemento pridėti klasę „capital".<br>
<br>
4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:<br>
    4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".<br>
    4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".<br>
    4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.<br>
<br>
5. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%, o visų kitų - 50%.<br>