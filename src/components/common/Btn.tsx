import styled from 'styled-components';

type ButtonProps = {
  title: string;
  width?: string;
  widthp?: string;
  height?: string;
  heightp?: string;
  marginl?: string;
  marginlp?: string;
  margint?: string;
  margintp?: string;
  fonts?: string;
  fontsp?: string;
  borderr?: string;
  disabled?: boolean;
  onClick?: any;
};

export default function Button({
  title,
  width = '14.24731rem',
  widthp = '8.92025rem',
  height = '3.69444rem',
  heightp = '2.3125rem',
  marginl = '0',
  marginlp = '0',
  margint = '0',
  margintp = '0',
  fonts = '1.5rem',
  fontsp = '1.125rem',
  borderr = '5rem',
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonLayout>
      <Btn
        onClick={onClick}
        $width={width}
        $widthp={widthp}
        $height={height}
        $heightp={heightp}
        $marginl={marginl}
        $marginlp={marginlp}
        $margint={margint}
        $margintp={margintp}
        $fonts={fonts}
        $fontsp={fontsp}
        $borderr={borderr}
        $disabled={disabled}
      >
        {title}
      </Btn>
    </ButtonLayout>
  );
}

const ButtonLayout = styled.div``;

const Btn = styled.button<{
  $width: string;
  $widthp: string;
  $height: string;
  $heightp: string;
  $marginl: string;
  $marginlp: string;
  $margint: string;
  $margintp: string;
  $fonts: string;
  $fontsp: string;
  $borderr: string;
  $disabled: boolean;
  onClick: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}>`
  /* text */
  all: unset;
  color: #fff;
  text-align: center;
  font-weight: 800;

  /* button */
  background: ${(props) => (props.$disabled ? ' #aeaeae' : '#2c2c2c')};

  border-radius: ${(props) =>
    props.$borderr === 'normal' ? '5rem' : props.$borderr};

  cursor: pointer;
  &:active {
    opacity: 0.3;
  }

  @media all and (min-width: 391px) {
    font-size: ${(props) => props.$fonts};
    width: ${(props) =>
      props.$width === 'normal' ? '14.24731rem' : props.$width};
    margin-left: ${(props) =>
      props.$marginl === 'normal' ? '10rem' : props.$marginl};
    margin-top: ${(props) =>
      props.$margint === 'normal' ? '10rem' : props.$margint};
    height: ${(props) => (props.$height === 'normal' ? '1rem' : props.$height)};
  }
  @media all and (max-width: 390px) {
    font-size: ${(props) => props.$fontsp};
    width: ${(props) => props.$widthp};
    margin-left: ${(props) => props.$marginlp};
    margin-top: ${(props) => props.$margintp};
    height: ${(props) => props.$heightp};
  }
`;
