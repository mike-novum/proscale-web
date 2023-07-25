export type GuitarKey = '6' | '7' | '8' | 'Bass' | 'Ukulele';

export type Guitar = {
  key: GuitarKey;
  name: string;
};

export const AllGuitars: Guitar[] = [
  {
    key: '6',
    name: '6 string',
  },
  // {
  //   key: '7',
  //   name: '7 string',
  // },
  // {
  //   key: '8',
  //   name: '8 string',
  // },
  // {
  //   key: 'Bass',
  //   name: 'Bass',
  // },
  // {
  //   key: 'Ukulele',
  //   name: 'Ukulele',
  // },
];
