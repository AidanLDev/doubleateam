import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { BsFillHandThumbsUpFill, BsHandThumbsUp } from 'react-icons/bs';

const StyledUL = ({ items, iconColour }) => {
  return (
    <List spacing={3}>
      {items.map(({ text, isNested }, idx) => {
        return (
          <ListItem key={`${text}__${idx}`} pl={isNested ? '22px' : '0'}>
            <ListIcon
              as={isNested ? BsHandThumbsUp : BsFillHandThumbsUpFill}
              color={iconColour ? iconColour : 'red'}
            />
            {text}
          </ListItem>
        );
      })}
    </List>
  );
};

export default StyledUL;
