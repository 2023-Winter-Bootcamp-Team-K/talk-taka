import styled from 'styled-components';

type ButtonProps = {
  title: string;
  width?: string;
  marginL?: string;
  marginT?: string;
  fontS?: string;
  borderR?: string;
  onClick?: () => void;
};

export default function Button({
  title,
  width = '14.24731rem',
  marginL = '0',
  marginT = '0',
  fontS = '1.5rem',
  borderR = '5rem',
  onClick,
}: ButtonProps) {
  return (
    <ButtonLayout>
      <Btn
        width={width}
        marginL={marginL}
        marginT={marginT}
        fontS={fontS}
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
  marginL: string;
  marginT: string;
  fontS: string;
  borderR: string;
}>`
  /* text */
  all: unset;
  width: 7.1875rem;
  height: 2.375rem;
  color: #fff;
  text-align: center;
  font-size: ${(props) => (props.fontS === 'normal' ? '1.5rem' : props.fontS)};
  font-weight: 800;

  /* button */
  width: ${(props) => (props.width === 'normal' ? '14.24731rem' : props.width)};
  margin-left: ${(props) =>
    props.marginL === 'normal' ? '10rem' : props.marginL};
  margin-top: ${(props) =>
    props.marginT === 'normal' ? '10rem' : props.marginT};
  height: 3.69444rem;
  border-radius: ${(props) =>
    props.borderR === 'normal' ? '5rem' : props.borderR};
  background: #2c2c2c;

  cursor: pointer;
  &:active {
    opacity: 0.3;
  }
`;
