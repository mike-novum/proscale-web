import { useWindowSize } from '../../../../utils/window';

/**
 * Функция, которая определяет, выделать этот лад или нет
 * @param number - индекс лада
 * @returns
 */
export const isBigFret = (number: number): boolean =>
  number === 3 ||
  number === 5 ||
  number === 7 ||
  number === 9 ||
  number === 12 ||
  number === 15 ||
  number === 17 ||
  number === 19 ||
  number === 21;

/**
 * Колено для расчета отступов
 */
const KNEE_OFFSET = 16;

/**
 * Хук отдающий ширину грифа в зависимости от количества струн и ширины экрана
 * @param stringsCount - количество струн на инструменте
 * @returns
 */
export const useMobileNeckWidth = (stringsCount: number): number => {
  const { width } = useWindowSize();

  const maxWidth = width - KNEE_OFFSET * 6;

  const ratio = 10;
  if (stringsCount === 4) {
    return maxWidth - 4 * ratio;
  }
  if (stringsCount === 6) {
    return maxWidth - 2 * ratio;
  }
  if (stringsCount === 7) {
    return maxWidth - 1 * ratio;
  }

  return maxWidth;
};

/**
 * Функция для расчета размера лада (лады уменьшаются, как на реальном инструменте)
 * @param index - индекс лада
 * @param fretSize - размер первого лада
 * @returns
 */
export const calculateFretSize = (index: number, fretSize: number) =>
  Math.trunc(-Math.sqrt(40 * index) + fretSize);
