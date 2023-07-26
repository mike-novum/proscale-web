import { useMemo, type FC } from 'react';
import styled from 'styled-components';
import { Scale } from 'tonal';

import { ControlButton } from '../../ui';
import { playNotes } from '../../utils/tone';

interface ScalePickerProps {
  active: string;
  onChange: (scale: string) => void;
}

const PickerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 8px;
  max-width: 1024px;
  max-height: 300px;
  overflow: hidden;
  overflow-y: scroll;
  background: ${(props) => props.theme.colors.card};
  box-sizing: border-box;
  border-radius: 20px;
  padding: 16px;
  @media (max-height: 1024px) {
    padding: 12px;
    border-radius: 16px;
  }
  @media (max-height: 768px) {
    padding: 8px;
    border-radius: 12px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PlayWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  position: relative;
  /* TODO: add color in scheme */
  background: #5d5e74;

  /* TODO: fix hovers with parent */
  &:hover {
    /* TODO: add color in scheme */
    background: #525367;
  }
`;

// TODO: add memo
export const ScalePicker: FC<ScalePickerProps> = ({ onChange, active }) => {
  const scaleNames = useMemo(() => Scale.names(), []);

  return (
    <PickerWrapper>
      {scaleNames.map((scale) => {
        return (
          <ControlButton
            active={active === scale}
            key={scale}
            onClick={() => {
              onChange(scale);
            }}
          >
            <ContentWrapper>
              <span>{scale.toUpperCase()}</span>
              <PlayWrapper
                // TODO: replace this function
                onClick={(e) => {
                  e.stopPropagation();
                  const scaleNotes = Scale.get(`C4 ${scale}`).notes;
                  playNotes(scaleNotes);
                }}
              >
                {/* TODO: replace this icon to folder for icons */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 12C22.5006 12.2546 22.4353 12.5051 22.3105 12.727C22.1856 12.949 22.0055 13.1348 21.7875 13.2665L8.28 21.5297C8.05227 21.6691 7.79144 21.7452 7.52445 21.7502C7.25746 21.7551 6.99399 21.6887 6.76125 21.5578C6.53073 21.4289 6.3387 21.2409 6.2049 21.0132C6.07111 20.7855 6.00039 20.5263 6 20.2622V3.73779C6.00039 3.47368 6.07111 3.21445 6.2049 2.98673C6.3387 2.75902 6.53073 2.57106 6.76125 2.44217C6.99399 2.31124 7.25746 2.24482 7.52445 2.24977C7.79144 2.25471 8.05227 2.33084 8.28 2.47029L21.7875 10.7334C22.0055 10.8651 22.1856 11.051 22.3105 11.2729C22.4353 11.4949 22.5006 11.7453 22.5 12Z"
                    fill="white"
                  />
                </svg>
              </PlayWrapper>
            </ContentWrapper>
          </ControlButton>
        );
      })}
    </PickerWrapper>
  );
};
