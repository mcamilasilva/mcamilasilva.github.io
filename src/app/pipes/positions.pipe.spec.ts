import { TranslationService } from '../service/translation.service';
import { PositionsPipe } from './positions.pipe';

describe('PositionsPipe', () => {
  it('create an instance', () => {
    const pipe = new PositionsPipe(new TranslationService());
    expect(pipe).toBeTruthy();
  });
});
