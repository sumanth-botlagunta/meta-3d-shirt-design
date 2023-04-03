import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
import { SketchPicker } from 'react-color';
import { color } from 'framer-motion';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => {
          state.color = color.hex;
        }}
        presetColors={[
          '#FFFFFF',
          '#000000',
          '#FF0000',
          '#0066CC',
          '#FFA500',
          '#00FF00',
          '#FFFF00',
          '#800080',
          '#FFC0CB',
          '#808080',
        ]}
      />
    </div>
  );
};

export default ColorPicker;
