import {
  Container,
  Description,
  Stats,
  ImgAvatar,
  Name,
  Tag,
  Location,
  Item,
  Label,
  Quantity,
} from "./Profile.styled";
import PropTypes from "prop-types";

export default function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <Container>
      <Description>
        <ImgAvatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </Stats>
    </Container>
  );
}

Profile.propTypes = {
  isOpen: PropTypes.bool,
  searchable: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
