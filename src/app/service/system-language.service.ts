import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Subject } from 'rxjs';
import { SystemLanguageEnum } from '../models/enums/system-language.enum';

@Injectable({
  providedIn: 'root'
})
export class SystemLanguageService {

  private LANGUAGE_KEY: string = "language";

  private languageSubject$: Subject<SystemLanguageEnum> = new Subject<SystemLanguageEnum>();

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  set language(language: SystemLanguageEnum) {
    this.storage.set(this.LANGUAGE_KEY, language);
    this.languageSubject$.next(language);
  }

  get language(): SystemLanguageEnum {
    let currentLanguage = this.storage.get(this.LANGUAGE_KEY);

    if (!Object.keys(SystemLanguageEnum).includes(currentLanguage)) {
      currentLanguage = SystemLanguageEnum.EN_US;
      this.language = currentLanguage;
    }

    return currentLanguage;
  }

  get languageObservable(): Subject<SystemLanguageEnum> {
    return this.languageSubject$;
  }

  get format(): string {
    switch (this.language) {
      case SystemLanguageEnum.EN_US:
        return 'en-US';
      case SystemLanguageEnum.PT_BR:
        return 'pt-BR';
    }
  }

}
