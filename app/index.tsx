import { FlatList } from "react-native";
import { CenteredView } from "./_component/CenteredView";
import ItemCard from "./_component/ItemCard";
import "./global.css";

const items = [
  { id: '1', productName: 'Item One', price: 2000 ,pcs:10, btnSize: "sm",btnColor:"primary"},
  { id: '2', productName: 'Item Two', price: 1000 ,pcs:10, btnSize: "md",btnColor:"secondary"},
  { id: '3', productName: 'Item Three', price: 1500 ,pcs:10, btnSize: "lg",btnColor:"danger"},
];

export default function Index() {
  return (
    <CenteredView>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCard
            productName={item.productName}
            price={item.price}
            pcs={item.pcs}
            btnSize={item.btnSize as any}
            btnColor={item.btnColor as any}/>)}
        contentContainerStyle={{ paddingVertical: 20 }}/>
    </CenteredView> 
  );
}