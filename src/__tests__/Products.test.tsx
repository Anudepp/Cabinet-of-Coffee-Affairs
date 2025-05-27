import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Products from '../components/Products';

describe('Products Component', () => {
  it('renders product cards', () => {
    render(<Products />);
    expect(screen.getByText('Our Premium Coffee Selection')).toBeInTheDocument();
    expect(screen.getAllByText('View Details').length).toBeGreaterThan(0);
  });

  it('opens modal when View Details is clicked', () => {
    render(<Products />);
    const viewDetailsButton = screen.getAllByText('View Details')[0];
    fireEvent.click(viewDetailsButton);
    
    expect(screen.getByText('Arabica Plantation AA')).toBeInTheDocument();
    expect(screen.getByText('Request a Sample')).toBeInTheDocument();
  });

  it('closes modal when Close button is clicked', () => {
    render(<Products />);
    
    // Open modal
    fireEvent.click(screen.getAllByText('View Details')[0]);
    expect(screen.getByText('Arabica Plantation AA')).toBeInTheDocument();
    
    // Close modal
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByText('Arabica Plantation AA')).not.toBeInTheDocument();
  });

  it('displays product specifications in modal', () => {
    render(<Products />);
    fireEvent.click(screen.getAllByText('View Details')[0]);
    
    expect(screen.getByText('Specifications')).toBeInTheDocument();
    expect(screen.getByText('Tasting Notes')).toBeInTheDocument();
    expect(screen.getByText(/floral aroma/i)).toBeInTheDocument();
  });
});