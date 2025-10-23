import LabyrintSpindelVav from '../../assets/images/halloween/webbversion/labyrint_spindelvav.jpg';
import PysselKarvaUt from '../../assets/images/halloween/webbversion/pyssel_karvaut.jpg';
import LabyrintBilvag from '../../assets/images/halloween/webbversion/labyrint_bilvag.jpg';

import LabyrintSpindelVavPDF from '../../assets/images/halloween/utskriftsversion/labyrint_bilvag.pdf';
import PysselKarvaUtPDF from '../../assets/images/halloween//utskriftsversion/pyssel_karvaut.pdf';
import LabyrintBilvagPDF from '../../assets/images/halloween/utskriftsversion/labyrint_bilvag.pdf';



export const useHalloweenPysselImages = () => {

  return [
    { web: LabyrintSpindelVav, pdf: LabyrintSpindelVavPDF, alt: "Labyrint Spindelväv" },
    { web: PysselKarvaUt, pdf: PysselKarvaUtPDF, alt: "Pyssel karva ut pumpor" },
    { web: LabyrintBilvag, pdf: LabyrintBilvagPDF, alt: "Labyrint Bilväg" },
  ];
};