import React from 'react';
import NormalField from './fields/NormalField';
import AsyncField from './fields/AsyncField';

const AdvancedField = ({ field, ...props }) => {
  if (!field.isReference) {
    return <NormalField {...props} />;
  } else {
    return <AsyncField reference={field.reference} {...props} />;
  }
};

export default AdvancedField;
