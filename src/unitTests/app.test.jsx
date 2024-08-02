import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi} from 'vitest';
import App from '../App.jsx'
import { CustomButton } from '../components/CustomButton.jsx';
import CustomDropdown from '../components/CustomDropdown.jsx';
import CustomInput from '../components/CustomInput.jsx';
import { LoginHeader } from '../components/LoginHeader.jsx';

describe('Component', () => {
  it('should take heading', () => {
    render(<App/>);
    expect(screen.getByText('Sum')).toBeInTheDocument();
  });
  it('should call the onClick function when clicked', () => {
    const mockOnClick = vi.fn();
    render(<CustomButton onClick={mockOnClick}>Onclick button</CustomButton>);
    const button = screen.getByText('Onclick button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
});
it('should call the handleSelectChange function on option selection', () => {
  const mockHandleSelectChange = vi.fn();
  const options = [
    { value: 'option1', display: 'Option 1' },
    { value: 'option2', display: 'Option 2' }
];
  render(
      <CustomDropdown
          dropdownOptions={options}
          handleSelectChange={mockHandleSelectChange}
      />
  );
  const firstOption = screen.queryByText(options[0].display);
  if (firstOption) {
      fireEvent.click(firstOption);
      expect(mockHandleSelectChange).toHaveBeenCalledTimes(1);
      expect(mockHandleSelectChange).toHaveBeenCalledWith(options[0].value, '');
  }
});
it('renders with mandatory indicator when mandatory is true', () => {
  render(<CustomInput label="My Label" name="name" mandatory />);
  const mandatoryStar = screen.getByText('*');
  expect(mandatoryStar).toBeInTheDocument();
});
it('should take url for logo', () => {
  const altHeaderLogo = "https://res.cloudinary.com/dgqtffxpf/image/upload/v1711545928/payphi_unx6bz.svg";
  render(<LoginHeader altHeaderLogo={altHeaderLogo} />);
  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('src', altHeaderLogo);
});

});

