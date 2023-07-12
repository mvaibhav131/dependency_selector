import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DependencySelector from '../component/Selector';
jest.mock('../component/selector.scss', () => {});

describe('DependencySelector', () => {
  test('renders without errors', () => {
    render(<DependencySelector/>);
    expect(screen.getByLabelText('Country:')).toBeInTheDocument();
    expect(screen.getByLabelText('State:')).toBeInTheDocument();
    expect(screen.getByLabelText('City:')).toBeInTheDocument();
  });

  test('updates state options when a country is selected', () => {
    render(<DependencySelector />);

    const countrySelect = screen.getByLabelText('Country:');
    fireEvent.change(countrySelect, { target: { value: 'United States' } });

    const stateSelect = screen.getByLabelText('State:');
    expect(stateSelect).toBeInTheDocument();

    fireEvent.change(stateSelect, { target: { value: 'California' } });
    const citySelect = screen.getByLabelText('City:');
    expect(citySelect).toBeInTheDocument();
  });

  test('updates city options when a state is selected', () => {
    render(<DependencySelector />);

    const countrySelect = screen.getByLabelText('Country:');
    fireEvent.change(countrySelect, { target: { value: 'United States' } });

    const stateSelect = screen.getByLabelText('State:');
    fireEvent.change(stateSelect, { target: { value: 'California' } });

    const citySelect = screen.getByLabelText('City:');
    expect(citySelect).toBeInTheDocument();
  });

  test('displays selected city', () => {
    render(<DependencySelector />);

    const countrySelect = screen.getByLabelText('Country:');
    fireEvent.change(countrySelect, { target: { value: 'United States' } });

    const stateSelect = screen.getByLabelText('State:');
    fireEvent.change(stateSelect, { target: { value: 'California' } });

    const citySelect = screen.getByLabelText('City:');
    fireEvent.change(citySelect, { target: { value: 'Los Angeles' } });

    const selectedCityText = screen.getByText(/Selected City:/);
    expect(selectedCityText).toBeInTheDocument();
    expect(selectedCityText).toHaveTextContent('Selected City: Los Angeles (California, United States)');
  });
});
