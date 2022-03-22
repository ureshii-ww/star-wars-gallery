import PersonInfo, { PersonInfoProps } from './PersonInfo';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('PersonInfo', () => {
  const propsStub: PersonInfoProps = {
    birth_year: 'BYStub',
    gender: 'GenderStub',
    height: 'HeightStub',
    mass: 'MassStub',
    eye_color: 'ECStub',
    hair_color: 'HCStub',
    skin_color: 'SCStub',
  };

  beforeEach(() => {
    render(<PersonInfo {...propsStub} />);
  });

  it('renders all person info', () => {
    for (const key in propsStub) {
      const value = propsStub[key as keyof typeof propsStub];
      expect(screen.getByText(value)).toBeVisible();
    }
  });
});
