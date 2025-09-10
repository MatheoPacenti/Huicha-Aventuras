export const formatId = (label) =>
  "actividad-" +
  label
    .toLowerCase()
    .replace(/\s+/g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
// svg
import arcoSvg from "../../assets/img/btn-svg-activities/archery-men.png";
import archeryShotSvg from "../../assets/img/btn-svg-activities/archery-shot.png";
import rusticKitchenSvg from "../../assets/img/btn-svg-activities/cocinaRustica.png";
import footballSvg from "../../assets/img/btn-svg-activities/football.png";
import orientationGamesSvg from "../../assets/img/btn-svg-activities/juegosOrientacion.png";
import PaintballSvg from "../../assets/img/btn-svg-activities/Paintball.png";
import TrekkingSvg from "../../assets/img/btn-svg-activities/trekking-svgrepo-com.png";
// fin svg

// img-activities
import archeryImg from "../../assets/img/arqueria.png";
import ejCarr from "../../assets/img/ejemplo.png";
import PaintballImg from "../../assets/img/paintball.png";
import trekkingImg from "../../assets/img/trekking.png";
// fin img

export const activities = [
  {
    icon: arcoSvg,
    label: "Guerra con arco",
    img: archeryImg,
    infoActivitie:
      "¡Apunta, dispara y disfruta! 🎯🏹✨ La guerra con arco en Tandil es la combinación perfecta de adrenalina, estrategia y diversión. Combina la destreza del tiro con arco con la emoción de un juego de equipo. Enfréntate a tus amigos en batallas épicas donde la estrategia y la habilidad con el arco son clave para la victoria. Vive una aventura llena de emoción, adrenalina y risas mientras esquivas flechas y te lanzas a la acción. ¡Desata tu espíritu guerrero y ven a vivir una experiencia única en Huicha Aventuras, Tandil!",
  },

  {
    icon: archeryShotSvg,
    label: "Arquería",
    img: archeryImg,
    infoActivitie: "¡Descubre el arte del tiro con arco en Tandil! 🏹✨ Aprende la técnica correcta, mejora tu puntería y disfruta de la concentración que requiere esta actividad milenaria. Perfecto para desarrollar paciencia, precisión y control. Una experiencia relajante y desafiante al mismo tiempo. ¡Ven a practicar arquería en Huicha Aventuras, Tandil, en un entorno natural único!",
  },

  {
    icon: PaintballSvg,
    label: "Paintball",
    img: PaintballImg,
    infoActivitie:
      "¡Vive la emoción del paintball en Tandil! Forma parte de un equipo y enfréntate a tus rivales en intensas batallas tácticas. Elimina a cada oponente con tus balas de pintura, demuestra tu estrategia y trabaja en equipo para alcanzar la victoria. ¿Estás listo para la acción? ¡Únete y juega paintball en Huicha Aventuras, Tandil! ¡Demuestra quién es el campeón del paintball!",
  },
  { 
    icon: TrekkingSvg, 
    label: "Trekking", 
    img: trekkingImg,
    infoActivitie: "¡Explora la naturaleza de Tandil con trekking! 🥾🏔️ Descubre senderos únicos, respira aire puro y conecta con el entorno natural. Perfecto para todas las edades y niveles. Disfruta de vistas panorámicas, flora y fauna local mientras haces ejercicio al aire libre. Una experiencia relajante y energizante que te permitirá desconectarte de la rutina. ¡Ven a caminar por los paisajes más hermosos de Tandil en Huicha Aventuras!",
  },
  { 
    icon: rusticKitchenSvg, 
    label: "Cocina Rústica", 
    img: ejCarr,
    infoActivitie: "¡Cocina al aire libre como nunca antes en Tandil! 🍳🔥 Aprende técnicas de cocina rústica, prepara deliciosos platos con ingredientes frescos y disfruta de una experiencia gastronómica única en la naturaleza. Perfecto para grupos que buscan combinar aventura con buena comida. ¡Descubre el sabor de cocinar en Huicha Aventuras, Tandil, en un entorno natural único!",
  },
  { 
    icon: orientationGamesSvg, 
    label: "Juegos de orientación", 
    img: ejCarr,
    infoActivitie: "¡Pon a prueba tu sentido de orientación en Tandil! 🧭🗺️ Aprende a usar brújulas, mapas y desarrolla habilidades de navegación en la naturaleza. Perfecto para desarrollar el trabajo en equipo, la comunicación y el pensamiento estratégico. Una actividad educativa y divertida que combina aventura con aprendizaje. ¡Descubre el explorador que llevas dentro en Huicha Aventuras, Tandil!",
  },
  { 
    icon: footballSvg, 
    label: "Footgolf", 
    img: ejCarr,
    infoActivitie: "¡Combina fútbol y golf en una sola actividad en Tandil! ⚽🏌️ Disfruta de este deporte único que mezcla la precisión del golf con la diversión del fútbol. Perfecto para todas las edades, desarrolla la coordinación, la puntería y el trabajo en equipo. Una experiencia divertida y desafiante en un entorno natural. ¡Ven a jugar footgolf en Huicha Aventuras, Tandil!",
  },
];
