import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import PersonCard from './PersonCard';
import { personStub } from '../../../tests/stubs/person.stub';

describe('PersonCard', () => {
  test('with non null data', () => {
    const name = personStub.name;
    const url = personStub.url;
    const films = personStub.films;
    
    render(
      <MemoryRouter>
        <PersonCard name={name} url={url} films={films} />
      </MemoryRouter>
    );
    
    expect(screen.getByText(name)).toBeVisible();
    
    expect(screen.getByText('Films:')).toBeVisible();
    films.forEach(film => {
      const filmLink = screen.getByText(film);
      expect(filmLink).toBeVisible();
      expect(filmLink).toHaveAttribute('href', film);
    })
    
    const detailsLink = screen.getByText('Details');
    const id = url.replace(/\D/g,'');
    expect(detailsLink).toBeVisible();
    expect(detailsLink).toHaveAttribute('href', `/${id}`);
  });

  test('with empty films', () => {
    const name = personStub.name;
    const url = personStub.url;
    const films: string[] = [];
    
    render(
      <MemoryRouter>
        <PersonCard name={name} url={url} films={films} />
      </MemoryRouter>
    );
    expect(screen.getByText(name)).toBeVisible();
  
    expect(screen.getByText('Films:')).toBeVisible();
    expect(screen.getByText('No Films')).toBeVisible();
  
    const detailsLink = screen.getByText('Details');
    const id = url.replace(/\D/g,'');
    expect(detailsLink).toBeVisible();
    expect(detailsLink).toHaveAttribute('href', `/${id}`)
  });
});
