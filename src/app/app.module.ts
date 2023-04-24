import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilingTypeComponent } from './filing-type/filing-type.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { MonthSelectComponent } from './month-select/month-select.component';
import { TaxComputationComponent } from './tax-computation/tax-computation.component';
import { ReviewConfirmComponent } from './review-confirm/review-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    FilingTypeComponent,
    FirstPageComponent,
    MonthSelectComponent,
    TaxComputationComponent,
    ReviewConfirmComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,

  ],
  providers: [CurrencyPipe, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
