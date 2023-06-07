import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ShowDataComponent } from './show-data/show-data.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { ToastrModule ,ToastrService} from 'ngx-toastr';
// import { MatTableExporterModule } from 'mat-table-exporter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    DragDropModule,
    MatTableModule,
    ToastrModule.forRoot(),
    // MatTableExporterModule,
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
