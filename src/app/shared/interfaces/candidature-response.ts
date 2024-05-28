import {IUtilisateurResponseModel} from "./utilisateur-response-model";

export interface ICandidatureResponse {
  langue: string,
  email_parents: string,
  statut: string,
  code_examen: number
  cycle: string,
  sessionId: string,
  compte: IUtilisateurResponseModel,
  nationalite: string,
  genre: string,
  tel_parents: string,
  date_naissance: string,
  image: string,
  formation2: string,
  formation3: string,
  has_exchange: string,
  serie_bac: string,
  paiement: string,
  formation1: string,
  reference_paiement: string,
  telephone_paiement: string,
  dernier_Etablissement: string,
  telephone_tuteur: string,
  telephone_mere: string,
  telephone_pere: string,
  lieu_de_naissance: string,
  ville : string,
  nombre_choix : number,
  nom_parent1: string,
  nom_parent2: string,
  centre : string
  candidatureActif : boolean
}
