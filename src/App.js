import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Men from './Components/Men';
import Women from './Components/Women';
import Accessories from './Components/Accessories';
import Craftmanship from './Components/Craftmanship';
import Lodge from './Components/Lodge';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Recover from './Components/Recover';
import Content from './Components/Content';
import Career from './Components/Career';
import About from './Components/About';
import Notice from './Components/Notice';
import Return from './Components/Return';
import Terms from './Components/Terms';
const App = () => {
  const menProduct = [
    {
      id: 1,
      name: "Tia Originale Black",
      url: "https://www.masongarments.com/cdn/shop/products/tia-originale-black-384528.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 2,
      name: "Tia Originale Stone",
      url: "https://www.masongarments.com/cdn/shop/products/tia-originale-stone-999721.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 3,
      name: "Tia Originale Taupe",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-taupe-437991.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 4,
      name: "Tia Originale Grey",
      url: "https://www.masongarments.com/cdn/shop/products/tia-originale-grey-743484.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 5,
      name: "Amalfi Loafer Blue",
      url: "https://www.masongarments.com/cdn/shop/products/tia-originale-blue-782355.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 6,
      name: "Amalfi Loafer Forest",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-forest-850916.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 7,
      name: "Amalfi Loafer Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-grey-763099.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 8,
      name: "Amalfi Loafer Blue",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-blue-231078.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 9,
      name: "Genova Massiccio White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-massiccio-white-885464.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 10,
      name: "Genova Massiccio Peach",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-essenziale-peach-759238.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 11,
      name: "Genova Massiccio Brown",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-regolare-brown-443608.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 12,
      name: "Genova Massiccio Green",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-essenziale-green-719096.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 13,
      name: "Torino Essenziale Blue",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/torino-essenziale-blue-314011.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 14,
      name: "Torino Scalata Taupe",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/torino-scalata-taupe-515772.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 15,
      name: "Torino Scalata Brown",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/torino-scalata-brown-931521.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 16,
      name: "Torino Originale Taupe",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/torino-originale-taupe-488704.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 17,
      name: "Tia Heartbeat Black White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-heartbeat-black-white-519608.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 18,
      name: "Tia Heartbeat Orange",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-heartbeat-orange-187933.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 19,
      name: "Tia Heartbeat Tonal White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-heartbeat-tonal-white-498146.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 20,
      name: "Tia Heartbeat Green",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-heartbeat-green-479659.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 21,
      name: "Venice Movimento White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/venice-movimento-white-357044.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 22,
      name: "Venice Movimento Creme",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/venice-movimento-creme-130201.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 23,
      name: "Venice Movimento Brown",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/venice-movimento-brown-739764.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 24,
      name: "Venice Movimento Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/venice-movimento-black-387762.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 25,
      name: "Tia Sportivo Tonal White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-sportivo-tonal-white-253220.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 26,
      name: "Tia Sportivo Orange",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-sportivo-orange-477700.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 27,
      name: "Tia Sportivo Green",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-regolare-green-254479.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 28,
      name: "Genova Regolare Green",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-regolare-green-254479.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 29,
      name: "Massif Hi Capelli Blue",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-hi-capelli-blue-236397.jpg",
      price: "43,600.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 30,
      name: "Spur Scalata Creme",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/spur-scalata-creme-280345.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 31,
      name: "Massif Hi Scalata Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-hi-scalata-black-142564.jpg",
      price: "43,600.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 32,
      name: "Massif Hi Scalata Tonal Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-hi-scalata-tonal-black-230457.jpg",
      price: "43,600.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 33,
      name: "Massif Scalata Creme",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-scalata-creme-288643.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 34,
      name: "Spur Scalata Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/spur-scalata-black-641263.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 35,
      name: "Massif Scalata Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-scalata-black-173375.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 36,
      name: "Massif Scalata Tonal Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-scalata-tonal-black-736126.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 37,
      name: "Genova Essenziale White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-essenziale-white-692199.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 38,
      name: "Genova Essenziale Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-essenziale-grey-922591.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 39,
      name: "Genova Solido Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-solido-grey-111588.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 40,
      name: "Genova Massiccio Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-massiccio-grey-185803.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 41,
      name: "Tia Squalo White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-squalo-white-883779.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 42,
      name: "Tia Originale Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-grey-743484.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 43,
      name: "Tia Originale Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-black-384528.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 44,
      name: "Tia Originale Yellow",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-yellow-582121.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 45,
      name: "Amalfi Loafer Brown",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-brown-418465.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 46,
      name: "Amalfi Loafer Stone",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-stone-787947.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 47,
      name: "Amalfi Loafer Dark Blue",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-dark-blue-127433.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 48,
      name: "Amalfi Loafer Tonal Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-tonal-black-448163.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 49,
      name: "Tia Nubuck Black White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-nubuck-black-white-613117.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 50,
      name: "Tia Nubuck Black Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-nubuck-black-black-121275.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
  ]
  const womenProduct = [
    {
      id: 1,
      name: "Tia Originale Blue",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-blue-782355.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 2,
      name: "Tia Originale Brown",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-brown-396205.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 3,
      name: "Tia Originale Taupe",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-taupe-437991.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 4,
      name: "Tia Originale Creme",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-creme-955783.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 5,
      name: "Amalfi Loafer Taupe",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-taupe-235040.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 6,
      name: "Amalfi Loafer Forest",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-forest-850916.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 7,
      name: "Amalfi Loafer Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-grey-763099.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 8,
      name: "Amalfi Loafer Blue",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-blue-231078.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 9,
      name: "Genova Massiccio White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-massiccio-white-885464.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 10,
      name: "Genova Massiccio Peach",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-essenziale-peach-759238.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 11,
      name: "Genova Massiccio Brown",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-regolare-brown-443608.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 12,
      name: "Genova Massiccio Green",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-essenziale-green-719096.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 13,
      name: "Torino Essenziale Blue",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/torino-essenziale-blue-314011.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 14,
      name: "Torino Scalata Taupe",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/torino-scalata-taupe-515772.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 15,
      name: "Torino Scalata Brown",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/torino-scalata-brown-931521.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 16,
      name: "Torino Originale Taupe",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/torino-originale-taupe-488704.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 17,
      name: "Tia Heartbeat Black White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-heartbeat-black-white-519608.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 18,
      name: "Tia Heartbeat Orange",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-heartbeat-orange-187933.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 19,
      name: "Tia Heartbeat Tonal White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-heartbeat-tonal-white-498146.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 20,
      name: "Tia Heartbeat Green",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-heartbeat-green-479659.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 21,
      name: "Venice Movimento White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/venice-movimento-white-357044.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 22,
      name: "Venice Movimento Creme",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/venice-movimento-creme-130201.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 23,
      name: "Venice Movimento Brown",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/venice-movimento-brown-739764.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 24,
      name: "Venice Movimento Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/venice-movimento-black-387762.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 25,
      name: "Tia Sportivo Tonal White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-sportivo-tonal-white-253220.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 26,
      name: "Tia Sportivo Orange",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-sportivo-orange-477700.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 27,
      name: "Tia Sportivo Green",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-regolare-green-254479.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 28,
      name: "Genova Regolare Green",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-regolare-green-254479.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 29,
      name: "Massif Hi Capelli Blue",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-hi-capelli-blue-236397.jpg",
      price: "43,600.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 30,
      name: "Spur Scalata Creme",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/spur-scalata-creme-280345.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 31,
      name: "Massif Hi Scalata Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-hi-scalata-black-142564.jpg",
      price: "43,600.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 32,
      name: "Massif Hi Scalata Tonal Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-hi-scalata-tonal-black-230457.jpg",
      price: "43,600.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 33,
      name: "Massif Scalata Creme",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-scalata-creme-288643.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 34,
      name: "Spur Scalata Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/spur-scalata-black-641263.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 35,
      name: "Massif Scalata Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-scalata-black-173375.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 36,
      name: "Massif Scalata Tonal Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-scalata-tonal-black-736126.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 37,
      name: "Genova Essenziale White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-essenziale-white-692199.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 38,
      name: "Genova Essenziale Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-essenziale-grey-922591.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 39,
      name: "Genova Solido Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-solido-grey-111588.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 40,
      name: "Genova Massiccio Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-massiccio-grey-185803.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 41,
      name: "Tia Squalo White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-squalo-white-883779.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 42,
      name: "Tia Originale Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-grey-743484.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 43,
      name: "Tia Originale Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-black-384528.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 44,
      name: "Tia Originale Yellow",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-yellow-582121.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 45,
      name: "Amalfi Loafer Brown",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-brown-418465.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 46,
      name: "Amalfi Loafer Stone",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-stone-787947.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 47,
      name: "Amalfi Loafer Dark Blue",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-dark-blue-127433.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 48,
      name: "Amalfi Loafer Tonal Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-tonal-black-448163.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 49,
      name: "Tia Nubuck Black White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-nubuck-black-white-613117.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 50,
      name: "Tia Nubuck Black Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-nubuck-black-black-121275.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
  ]
  // accessProducts Array Object 
  const accessProducts = [
    {
      id: 1,
      url: "https://www.masongarments.com/cdn/shop/products/essential-kit-775407.jpg?v=1704786746&width=600",
      name: "Esssential",
      price: "2,000.00"
    },
    {
      id: 2,
      url: "https://www.masongarments.com/cdn/shop/products/suede-cleaning-kit-485417.jpg?v=1704786750&width=600",
      name: "Suede Cleaning Kit",
      price: "1,500.00"
    },
    {
      id: 3,
      url: "https://www.masongarments.com/cdn/shop/products/premium-shoe-cleaner-322652.jpg?v=1704786747&width=600",
      name: "Premium Shoe Cleaner",
      price: "2,000.00"
    },
    {
      id: 4,
      url: "https://www.masongarments.com/cdn/shop/products/repel-spray-456137.jpg?v=1704786747&width=600",
      name: "Repel Spray",
      price: "1,500.00"
    },
    {
      id: 5,
      url: "https://www.masongarments.com/cdn/shop/products/foam-shoe-cleaner-588674.jpg?v=1704786747&width=600",
      name: "Foam Shoe Cleaner",
      price: "1,900.00"
    },
    {
      id: 6,
      url: "https://www.masongarments.com/cdn/shop/products/travel-shoe-cleaning-kit-836639.jpg?v=1704786749&width=600",
      name: "Travel Shoe Cleaning Kit",
      price: "2,700.00"
    },
    {
      id: 7,
      url: "https://www.masongarments.com/cdn/shop/products/cesare-tonale-black-289700.jpg?v=1703046703&width=600",
      name: "Cesare Tonale Black",
      price: "13,700.00"
    },
    {
      id: 8,
      url: "https://www.masongarments.com/cdn/shop/products/cesare-universale-black-111379.jpg?v=1703046703&width=600",
      name: "Cesare Universale Black",
      price: "13,700.00"
    },
    {
      id: 9,
      url: "https://www.masongarments.com/cdn/shop/products/gift-card-304405.png?v=1705449579&width=600",
      name: "Gift Card",
      price: "2,300.00"
    },
    {
      id: 10,
      url: "https://www.masongarments.com/cdn/shop/products/mystery-box-2-pairs-592468.png?v=1705449579&width=600",
      name: "Mystery Box 2 Pairs",
      price: "26,900.00"
    }
  ];

  const searchArray = [...menProduct, ...womenProduct, ...accessProducts];

  return (
    <>
      <BrowserRouter>
        <Navbar searchData={searchArray} />
        <Routes>
          {/* <Route path='/' element={<Navbar />} /> */}
          <Route index element={<Home />} />
          <Route path='Men' element={<Men />} />
          <Route path='Women' element={<Women />} />
          <Route path='Craftmanship' element={<Craftmanship />} />
          <Route path='Accessories' element={<Accessories />} />
          <Route path='Lodge' element={<Lodge />} />
          <Route path='Login' element={<Login />} />
          <Route path='Signup' element={<Signup />} />
          <Route path='Recover' element={<Recover />} />
          <Route path='Content' element={<Content />} />
          <Route path='About' element={<About />} />
          <Route path='Career' element={<Career />} />
          <Route path='Notice' element={<Notice />} />
          <Route path='Return' element={<Return />} />
          <Route path='Terms' element={<Terms />} />
          {/* <Route path='*' element={<Nopage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App