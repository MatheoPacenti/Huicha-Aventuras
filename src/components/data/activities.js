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
      "¡Apunta, dispara y disfruta! 🎯🏹✨La guerra de arco al aire libre es la combinación perfecta de adrenalina, estrategia y diversión.Combinas la destreza del tiro con arco con la emoción de un juego de equipo.Enfréntate a tus amigos en batallas épicas donde la estrategia y la habilidad con el arco son clave para la victoria. Vive aventura llena de emoción, adrenalina y risas mientras esquivas flechas y te lanzas a la acción. ¿Quién se atreve a unirse a la aventura? ¡Desata tu espíritu guerrero y ven a vivir una experiencia única!",
  },

  {
    icon: archeryShotSvg,
    label: "Arquería",
    img: archeryImg,
    infoActivitie:       "¡Vive la emoción del paintball! Forma parte de un equipo y enfréntate a tus rivales en intensas batallas tácticas. Elimina a cada oponente con tus balas de pintura, demuestra tu estrategia y trabaja en equipo para alcanzar la victoria. ¿Estás listo para la acción? ¡Únete y juega! ¡Únete a nosotros y demuestra quién es el campeón del paintball!",
  },

  {
    icon: PaintballSvg,
    label: "Paintball",
    img: PaintballImg,
    infoActivitie:
      "¡Vive la emoción del paintball! Forma parte de un equipo y enfréntate a tus rivales en intensas batallas tácticas. Elimina a cada oponente con tus balas de pintura, demuestra tu estrategia y trabaja en equipo para alcanzar la victoria. ¿Estás listo para la acción? ¡Únete y juega! ¡Únete a nosotros y demuestra quién es el campeón del paintball!",
  },
  { icon: TrekkingSvg, label: "Trekking", img: trekkingImg,
    infoActivitie:
      "¡Vive la emoción del paintball! Forma parte de un equipo y enfréntate a tus rivales en intensas batallas tácticas. Elimina a cada oponente con tus balas de pintura, demuestra tu estrategia y trabaja en equipo para alcanzar la victoria. ¿Estás listo para la acción? ¡Únete y juega! ¡Únete a nosotros y demuestra quién es el campeón del paintball!", },
  { icon: rusticKitchenSvg, label: "Cocina Rústica", img: ejCarr,
    infoActivitie:
      "¡Vive la emoción del paintball! Forma parte de un equipo y enfréntate a tus rivales en intensas batallas tácticas. Elimina a cada oponente con tus balas de pintura, demuestra tu estrategia y trabaja en equipo para alcanzar la victoria. ¿Estás listo para la acción? ¡Únete y juega! ¡Únete a nosotros y demuestra quién es el campeón del paintball!", },
  { icon: orientationGamesSvg, label: "Juegos de orientación", img: ejCarr,
    infoActivitie:
      "¡Vive la emoción del paintball! Forma parte de un equipo y enfréntate a tus rivales en intensas batallas tácticas. Elimina a cada oponente con tus balas de pintura, demuestra tu estrategia y trabaja en equipo para alcanzar la victoria. ¿Estás listo para la acción? ¡Únete y juega! ¡Únete a nosotros y demuestra quién es el campeón del paintball!", },
  { icon: footballSvg, label: "Footgolf", img: ejCarr,
    infoActivitie:
      "¡Vive la emoción del paintball! Forma parte de un equipo y enfréntate a tus rivales en intensas batallas tácticas. Elimina a cada oponente con tus balas de pintura, demuestra tu estrategia y trabaja en equipo para alcanzar la victoria. ¿Estás listo para la acción? ¡Únete y juega! ¡Únete a nosotros y demuestra quién es el campeón del paintball!", },
];
