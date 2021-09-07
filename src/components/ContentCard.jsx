import React from "react";

const ContentCardComponent = (props) => {
  return (
    <Card className={classes.card} key={menuItemCategory.menu_item.id}>
      <CardActionArea style={{ height: "100%" }}>
        {
          <CardMedia
            image={
              menuItemCategory.menu_item.picture
                ? `https://lovebaked-content.sfo3.cdn.digitaloceanspaces.com/products/${menuItemCategory.menu_item.picture}`
                : LoveBakedLogo
            }
            style={{
              height: "300px",
              width: "280px",
            }}
            title={menuItemCategory.menu_item.name}
          />
        }
        <CardContent style={{ height: "100%" }}>
          <Typography gutterBottom variant="h5" component="h2">
            {menuItemCategory.menu_item.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            {menuItemCategory.menu_item.retail_price} - Quantity:{" "}
            {menuItemCategory.menu_item.quantity}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {menuItemCategory.menu_item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const useStyles = makeStyles({
    card: {
        margin: '10px',
        maxWidth: '300px',
    },
    grid: {
        display: 'grid',
        gridGap: '10px',
        justifyItems: 'center',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gridAutoFlow: 'dense',
        transition: 'all 1s',
    },
    accordion: {
        backgroundColor: '#fdd7d3',
    },
})

export const ContentCard = withStyles(styles)(ContnentCardComponent);
