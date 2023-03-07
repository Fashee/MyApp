import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
const Home = () => {
  const data = [{value: 80}, {value: 50}];
  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('../Assets/images/dp.jpg')}
          />
        </TouchableOpacity>
        <Text style={styles.Text}>Dashboard</Text>
        <TouchableOpacity style={styles.Icon}>
          <Icon style={styles.search} name="search1" size={15} color={'#000'} />
        </TouchableOpacity>
      </View>
      <View style={styles.charts}>
        <Text style={styles.text}>Efficiency :</Text>
        <PieChart
          style={styles.PieChart}
          radius={120}
          data={data}
          donut
          strokeWidth={1}
          innerRadius={90}
        />
        <View style={styles.bottom}>
          <Icon
            style={styles.UParrow}
            name="arrowup"
            size={10}
            color={'blue'}
          />
          <Text style={styles.Etext}>Earn</Text>
          <Icon
            style={styles.downarrow}
            name="arrowdown"
            size={10}
            color={'#000'}
          />
          <Text style={styles.Stext}>Spend</Text>
        </View>
      </View>
      <Text style={styles.Yproducts}>Your Products :</Text>
      <View style={styles.bottomlines}>
        <Icon style={styles.stars} name="star" size={20} color={'#73D8FF'} />
        <Text style={styles.words}>Retirement Annuity</Text>
        <Text style={styles.Price}>R12,000</Text>
      </View>
      <View style={styles.bottomlines}>
        <Icon style={styles.stars} name="star" size={20} color={'#000'} />
        <Text style={styles.words}>Life Insurance</Text>
        <Text style={styles.Price2}>R12,000</Text>
      </View>
      <View style={styles.bottomlines}>
        <Icon style={styles.stars} name="star" size={20} color={'green'} />
        <Text style={styles.words}>Saving</Text>
        <Text style={styles.Price3}>R12,000</Text>
      </View>
      <Text style={styles.Ybehavior}>Your behavior :</Text>
      <View style={styles.bottomlines}>
        <Icon style={styles.stars} name="star" size={20} color={'orange'} />
        <Text style={styles.words}>Proactive User</Text>
        <Text style={styles.Price2}>R12,000</Text>
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    marginTop: 10,
    width: '80%',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  imageView: {
    backgroundColor: 'blue',
    width: 35,
    height: 35,
    elevation: 6,
    shadowColor: 'black',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  Text: {
    color: '#000',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  Icon: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    elevation: 6,
    shadowColor: 'black',
    borderColor: '#000',
    borderWidth: 1,
    padding: 2,
    borderRadius: 10,
  },
  search: {
    alignSelf: 'center',
    marginTop: 3,
  },
  charts: {
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  PieChart: {
    height: '50%',
    marginLeft: 50,
  },
  text: {
    color: '#000',
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  Etext: {
    color: '#000',
  },
  Stext: {
    color: '#000',
  },
  bottom: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  UParrow: {
    marginTop: 5,
  },
  downarrow: {
    marginTop: 5,
    marginLeft: 20,
  },
  Yproducts: {
    color: 'gray',
    marginLeft: 40,
    marginTop: 30,
  },
  bottomlines: {
    flexDirection: 'row',
    marginTop: 10,
  },
  stars: {
    marginLeft: 40,
  },
  words: {
    color: 'gray',
    marginLeft: 5,
  },
  Price: {
    color: 'gray',
    marginLeft: 80,
  },
  Price2: {
    color: 'gray',
    marginLeft: 110,
  },
  Price3: {
    color: 'gray',
    marginLeft: 155,
  },
  Ybehavior: {
    color: 'gray',
    marginLeft: 40,
    marginTop: 20,
  },
});
