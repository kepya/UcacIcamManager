export interface IEpreuve {
    id : string,
    path : string,
    matiere : {
        id : string,
        intitule : string,
        coefficient : number,
        duree : number,
    },
    session: {
        id : string,
        nom : string,
        date_debut_entretien : Date,
        date_fin_entretien : Date,
        date_debut : Date,
        date_limite : Date,
        date_examen : Date,
        statut : String,
    }
  }
  
  