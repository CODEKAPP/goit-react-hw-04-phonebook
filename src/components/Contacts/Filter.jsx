import React from 'react';
import { FilterStyleContainer } from './Styles/FormStyles';
import { InputStyle } from './Styles/InputStyle';
import { LabelStyle } from './Styles/LabelStyle';

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleClearFilter = () => {
    setFilter('');
  };

  return (
    <FilterStyleContainer>
      <LabelStyle htmlFor="filter">Find contacts by name</LabelStyle>
      <div style={{ position: 'relative' }}>
        <InputStyle
          type="text"
          name="filter"
          placeholder="Search..."
          value={filter}
          onChange={handleFilterChange}
        />
        {filter && (
          <button
            onClick={handleClearFilter}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              border: 'none',
              background: 'transparent',
            }}
          >
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>X</span>
          </button>
        )}
      </div>
    </FilterStyleContainer>
  );
};

export default Filter;
