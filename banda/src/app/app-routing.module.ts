import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VizualizeazaItemComponent } from './vizualizeaza-item/vizualizeaza-item.component';
import { CreeazaItemComponent } from './creeaza-item/creeaza-item.component';
import { ListaItemComponent } from './lista-item/lista-item.component';
import { EditPostComponent } from './edit-post/edit-post.component';


const routes: Routes = [
  { path: 'vizualizeaza', component: VizualizeazaItemComponent },
  { path: 'creeaza', component: CreeazaItemComponent },
  { path: 'lista', component: ListaItemComponent },
  { path: 'edit', component: EditPostComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
