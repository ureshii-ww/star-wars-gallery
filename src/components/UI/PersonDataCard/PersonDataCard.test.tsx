import PersonDataCard, { PersonDataCardProps } from './PersonDataCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('PersonDataCard', () => {
  it(`renders data if it's not an array`, () => {
    const propsStub: PersonDataCardProps = {
      title: 'title',
      data: 'dataStub'
    }
    render(<PersonDataCard {...propsStub} />)
    
    expect(screen.getByText(propsStub.title)).toBeVisible();
    expect(screen.getByText('dataStub')).toBeVisible();
    expect(screen.getByText('dataStub')).toHaveAttribute('href', 'dataStub');
  })
  
  it(`renders data if it's an array`, () => {
    const propsStub: PersonDataCardProps = {
      title: 'title',
      dataArray: ['dataStub0', 'dataStub1']
    }
    render(<PersonDataCard {...propsStub} />)
    
    expect(screen.getByText(propsStub.title)).toBeVisible();
    propsStub.dataArray?.forEach(item => {
      expect(screen.getByText(item)).toBeVisible();
      expect(screen.getByText(item)).toHaveAttribute('href', item);
    })
  })
  
  it(`renders error message if there's no data`, () => {
    const propsStub: PersonDataCardProps = {
      title: 'title',
    }
    render(<PersonDataCard {...propsStub} />)
    
    expect(screen.getByText('No data')).toBeVisible();
  })
  
  it(`renders error message if dataArray is empty`, () => {
    const propsStub: PersonDataCardProps = {
      title: 'title',
      dataArray: []
    }
    render(<PersonDataCard {...propsStub} />)
    
    expect(screen.getByText('No data')).toBeVisible();
  })
})