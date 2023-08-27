import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Group } from '../group.model';

@Component({
  selector: 'app-creeaza-item',
  templateUrl: './creeaza-item.component.html',
  styleUrls: ['./creeaza-item.component.css']
})
export class CreeazaItemComponent {

  newGroup: Group = {
    NomDuGroupe: '',
    Origine: '',
    Ville: '',
    anneeDebut: '',
    anneeSeparation: '',
    fondateurs: '',
    membres:'',
    CourantMusical: '',
    presentation: '',
    title: '',
  };

  constructor(private apiService: ApiService) { }

  createGroup() {
    // De asemenea, ar trebui să folosești this.newGroup în loc de a crea un nou obiect newGroup
    this.apiService.createGroup(this.newGroup).subscribe(response => {
      alert('Grup creat cu succes!');
      this.resetForm();  // Apelează funcția resetForm după ce grupul a fost creat cu succes
    });
  }

  resetForm() {
    this.newGroup = {
      NomDuGroupe: '',
      Origine: '',
      Ville: '',
      anneeDebut: '',
      anneeSeparation: '',
      fondateurs: '',
      membres:'',
      CourantMusical: '',
      presentation: '',
      title: '',
    };
  }
}
