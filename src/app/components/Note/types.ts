export interface DeviceProps {
  device: 'desktop' | 'mobile';
}

export type NoteTextProps = DeviceProps;

export interface NoteWrapperProps extends DeviceProps {
  isActive: boolean;
  isTonica: boolean;
  isFirstFret: boolean;
}

export interface NoteProps extends NoteWrapperProps {
  note: string;
  device: 'desktop' | 'mobile';
}
