import styled from 'styled-components'

type ButtonProps = {
    title: string;
};

export default function Button({ title }: ButtonProps) {
    return (
        <ButtonLayout>
            <Btn>{title}</Btn>
        </ButtonLayout>
    )
};

const ButtonLayout = styled.div``;
const Btn = styled.button`
  /* text */
  width: 7.1875rem;
  height: 2.375rem;
  color: #FFF;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;

  /* button */
  width: 14.24731rem;
  height: 3.69444rem;
  border-radius: 5rem;
  background: #2C2C2C;
`;
