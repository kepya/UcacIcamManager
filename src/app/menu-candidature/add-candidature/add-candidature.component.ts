import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Role } from 'src/app/shared/enums/role.enum';
import { ICandidature } from 'src/app/shared/interfaces/candidature';
import { ICandidatureResponse } from 'src/app/shared/interfaces/candidature-response';
import { IUtilisateurResponseModel } from 'src/app/shared/interfaces/utilisateur-response-model';
import { Centre } from 'src/app/shared/models/centre';
import { Compte } from 'src/app/shared/models/compte';
import { Session } from 'src/app/shared/models/session';
import { Site } from 'src/app/shared/models/site';
import { Zone } from 'src/app/shared/models/zone';
import { SiteService } from 'src/app/site-page/site.service';
import { CandidatureService } from '../candidature.service';
import { UserService } from 'src/app/shared/services/user.service';
import { SessionExamenService } from 'src/app/session-examen-page/session-examen.service';
import { CentreExamenService } from 'src/app/centre-examen-page/centre-examen.service';

@Component({
  selector: 'app-add-candidature',
  templateUrl: './add-candidature.component.html',
  styles: [
  ]
})
export class AddCandidatureComponent implements OnInit {

  public sites!: Site[];
  public site!: Site;
  public site1!: Site;

  public centres!: Centre[];
  public centre!: Centre;

  public currentDate: Date = new Date();

  public showForm: boolean = false;
  public showCentre: boolean = true;
  public loading: boolean = false;

  public hasActiveSession!: boolean;
  uploadedFile!: string;
  selectedFile! : File;
  public actualDate = new Date();

  activeStep: number = 1;
  codeExamen: number = 0;

  public candidatureForm: ICandidature = {
    langue: "",
    has_exchange: "",
    serie_bac: "",
    statut: "En_Attente",
    cycle: "",
    compteID: Number(localStorage.getItem('idCandidat')),
    code_examen: 0,
    sessionId: 0,
    nationalite: "",
    genre: "",
    date_naissance: "",
    date_paiement: "",
    image: "",
    formation2: "",
    formation3: "",
    paiement: "",
    formation1: "",
    reference_paiement: "",
    telephone_paiement: "",
    dernier_Etablissement: "",
    lieu_de_naissance: "",
    ville: "",
    nombre_choix: 0,
    centre: "",
    centreExamenId: 0,
    candidatureActif: true,
    nom_parent1: '',
    nom_parent2: '',
    diplome_universitaire: '',
    email_pere: '',
    telephone_pere: '',
    email_tuteur: '',
    telephone_tuteur: '',
    telephone_mere: '',
    email_mere: '',
    formation_principal: ''
  };
  public candidatureResponse: ICandidatureResponse = {
    langue: "",
    sessionId: "",
    has_exchange: "",
    serie_bac: "",
    statut: "En_Attente",
    cycle: "",
    code_examen: 0,
    nationalite: "",
    genre: "",
    date_naissance: "",
    image: "",
    formation2: "",
    formation3: "",
    paiement: "",
    formation1: "",
    reference_paiement: "",
    telephone_paiement: "",
    dernier_Etablissement: "",
    lieu_de_naissance: "",
    ville: "",
    nombre_choix: 0,
    centre: "",
    candidatureActif: true,
    nom_parent1: '',
    nom_parent2: '',
    telephone_pere: '',
    telephone_tuteur: '',
    telephone_mere: '',
    email_parents: '',
    compte: {
      name: "Kep",
      prenom: "",
      password: "pass",
      email: "",
      telephone: 0,
      role: "CANDIDAT",
      id_disponibilite: 0,
      idZone: 1,
      id: 0
    },
    tel_parents: ''
  };

  public compteform: Compte = {
    name: "",
    prenom: "",
    password: "pass",
    email: "",
    telephone: "",
    role: Role.CANDIDAT,
    id_disponibilite: 0,
    idZone: 1
  };

  public compteResponse!: Compte;

  public session: Session = {
    id: 0,
    nom: "",
    date_debut: new Date(),
    date_limite: new Date(),
    date_examen: new Date(),
    statut: ""
  };

  generateRandomPassword(length: number): string {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }


  form: FormGroup = new FormGroup({
    date_naissance: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required, Validators.minLength(3),]),
    prenom: new FormControl('', [Validators.required,]),
    email: new FormControl('', [Validators.required, Validators.email,]),

  });

  
  getPersonnalInformation(event: any) {
    this.candidatureForm.nationalite = event.nationalite;
    this.candidatureForm.genre = event.genre;
    this.candidatureForm.date_naissance = event.date_naissance;
    this.candidatureForm.lieu_de_naissance = event.lieu_de_naissance;
    this.candidatureForm.ville = event.ville;

    this.compteform = {
      name: event.nom,
      prenom: event.prenom,
      password: this.generateRandomPassword(5),
      email:event.email,
      telephone: event.telephone,
      role: Role.CANDIDAT,
      id_disponibilite: 0,
      idZone: this.site.zoneid || 0
    };

    this.activeStep += 1;
  }

  getComplementaryInformation(event: any) {
    this.candidatureForm.nom_parent1 = event.nom_parent1;
    this.candidatureForm.email_pere = event.email_pere;
    this.candidatureForm.telephone_pere = event.telephone_pere;
    this.candidatureForm.nom_parent2 = event.nom_parent2;
    this.candidatureForm.email_mere = event.email_mere;
    this.candidatureForm.telephone_mere = event.telephone_mere;
    this.candidatureForm.email_tuteur = event.email_tuteur;
    this.candidatureForm.telephone_tuteur = event.telephone_tuteur;
    this.activeStep += 1;
  }

  previous(step:any) {
    this.activeStep = step;
  }

  getCompetitionInformation(event: any) {
    this.candidatureForm.langue = event.langue;
    this.candidatureForm.has_exchange = event.has_exchange;
    this.candidatureForm.dernier_Etablissement = event.dernier_Etablissement;
    this.candidatureForm.serie_bac = event.serie_bac;
    this.candidatureForm.cycle = event.cycle;
    this.candidatureForm.paiement = event.paiement;
    this.candidatureForm.image = event.image;
    this.selectedFile = event.selectedFile;
    this.candidatureForm.diplome_universitaire = event.diplome_universitaire;
    this.candidatureForm.formation1 = event.formation1;
    this.candidatureForm.formation2 = event.formation2;
    this.candidatureForm.nombre_choix = event.nombre_choix;
    this.candidatureForm.formation3 = event.formation3;
    this.activeStep += 1;
  }

  getPaiementInformation(event: any) {
    this.candidatureForm.reference_paiement = event.reference_paiement;
    this.candidatureForm.telephone_paiement = event.telephone_paiement;
    this.candidatureForm.date_paiement = event.date_paiement;
    this.candidatureForm.sessionId = this.session.id || 0;
    this.createAccount();
  }

  constructor(
    private messageService: MessageService,
    private siteService: SiteService,
    private centreExamenService: CentreExamenService,
    private candidatureService: CandidatureService,
    private router: Router,
    private sessionService: SessionExamenService,
    private http: HttpClient,
    private userService: UserService
  ) {
    this.currentDate = new Date();
    this.currentDate.setFullYear(new Date().getFullYear() - 15);
  }
  
  public dateBefore15Date: Date = new Date();

  public numberIsValid: boolean = false;

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.sessionService.getActive().subscribe({
      next: data => {
        if (data?.id) {
        this.session = data;
          this.hasActiveSession = true;
          this.getAllSites();
        }
      },
      error: (err) => console.log(err)
    });
  }

  getAllSites() {
    this.siteService.liste().subscribe({
      next: data => {
        if (data.length > 0) {
          this.sites = data;
          this.site = this.sites[0];
          this.getCenterBySite(this.site?.id || 0)
        }
      },
      error: (err) => console.log(err)
    });
  }

  getCenterBySite(siteId: number) {
    this.centreExamenService.allBySite(siteId).subscribe({
      next: data => {
        this.centres = data
      },
    });

    let site = this.sites.find(s => s.id = siteId);
    if (site != null) {
      this.site = site;
    }
  }

  createAccount() {
    this.userService.create(this.compteform).subscribe({
      next: value => {
        this.candidatureForm.compteID = value.id || 0;
        this.compteResponse = value;
        this.compteResponse.password = this.compteform.password;
        this.addCandidature()
      },
      error: err => {
        let msgError = "Une erreur s'est produite ! \n Cette candidature n'a pas pu être prise en compte. \ Veillez vérifier vos informatons, votre connexion internet et réessayez!!!";
        this.messageService.add({ severity: 'error', summary: 'Inscription échouée', detail: msgError });
      }
    });
    return true;
  }

  sendEmail(candidat: ICandidature, ) {
    let mailRequest = {
      toEmail: this.compteResponse.email,
      subject: "Evolution candidature",
      codeExamen: candidat.code_examen?.toString()!,
      mdp: this.compteform.password || '',
      url: "https://inscription.ucac-icam.com/auth/login",
      emailSupport: "pro@gmail.com"
    };

    this.candidatureService.sendEmail(mailRequest).subscribe({
      next: (response) => {
        this.messageService.add({ severity: 'success', summary: 'Un email vous a été envoyé', detail: 'Vérifiez votre boîte mail' });
      },
      error: (error) => {
        console.error('Error email:', error);
        this.messageService.add({ severity:'error', summary: "Erreur d'envoi de mail", detail: "L'adresse mail fournie est inrouvable" });
      }
    });
  }

  addCandidature() {
    this.candidatureService.addCandidature(this.candidatureForm).subscribe({
      next: (data) => {
        this.candidatureForm = data;
        this.activeStep += 1;
        localStorage.setItem('haveCandidature', 'true');
        this.messageService.add({ severity: 'success', summary: 'Candidature insérée', detail: 'Candidature prise en compte avec success' });
        this.codeExamen = data.code_examen ||0;
        this.sendEmail(data)
        if (this.selectedFile) {
          this.uploadImage(data)
        } 

        localStorage.setItem('haveCandidature', 'true');
        // this.router.navigate(['/confirm'], { queryParams: { id: this.candidatureForm.compteID, name: this.compteform.name + "  " + this.compteform.prenom, code: data.code_examen, password: this.compteform.password } });
      },
      error: (err) => {
        console.log('erreur:', err);
        
        let msgError = "Une erreur s'est produite ! \n Cette candidature n'a pas pu être prise en compte. \ Veillez vérifier vos informatons, votre connexion internet et réessayez!!!";
        this.messageService.add({ severity: 'error', summary: 'Inscription échouée', detail: msgError });
      }
    })
  }

  uploadImage(candidat: ICandidature) {
    const formData = new FormData();
        formData.append('image', this.selectedFile);
        this.candidatureService.uploadImage(this.selectedFile, candidat.id!).subscribe(
          (response) => {
            console.log('Image uploaded successfully:', response);
            // Traitez la réponse comme nécessaire
          },
          (error) => {
            console.error('Error uploading image:', error);
            // Traitez les erreurs comme nécessaire
          }
        );
  }
}
