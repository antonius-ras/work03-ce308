import React from 'react';
import { Text, View } from 'react-native';
import { CustomButton } from './CustomButton'; // import ปุ่มที่เราเพิ่งสร้าง

type ItemCardProps = {
  productName: string;
  price: number;
  pcs: number;
  btnSize: 'sm' | 'md' | 'lg';
  btnColor: 'primary' | 'secondary' | 'danger';
};

export default function ItemCard({ 
  productName, 
  price, 
  pcs, 
  btnSize, 
  btnColor 
}: ItemCardProps) {
  return (
    <View className="bg-gray-200 p-4 rounded-xl mb-4 mx-4 items-start">
      <Text className="text-4xl font-bold mb-2">
        ชื่อสินค้า: {productName}
      </Text>
      <View className="mb-4">
        <Text className="text-base">ราคา: {price}</Text>
        <Text className="text-base">จำนวน: {pcs}</Text>
      </View>
      <CustomButton 
        title="สั่งซื้อ" 
        size={btnSize} 
        variant={btnColor} 
        onPress={() => { alert(`สั่งซื้อ ${productName} แล้ว!`); }}/>
    </View>
  );
}