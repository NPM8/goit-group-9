const SUNNY_WEATHER = "sunny";
const RAINY_WEATHER = "rainy";
const STORMY_WEATHER = "stormy";

const weather = STORMY_WEATHER;

switch (weather) {
    case STORMY_WEATHER:
        console.log("Kalosze")
        break;
    case RAINY_WEATHER:
        console.log("Płaszcz")
    case SUNNY_WEATHER:
        console.log("Dlugie spodnie i t-shirt")
    default:
        console.log("Bielizna")
}

const TEXT = "ala ma kota, kot ma ale";

/* let currentText; */
/* let count = 0; */
/**/
/* for (let text = "o to jestem ja"; text.length; text = text.substring(0, text.indexOf(" ") === -1 ? text.length : text.indexOf(" "))) { */
/*     count += 1; */
/*     console.log(count) */
/* } */

