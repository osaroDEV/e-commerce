import React from 'react';
import { Grid } from '@material-ui/core';
import Product from '../Product/Product';
import useStyles from './styles'

const products = [
  {
    id: 1,
    name: 'Phone',
    description: 'Calling Device.',
    price: '$5',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u8zPGcP4gHXRt_DgAvxVfEFlMWPryBXZPA&usqp=CAU',
  },
  {
    id: 2,
    name: 'Camera',
    description: 'Shot Device.',
    price: '$10',
    image: 'https://www.mobiask.com/wp-content/uploads/2018/09/Camara2.jpeg',
  },
];

const Products = () => {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justify='center' spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
