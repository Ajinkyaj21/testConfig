import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it} from 'vitest';
import App from '../App.jsx'

describe('Component', () => {
  it('should take heading', () => {
    render(<App/>);
    expect(screen.getByText('Sum')).toBeInTheDocument();
  });
});
