import type { FC, MouseEventHandler } from 'react';
import { Wrappers } from 'ui/Button/Wrappers';
import type { IconType } from 'react-icons';

import { SubButton } from './SubButton';

interface MultiButtonProps {
  Icon: IconType;
  iconSize?: number;
  active?: boolean;
  label: string;
  description?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onClickSub?: MouseEventHandler<HTMLDivElement>;
}

export const MultiButton: FC<MultiButtonProps> = ({
  label,
  description,
  active,
  iconSize = 14,
  Icon,
  onClick,
  onClickSub,
}) => {
  const Container = active ? Wrappers.primaryWrapper : Wrappers.defaultWrapper;

  return (
    <Container
      title={description}
      size="default"
      onClick={onClick}
      style={{
        paddingLeft: 22,
        paddingRight: 2,
        textTransform: 'capitalize',
      }}
    >
      <span>{label}</span>

      {onClickSub && (
        <SubButton
          iconSize={iconSize}
          Icon={Icon}
          onClick={(e) => {
            e.stopPropagation();
            onClickSub(e);
          }}
        />
      )}
    </Container>
  );
};
