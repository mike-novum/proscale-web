import type { FC } from 'react';

interface FretNumberProps {
  value: number;
  width: number;
}
export const FretNumber: FC<FretNumberProps> = ({ value, width }) => {
  return (
    <div
      style={{
        position: 'absolute',
        // background: '#ff0095',
        height: '45px',
        left: 0,
        top: 'calc(100% + 15px)',
        width,
        textAlign: 'center',
      }}
    >
      {value}
    </div>
  );
};
