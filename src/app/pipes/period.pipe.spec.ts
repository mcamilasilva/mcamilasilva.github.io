import { TranslationService } from '../service/translation.service';
import { DatePipe } from './date.pipe';
import { PeriodPipe } from './period.pipe';

describe('PeriodPipe', () => {
  it('create an instance', () => {
    const pipe = new PeriodPipe(new TranslationService(), new DatePipe());
    expect(pipe).toBeTruthy();
  });
});
