import {IZone} from "./zone";
import {ICentre} from "./centre";

export interface ISite {
  id: number,
  zone_id: number,
  nom: string,
  description: string,
  image: string,
  pays: string,
  zone :  IZone,
  centreExamenList : ICentre[],
  indicatif : string,
  msgPaiement : string
}
