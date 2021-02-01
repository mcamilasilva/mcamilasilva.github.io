import { TranslationService } from '../service/translation.service';
import { MajorsPipe } from './majors.pipe';

describe('MajorsPipe', () => {
  it('create an instance', () => {
    const pipe = new MajorsPipe(new TranslationService());
    expect(pipe).toBeTruthy();
  });
});
