import styled from 'styled-components';

type ButtonProps = {
  title: string;
  width?: string;
  widthP?: string;
  height?: string;
  heightP?: string;
  marginL?: string;
  marginLP?: string;
  marginT?: string;
  marginTP?: string;
  fontS?: string;
  fontSP?: string;
  borderR?: string;
  onClick?: () => void;
};

export default function Button({
  title,
  width = '14.24731rem',
  widthP = '8.92025rem',
  height = '3.69444rem',
  heightP = '2.3125rem',
  marginL = '0',
  marginLP = '0',
  marginT = '0',
  marginTP = '0',
  fontS = '1.5rem',
  fontSP = '1.125rem',
  borderR = '5rem',
  onClick,
}: ButtonProps) {
  return (
    <ButtonLayout>
      <Btn
        width={width}
        widthP={widthP}
        height={height}
        heightP={heightP}
        marginL={marginL}
        marginLP={marginLP}
        marginT={marginT}
        marginTP={marginTP}
        fontS={fontS}
        fontSP={fontSP}
        borderR={borderR}
        onClick={onClick}
      >
        {title}
      </Btn>
    </ButtonLayout>
  );
}

const ButtonLayout = styled.div``;
const Btn = styled.button<{
  width: string;
  widthP: string;
  height: string;
  heightP: string;
  marginL: string;
  marginLP: string;
  marginT: string;
  marginTP: string;
  fontS: string;
  fontSP: string;
  borderR: string;
}>`
  /* text */
  all: unset;
  color: #fff;
  text-align: center;
  font-weight: 800;

  /* button */
  background: #2c2c2c;
  border-radius: ${(props) =>
    props.borderR === 'normal' ? '5rem' : props.borderR};

  cursor: pointer;
  &:active {
    opacity: 0.3;
  }

  @media all and (min-width: 768px) {
    font-size: ${(props) =>
      props.fontS === 'normal' ? '1.5rem' : props.fontS};
    width: ${(props) =>
      props.width === 'normal' ? '14.24731rem' : props.width};
    margin-left: ${(props) =>
      props.marginL === 'normal' ? '10rem' : props.marginL};
    margin-top: ${(props) =>
      props.marginT === 'normal' ? '10rem' : props.marginT};
    height: ${(props) => (props.height === 'normal' ? '1rem' : props.height)};
  }
  @media all and (min-width: 390px) and (max-width: 767px) {
    font-size: ${(props) =>
      props.fontSP === 'normal' ? '1.5rem' : props.fontSP};
    width: ${(props) =>
      props.widthP === 'normal' ? '14.24731rem' : props.widthP};
    margin-left: ${(props) =>
      props.marginLP === 'normal' ? '10rem' : props.marginLP};
    margin-top: ${(props) =>
      props.marginTP === 'normal' ? '10rem' : props.marginTP};
    height: ${(props) => (props.heightP === 'normal' ? '1rem' : props.heightP)};
  }
`;
