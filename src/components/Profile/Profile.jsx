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

export default function Profile({ avatar, username, tag, location, stats }) {
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
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </Stats>
    </Container>
  );
}
