1. Naudojant create-react-app sukurti naują projektą pavadinimu „react-learning".<br>
2. Naudojant react-router-dom sukurti du routes (puslapius): Home ir Shopping List.<br>
    2.1. Sukurti navigacijos komponentą, kuriame yra nuorodos, nukreipiančios į šiuos du puslapius (naudoti Link komponentą iš react-router-dom).<br>

3. ShoppingList komponente sukurti masyvą su penkių pirkinių sąrašu. Kiekvienas pirkinys turi būti objektas ir turėti properties:<br>
    3.1 title (string tipo)<br>
    3.2. done (boolean tipo)<br>
    
4. TASK<br>
    4.1. Jeigu pirkinių masyvas neturi nei vieno nario, tai į ekrane parašyti: „Your shopping list is empty."<br>
    4.2. Jeigu pirkinių masyve yra bent vienas narys, tai kiekvieną nario title property išvesti į ekraną panaudojant ShoppingItem komponentą jam paduodant informaciją per props.<br>
