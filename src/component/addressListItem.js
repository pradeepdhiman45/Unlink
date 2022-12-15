import Card from "./card";

const AddressListItem = ({ item }) => {
  return (
    <Card>
      <div className="contentBx">
        <h2>{item.payload_id}</h2>
        <div className="infoBox">
            <p className="nationality">{item.nationality}</p>
            <div className="subinfo">
                <p><b>Manufacturer : </b> {item.manufacturer}</p>
                <p><b>Payload Type : </b> {item.payload_type}</p>
            </div>
        </div>
      </div>
    </Card>
  );
};

export default AddressListItem;
