import { useMemo, type FC, memo, useState } from 'react';
import { Scale } from 'tonal';
import { ControlButton } from 'ui';
import { playNotes } from 'lib/tone';
import { Swiper, SwiperSlide } from 'swiper/react';
import { splitToChunks } from 'utils/arrays';

import {
  ContentWrapper,
  NavigationButton,
  Pagination,
  PickerWrapper,
  PlayButton,
  SlideWrapper,
} from './components';

interface ScalePickerProps {
  active: string;
  onChange: (scale: string) => void;
}

const _ScalePicker: FC<ScalePickerProps> = ({ onChange, active }) => {
  const pages = useMemo(() => splitToChunks(Scale.names(), 15), []);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <PickerWrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(e) => {
          setActiveIndex(e.activeIndex);
        }}
        style={{ height: '100%' }}
      >
        {pages.map((page, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={index}>
              <SlideWrapper>
                {page.map((scale) => {
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
                        <PlayButton
                          onClick={(e) => {
                            e.stopPropagation();
                            const scaleNotes = Scale.get(`C4 ${scale}`).notes;
                            playNotes(scaleNotes);
                          }}
                        />
                      </ContentWrapper>
                    </ControlButton>
                  );
                })}
              </SlideWrapper>
            </SwiperSlide>
          );
        })}
        <Pagination activeIndex={activeIndex} childs={pages} />
        {activeIndex !== 0 && <NavigationButton type="prev" />}
        {activeIndex !== pages.length - 1 && <NavigationButton type="next" />}
      </Swiper>
    </PickerWrapper>
  );
};

export const ScalePicker = memo(_ScalePicker);
