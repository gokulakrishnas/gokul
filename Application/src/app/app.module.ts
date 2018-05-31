import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatInputModule, MatCardModule, MatToolbarModule, MatStepperModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Routes, Router, RouterModule, } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from '@angular/material/sidenav';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
//Components
import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component'
import { Dashboardcomponent } from './Dashboard/Dashboard.component';
import { logoutdialogcomponent } from './LogoutDialog/logoutdialog.component';
//perfect scroll bar
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
//Routing
const approutes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: loginComponent
  },
  {
    path: 'Dashboard', component: Dashboardcomponent
  },
  {
    path: 'logoutdialog', component: logoutdialogcomponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    Dashboardcomponent,
    logoutdialogcomponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    MatStepperModule,
    MatAutocompleteModule,
    BrowserModule,
    MatMenuModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTabsModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatListModule,
    MatProgressBarModule,
    MatDialogModule,
    FlexLayoutModule,
    MatSidenavModule,
    PerfectScrollbarModule,
    RouterModule.forRoot(approutes, { useHash: true })
  ],
  exports:
    [
      MatFormFieldModule,
      MatInputModule,
      MatStepperModule,
      MatButtonModule,
      MatCardModule,
      MatTableModule,
      MatAutocompleteModule,
      MatIconModule,
      MatAutocompleteModule,
      MatToolbarModule,
      MatMenuModule,
      MatExpansionModule,
      MatTabsModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatSelectModule,
      MatProgressSpinnerModule,
      MatListModule,
      MatProgressBarModule,
      MatDialogModule,
      FlexLayoutModule,
      MatSidenavModule,
      PerfectScrollbarModule
    ],
 
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
