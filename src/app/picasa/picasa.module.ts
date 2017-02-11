// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

// This Module's Components
import { PicasaComponent } from './picasa.component';

@NgModule({
    imports: [
        FormsModule,
    ],
    declarations: [
        PicasaComponent,
    ],
    exports: [
        PicasaComponent,
    ]
})
export class PicasaModule {

}
