import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  it('renders the logo and company name', () => {
    render(<Navbar />);
    expect(screen.getByText('Cabinet of Coffee Affairs')).toBeInTheDocument();
  });

  it('shows mobile menu when hamburger is clicked', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', { name: '' });
    fireEvent.click(menuButton);
    
    expect(screen.getByText('Home')).toBeVisible();
    expect(screen.getByText('About')).toBeVisible();
    expect(screen.getByText('Products')).toBeVisible();
    expect(screen.getByText('Contact')).toBeVisible();
  });

  it('scrolls to section when nav item is clicked', () => {
    const scrollIntoViewMock = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    
    render(<Navbar />);
    const aboutLink = screen.getAllByText('About')[0];
    fireEvent.click(aboutLink);
    
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });
});