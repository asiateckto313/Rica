import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
    ScreenTrackingService,
    UserTrackingService,
    getAnalytics,
    provideAnalytics,
  } from '@angular/fire/analytics';
  import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
  import { getAuth, provideAuth } from '@angular/fire/auth';
  import { getFirestore, provideFirestore } from '@angular/fire/firestore';
  import { getFunctions, provideFunctions } from '@angular/fire/functions';
  import { getMessaging, provideMessaging } from '@angular/fire/messaging';
  import { getPerformance, providePerformance } from '@angular/fire/performance';
  import { getStorage, provideStorage } from '@angular/fire/storage';
  import { environment } from '../environment/environment';
import {HttpClientModule} from '@angular/common/http';

import { MatSelectCountryModule } from '@angular-material-extensions/select-country';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), provideAnimations(),
    importProvidersFrom([
        HttpClientModule,
        MatSelectCountryModule.forRoot('fr'),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAnalytics(() => getAnalytics()),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideFunctions(() => getFunctions()),
        provideMessaging(() => getMessaging()),
        providePerformance(() => getPerformance()),
        provideStorage(() => getStorage()),
      ]),
      ScreenTrackingService,
      UserTrackingService,
]
};


