import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Ng2Webstorage } from 'ng2-webstorage';


import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatSortModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatDialogModule,
  MatIconModule,
  MatSliderModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatGridListModule,
  MatSelectModule,
  MatStepperModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatPaginatorModule,
  MatInputModule,
  MatDatepickerModule,
  MatTableModule
} from '@angular/material';


import { MainComponent } from './layouts/main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AccountModule } from './account/account.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    Ng2Webstorage.forRoot({ prefix: 'drevolution', separator: '-'}),
    FormsModule,
    AccountModule,
    BrowserModule,
    BrowserAnimationsModule,
  MatToolbarModule,
  MatSortModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatDialogModule,
  MatIconModule,
  MatSliderModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatGridListModule,
  MatSelectModule,
  MatStepperModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatPaginatorModule,
  MatInputModule,
  MatDatepickerModule,
  MatTableModule,


  HttpModule



  ],
  exports: [
    MatToolbarModule,
  MatSortModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatDialogModule,
  MatIconModule,
  MatSliderModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatGridListModule,
  MatSelectModule,
  MatStepperModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatPaginatorModule,
  MatInputModule,
  MatDatepickerModule,
  MatTableModule,
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
