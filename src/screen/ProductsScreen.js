import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from '../data/products';

export default ProductsScreen=()=>{
    return(
      <FlatList 
        data={products}
        renderItem={({item})=>(
            <View style={styles.itemConatiner}>
                <Image style={styles.img} source={{uri:item.image}}></Image>
            </View>
      )} numColumns={2}/>
    );
}
const styles = StyleSheet.create({
    itemConatiner:{
      width:'50%',
      padding:1
    },
    img:{
      width:'100%',
      aspectRatio:1
    }
  });

