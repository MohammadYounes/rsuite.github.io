import React from 'react';
import { InputNumber } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'InputNumber',
  examples: ['basic', 'size', 'decimals', 'max-min', 'step', 'disabled', 'fix', 'control'],
  dependencies: {
    InputNumber
  }
});
