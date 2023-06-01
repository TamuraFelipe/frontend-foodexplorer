
import {
    Container,
} from './styles';

export const Input = ({ id, title, icon: Icon, disabled, ...rest }) => {
  return (
    <Container>
        <label htmlFor={id}>
          {title}
        </label>

        {Icon && <Icon size={30} />}
        <input 
        id={id}
        {...rest}
        disabled={disabled}
        />
    </Container>
  )
}

