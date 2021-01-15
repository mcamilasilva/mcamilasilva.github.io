import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { SystemLanguageEnum } from '../models/enums/system-language.enum';

@Injectable({
  providedIn: 'root'
})
export class SystemLanguageService {

  private LANGUAGE_KEY: string = "language";

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }


  set language(language: SystemLanguageEnum) {
    this.storage.set(this.LANGUAGE_KEY, language);
  }

  get language(): SystemLanguageEnum {
    let language = this.storage.get(this.LANGUAGE_KEY);
    if (!language || !Object.values(SystemLanguageEnum).includes(language)) {
      language = SystemLanguageEnum.EN_US;
      this.storage.set(this.LANGUAGE_KEY, language);
    }

    return language;
  }

}
