import Card from "./card";

const ListItem = ({ item }) => {
  return (
    <Card>
      <div className="contentBx">
        <h2>{item.title}</h2>
        <p>{item.details}</p>
        <a href={item.links.wikipedia}>Wiki</a>
        <a href={item.links.article}>Artical</a>
      </div>
    </Card>
  );
};

export default ListItem;
