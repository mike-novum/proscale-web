import type { FC } from 'react';
import styled from 'styled-components';

import { Button } from './Button';

const DemoStandWrapper = styled.div`
  position: relative;
  padding: 32px;
  overflow-y: scroll;
`;

export const DemoStand: FC = () => {
  return (
    <DemoStandWrapper>
      <h1>H1 demo stend</h1>
      <h2>H2 demo stend</h2>
      <h3>H3 demo stend</h3>
      <h4>H4 demo stend</h4>
      <p>P some text in stand</p>
      <h2>small size</h2>
      <div style={{ marginTop: 20, gap: 8, display: 'flex' }}>
        <Button size="small">Default</Button>
        <Button size="small" type="primary">
          Primary
        </Button>
        <Button size="small" type="outlined">
          Outline
        </Button>
        <Button size="small" type="ghost">
          Ghost
        </Button>
      </div>
      <h2>default size</h2>
      <div style={{ marginTop: 20, gap: 8, display: 'flex' }}>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="outlined">Outline</Button>
        <Button type="ghost">Ghost</Button>
      </div>
      <h2>large size</h2>
      <div style={{ marginTop: 20, gap: 8, display: 'flex' }}>
        <Button size="large">Default</Button>
        <Button size="large" type="primary">
          Primary
        </Button>
        <Button size="large" type="outlined">
          Outline
        </Button>
        <Button size="large" type="ghost">
          Ghost
        </Button>
      </div>
      <h2>Circle size</h2>
      <div style={{ marginTop: 20, gap: 8, display: 'flex' }}>
        <Button shape="circle">Default</Button>
        <Button shape="circle" type="primary">
          Primary
        </Button>
        <Button shape="circle" type="outlined">
          Outline
        </Button>
        <Button shape="circle" type="ghost">
          Ghost
        </Button>
      </div>
    </DemoStandWrapper>
  );
};
