export class Group {
    id?: number;
    NomDuGroupe!: string;
    Origine!: string;
    Ville!: string;
    anneeDebut!: string;
    anneeSeparation?: string;
    fondateurs!: string;
    membres!: string;
    CourantMusical?: string;
    presentation!: string;
    title!: string;
    static id: number;
  }


  export class GroupResponse {
    "@context": string;
    "@id": string;
    "@type": string;
    "hydra:totalItems": number;
    "hydra:member": Group[];
  }
  