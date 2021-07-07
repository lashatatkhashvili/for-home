import React from 'react';
import Grid from '@material-ui/core/Grid';
// import CardMedia from '@material-ui/core/CardMedia';
import MaterialTypography from '../materialTypography/MaterialTypography';
import Box from '@material-ui/core/Box';
import useStyles from './ProductBox.style';
import { withTranslation } from 'react-i18next';
// import MaterialButton from '../materialButton/MaterialButton';
import Drop from '../drop/Drop';

const ProductBox = props => {
  const { t, product, onSelect, isSelect, onMore } = props;
  const classes = useStyles();

  // const productDescription = product.description.replace(/<a/gi, '<a target="_blank"');
  // console.log('product', product);

  return (
    <Grid
      container
      item
      xs={4}
      justify="center"
      key={product.id}
      onClick={onSelect}
      className={classes.productBoxWrapper}
    >
      <Box className={`${classes.productBox} ${isSelect ? 'selected' : ''}`}>
        <img src={product.image} alt={product.image} className={classes.productBoxImage} />

        <MaterialTypography className={classes.productName}>{product.name}</MaterialTypography>

        <Box className={classes.productNameUnderline}></Box>

        <Grid container justify="space-between" alignItems="flex-end">
          <Grid item>
            <MaterialTypography className={classes.productBoxSeeMore} onClick={onMore}>
              {t('See More')}
            </MaterialTypography>
          </Grid>

          <Grid item>
            <Drop label={`₪ ${product.price}`} />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );

  // return (
  //   <Grid
  //     container
  //     item
  //     xs={4}
  //     justify="center"
  //     key={product.id}
  //     onClick={onSelect}
  //     className={classes.productBoxWrapper}
  //   >
  //     <CardMedia image={product.image} className={`${classes.cardMedia} ${isSelect ? 'selected' : ''}`}>
  //       <Box className={classes.cardMediaOverlay}>
  //         <Grid container justify="center" alignItems="center" className={classes.cardMediaContent}>
  //           <Box className="cardMediaCurrentContent">
  //             <MaterialTypography size="20px" weight={500} className={classes.productName}>
  //               {product.name}
  //             </MaterialTypography>
  //           </Box>
  //
  //           <Box className="cardMediaHoverContent">
  //             <MaterialTypography className={classes.productGift}></MaterialTypography>
  //
  //             <div
  //               dangerouslySetInnerHTML={{ __html: productDescription }}
  //               className={classes.productDescription}
  //             ></div>
  //
  //             {/*<MaterialTypography className={classes.productDescription}>{product.description}</MaterialTypography>*/}
  //
  //             <Grid container justify="space-between" alignItems="center" wrap="nowrap">
  //               <MaterialButton className={classes.moreInfoButton} onClick={onMore}>
  //                 {t('More Info')}
  //               </MaterialButton>
  //
  //               <MaterialTypography className={classes.productPrice}>
  //                 {t('Price ₪ {PRICE}').replace('{PRICE}', product.price)}
  //               </MaterialTypography>
  //             </Grid>
  //           </Box>
  //         </Grid>
  //       </Box>
  //     </CardMedia>
  //   </Grid>
  // );
};

export default withTranslation('translations')(ProductBox);
