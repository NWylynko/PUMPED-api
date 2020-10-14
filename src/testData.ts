/* eslint-disable object-curly-newline */
import path from 'path';
import { addBrand } from './api/brand';
import { addCollection } from './api/collection';
import { addSection } from './api/section';
import { addStyle } from './api/style';
import { addImage } from './api/image';
import { addShoe } from './api/shoe';
import { addColour } from './api/colour';
import { addStock } from './api/stock';

const addTestData = async () => {
  await addImage(path.resolve(__dirname, '../testData/nike.jpg'), 'Nike icon'); // id 1
  await addImage(path.resolve(__dirname, '../testData/adidas.png'), 'Adidas icon'); // id 2

  await addBrand({ name: 'Nike', website: 'nike.com', icon: 1 }); // id 1
  await addBrand({ name: 'Adidas', website: 'nike.com.au', icon: 2 }); // id 2

  await addCollection({ name: 'Air Zoom' }); // id 1
  await addCollection({ name: 'Custom' }); // id 2
  await addCollection({ name: 'SUPERNOVA' }); // id 3
  await addCollection({ name: 'PREDATOR' }); // id 4
  await addCollection({ name: 'DAME' }); // id 5

  await addSection({ name: 'Mens' }); // id 1
  await addSection({ name: 'Womens' }); // id 2
  await addSection({ name: 'Unisex' }); // id 3

  await addStyle({ name: 'Runners' }); // id 1
  await addStyle({ name: 'Racing' }); // id 2
  await addStyle({ name: 'Basketball' }); // id 3
  await addStyle({ name: 'Football' }); // id 4

  await addImage(path.resolve(__dirname, '../testData/air-zoom-tempo-next.jpg'), 'air-zoom-tempo-next'); // id 3
  await addShoe({
    name: 'Air Zoom Tempo NEXT%',
    description: 'The Nike Air Zoom Tempo NEXT% mixes durability with a design that helps push you towards your personal best.',
    price: 270,
    releaseDate: Date.now() - 100000,
    BrandID: 1,
    StyleID: 1,
    SectionID: 1,
    CollectionID: 1,
    CoverImage: 3,
  }); // id 1
  await addColour({ ShoeID: '1', ImageIDs: ['3'], colour: 'White/Hyper', hex: '#dcdddf' }); // id 1
  await addStock({ ShoeID: 1, ColourID: 1, size: 11, stock: 2 }); // id 1
  await addStock({ ShoeID: 1, ColourID: 1, size: 10, stock: 3 }); // id 2

  await addImage(path.resolve(__dirname, '../testData/air-zoom-alphafly-next.jpg'), 'air-zoom-alphafly-next'); // id 4
  await addShoe({
    name: 'Air Zoom Alphafly NEXT%',
    description: 'Gear up for your next personal best with the Nike Air Zoom Alphafly NEXT%.',
    price: 370,
    releaseDate: Date.now() - 200000,
    BrandID: 1,
    StyleID: 2,
    SectionID: 2,
    CollectionID: 1,
    CoverImage: 4,
  }); // id 2
  await addColour({ ShoeID: '2', ImageIDs: ['4'], colour: 'White/Jade', hex: '#b5ccb0' }); // id 2
  await addStock({ ShoeID: 2, ColourID: 2, size: 9, stock: 3 }); // id 3

  await addImage(path.resolve(__dirname, '../testData/zoom-rize-2-by-you.jpg'), 'zoom-rize-2-by-you'); // id 5
  await addShoe({
    name: 'Zoom Rize 2 By You',
    description: "It's finally here: The Nike Zoom Rize 2 By You is a customisable shoe that's brimming with team spirit.",
    price: 230,
    releaseDate: Date.now() + 100000,
    BrandID: 1,
    StyleID: 3,
    SectionID: 3,
    CollectionID: 2,
    CoverImage: 5,
  }); // id 3
  await addColour({ ShoeID: '3', ImageIDs: ['5'], colour: 'Red', hex: '#c42933' }); // id 3
  await addStock({ ShoeID: 3, ColourID: 3, size: 10, stock: 1 }); // id 4

  await addImage(path.resolve(__dirname, '../testData/Supernova.jpg'), 'Supernova'); // id 6
  await addShoe({
    name: 'SUPERNOVA',
    description: "When you're ready to get serious about running, you're ready for adidas Supernova Shoes.",
    price: 160,
    releaseDate: Date.now() - 150000,
    BrandID: 2,
    StyleID: 1,
    SectionID: 1,
    CollectionID: 3,
    CoverImage: 6,
  }); // id 4
  await addColour({ ShoeID: '4', ImageIDs: ['6'], colour: 'CLOUD WHITE', hex: '#dedde2' }); // id 4
  await addStock({ ShoeID: 4, ColourID: 4, size: 8, stock: 4 }); // id 4

  await addImage(path.resolve(__dirname, '../testData/Predator_Mutator_20.1_Firm_Ground_Boots.jpg'), 'Predator_Mutator_20.1_Firm_Ground_Boots'); // id 7
  await addShoe({
    name: 'MUTATOR 20.1 FIRM GROUND BOOTS',
    description: 'Your confidence consumes them. Your vision leaves them with nowhere to hide.',
    price: 280,
    releaseDate: Date.now() - 250000,
    BrandID: 2,
    StyleID: 4,
    SectionID: 3,
    CollectionID: 4,
    CoverImage: 7,
  }); // id 5
  await addColour({ ShoeID: '5', ImageIDs: ['7'], colour: 'GOLD METALLIC', hex: '#ae9869' }); // id 5
  await addStock({ ShoeID: 5, ColourID: 5, size: 12, stock: 3 }); // id 5

  await addImage(path.resolve(__dirname, '../testData/Dame_7.jpg'), 'Dame_7'); // id 8
  await addShoe({
    name: '7',
    description: 'No one in the game today sees the court quite like Damian Lillard.',
    price: 200,
    releaseDate: Date.now() + 200000,
    BrandID: 2,
    StyleID: 3,
    SectionID: 3,
    CollectionID: 5,
    CoverImage: 8,
  }); // id 6
  await addColour({ ShoeID: '6', ImageIDs: ['8'], colour: 'GLORY PURPLE', hex: '#673a68' }); // id 6
  await addStock({ ShoeID: 6, ColourID: 6, size: 9, stock: 6 }); // id 5
};

export default addTestData;
