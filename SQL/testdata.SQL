-- Brands
INSERT INTO "Brand"("name", "website", "icon")
VALUES
  ('nike', 'nike.com', NULL);
INSERT INTO "Brand"("name", "website", "icon")
VALUES
  ('adias', 'adias.com', NULL);
-- Collections
INSERT INTO "Collection"("name")
VALUES
  ('air max');
INSERT INTO "Collection"("name")
VALUES
  ('hypes');
-- Sections
INSERT INTO "Section"("name")
VALUES
  ('mens');
INSERT INTO "Section"("name")
VALUES
  ('womens');
-- Styles
INSERT INTO "Style"("name")
VALUES
  ('runners');
INSERT INTO "Style"("name")
VALUES
  ('basketball');
-- Images
INSERT INTO "Image"(
    "name"
  )
VALUES
  (
    'Airss covers'
  );
INSERT INTO "Image"(
    "name"
  )
VALUES
  (
    'Jumpers covers'
  );
INSERT INTO "Image"(
    "name"
  )
VALUES
  (
    'Kicks covers'
  );
INSERT INTO "Image"(
    "name"
  )
VALUES
  (
    'airss red'
  );
INSERT INTO "Image"(
    "name"
  )
VALUES
  (
    'airss blue'
  );
INSERT INTO "Image"(
    "name"
  )
VALUES
  (
    'jumpers green'
  );
-- Shoes
INSERT INTO "Shoe" (
    "name",
    "description",
    "price",
    "releaseDate",
    "BrandID",
    "StyleID",
    "SectionID",
    "CollectionID",
    "CoverImage"
  )
VALUES
  ('airss', 'run', 40, 02938457, 1, 2, 1, 2, 1);
INSERT INTO "Shoe" (
    "name",
    "description",
    "price",
    "releaseDate",
    "BrandID",
    "StyleID",
    "SectionID",
    "CollectionID",
    "CoverImage"
  )
VALUES
  ('jumpers', 'dive', 80, 2098475298, 2, 2, 1, 1, 2);
INSERT INTO "Shoe" (
    "name",
    "description",
    "price",
    "releaseDate",
    "BrandID",
    "StyleID",
    "SectionID",
    "CollectionID",
    "CoverImage"
  )
VALUES
  (
    'kicks',
    'sprint',
    120,
    2098475234,
    2,
    1,
    2,
    1,
    3
  );
-- Colours
INSERT INTO "Colour" ("ShoeID", "colour", "hex")
VALUES
  (1, 'red', 'ff0000');
INSERT INTO "Colour" ("ShoeID", "colour", "hex")
VALUES
  (1, 'blue', '0000ff');
INSERT INTO "Colour" ("ShoeID", "colour", "hex")
VALUES
  (2, 'green', '00ff00');
-- Stock
INSERT INTO "Stock" ("ShoeID", "ColourID", "size", "stock")
VALUES
  (1, 1, 11, 3);
INSERT INTO "Stock" ("ShoeID", "ColourID", "size", "stock")
VALUES
  (1, 2, 8, 2);
INSERT INTO "Stock" ("ShoeID", "ColourID", "size", "stock")
VALUES
  (2, 3, 9, 4);
-- ColourImage
INSERT INTO "ColourImage" ("ColourID", "ImageID")
VALUES
  (1, 4);
INSERT INTO "ColourImage" ("ColourID", "ImageID")
VALUES
  (2, 5);
INSERT INTO "ColourImage" ("ColourID", "ImageID")
VALUES
  (3, 6);
-- Customers
INSERT INTO "Customer"("firstName", "lastName")
VALUES
  ('bobby', 'boo');
INSERT INTO "Customer"("firstName", "lastName")
VALUES
  ('pippy', 'nippy');
INSERT INTO "Customer"("firstName", "lastName")
VALUES
  ('whip', 'nah');
-- Orders
INSERT INTO "Order" (
    "CustomerID",
    "dateOfPurchase",
    "paid",
	"activeCart",
    "deliveryAddress"
  )
VALUES
  (1, 24563456, 1,0, 'the moon');
INSERT INTO "Order" (
    "CustomerID",
    "paid",
	"activeCart"
  )
VALUES
  (1, 0, 1);
INSERT INTO "Order" (
    "CustomerID",
    "paid",
	"activeCart"
  )
VALUES
  (2, 0, 1);
-- OrderItem
INSERT INTO "OrderItem" (
    "OrderID",
    "ShoeID",
    "StockID",
    "quantity",
    "price"
  )
VALUES
  (1, 1, 1, 1, 70);
INSERT INTO "OrderItem" (
    "OrderID",
    "ShoeID",
    "StockID",
    "quantity",
    "price"
  )
VALUES
  (1, 2, 3, 1, 50);
INSERT INTO "OrderItem" (
    "OrderID",
    "ShoeID",
    "StockID",
    "quantity"
  )
VALUES
  (2, 1, 2, 1);
INSERT INTO "OrderItem" (
    "OrderID",
    "ShoeID",
    "StockID",
    "quantity"
  )
VALUES
  (3, 2, 3, 1);
-- Review
INSERT INTO "Review" (
    "ShoeID",
    "CustomerID",
    "stars",
    "message",
    "timestamp"
  )
VALUES
  (1, 1, 3, 'good', 35687);
INSERT INTO "Review" (
    "ShoeID",
    "CustomerID",
    "stars",
    "message",
    "timestamp"
  )
VALUES
  (1, 2, 4, 'great!', 20938475);
INSERT INTO "Review" (
    "ShoeID",
    "CustomerID",
    "stars",
    "message",
    "timestamp"
  )
VALUES
  (2, 1, 2, 'terrable!!', 2984577673);
-- recalc stars
UPDATE Shoe
SET
  Stars = (
    SELECT
      IFNULL(avg(Review.stars), 0)
    FROM Review
    WHERE
      ShoeID = '1'
  )
WHERE
  Shoe.ID = '1';
UPDATE Shoe
SET
  Stars = (
    SELECT
      IFNULL(avg(Review.stars), 0)
    FROM Review
    WHERE
      ShoeID = '2'
  )
WHERE
  Shoe.ID = '2';
-- Tags
INSERT INTO "Tag"("tag")
VALUES
  ('fast');
INSERT INTO "Tag"("tag")
VALUES
  ('speed');
INSERT INTO "Tag"("tag")
VALUES
  ('hightops');
-- ShoeTags
INSERT INTO "ShoeTag" ("ShoeID", "TagID")
VALUES
  (1, 1);
INSERT INTO "ShoeTag" ("ShoeID", "TagID")
VALUES
  (1, 2);
INSERT INTO "ShoeTag" ("ShoeID", "TagID")
VALUES
  (2, 3);
-- WishList
INSERT INTO "WishList" ("CustomerID", "ShoeID")
VALUES
  (1, 1);
INSERT INTO "WishList" ("CustomerID", "ShoeID")
VALUES
  (1, 2);
INSERT INTO "WishList" ("CustomerID", "ShoeID")
VALUES
  (2, 1);