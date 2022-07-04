import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { FaDotCircle, FaRegDotCircle } from 'react-icons/fa';

const StyledUL = ({ items, iconColour }) => {
  return (
    <List spacing={3}>
      {items.map(({ text, isNested }, idx) => {
        return (
          <ListItem key={`${text}__${idx}`} pl={isNested ? '22px' : '0'}>
            <ListIcon
              as={isNested ? FaRegDotCircle : FaDotCircle}
              color={iconColour ? iconColour : 'green'}
            />
            {text}
          </ListItem>
        );
      })}
    </List>
  );
};

export default StyledUL;
