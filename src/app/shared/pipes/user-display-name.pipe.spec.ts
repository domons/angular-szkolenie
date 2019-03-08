import { UserDisplayNamePipe } from './user-display-name.pipe';
import { User } from '../interfaces/user';

describe('UserDisplayNamePipe', () => {
  let pipe: UserDisplayNamePipe = null;

  beforeEach(() => {
    pipe = new UserDisplayNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display name and surname', () => {
    const user = <User> {
      person: {
        name: 'jan',
        surname: 'nowak'
      }
    };

    const output = pipe.transform(user);
    expect(output).toEqual('jan nowak');
  });

});
