import React from 'react';

type Props = {
  // eslint-disable-next-line no-unused-vars
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: React.FC<Props> = ({ handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Busca una moneda"
      className="form-control bg-dark text-light border-0 mt-4 text-center"
      onChange={handleSearch}
    />
  );
};
