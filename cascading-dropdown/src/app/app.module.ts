import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CascadeService } from './cascade.service';
import { BsDropdownModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [CascadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
