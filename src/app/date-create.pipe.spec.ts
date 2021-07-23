import { DateCreatePipe } from './date-create.pipe';

describe('DateCreatePipe', () => {
  it('create an instance', () => {
    const pipe = new DateCreatePipe();
    expect(pipe).toBeTruthy();
  });
});
