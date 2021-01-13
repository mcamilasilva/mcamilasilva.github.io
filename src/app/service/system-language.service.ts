import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { SystemLanguage } from '../models/enums/system-language.enum';

@Injectable({
  providedIn: 'root'
})
export class SystemLanguageService {

  private LANGUAGE_KEY: string = "language";

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }


  set language(language: SystemLanguage) {
    this.storage.set(this.LANGUAGE_KEY, language);
  }

  get language(): SystemLanguage {
    let language = this.storage.get(this.LANGUAGE_KEY);
    if (!language || !Object.values(SystemLanguage).includes(language)) {
      language = SystemLanguage.EN_US;
      this.storage.set(this.LANGUAGE_KEY, language);
    }

    return language;
  }

}
