import styled from 'styled-components'

type RectangleButtonProps = {
    title: string;
};

export default function Button({ title }: RectangleButtonProps) {
    return (
        <ButtonLayout>
            <RectangleBtn>{title}</RectangleBtn>
        </ButtonLayout>
    )
};

const ButtonLayout = styled.div``;
const RectangleBtn = styled.button`
  /* text */
  width: 16rem;
  height: 2.25rem;
  color: #FFF;
  text-align: center;
  font-family: Noto Sans;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  
  /* button */
  width: 22.1875rem;
  height: 4.125rem;
  border-radius: 0.5625rem;
  background: #222;
`;
