/**
 * Uebung 3: Maps
 */

/**
 * 1) Erstelle die Map.
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");

  //ToDo: füge ab hier Deinen Code ein
const pizza = {
  art:"Salami Speziale alla Micha",
  belag:["Salami", "Zwiebeln", "Knoblauch", "Peperoni", "extra Käse"],
  Skala: 10,
  wahr:"ja",
  gerneIsst: true

}
  console.debug(pizza)
}

/**
 * 2) Rufe keys, value und entries auf.
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  let toni = {
    name: "Pizza Toni",
    gruendung: 2001,
    medium: "Anime"
  }

  //ToDo: füge ab hier in den debugs Deinen Code ein
  console.debug(Object.keys(toni))
  console.debug(Object.values(toni))
  console.debug(Object.entries(toni))
}

/**
 * 3) Erstelle eine weitere Map.
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  //ToDo: füge ab hier Deinen Code ein
const kuenstler = {
  name: "Victoria",
  nachname: "Brandes",
  tutor: "Syntax",
  charakter: "cool",
  feedback: "tolle Tutorin",



}
  for (let key of Object.keys(kuenstler)) {
    console.debug(key + ": " + kuenstler[key])
  }
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1()
  aufgabe2()
  aufgabe3()
}
main()