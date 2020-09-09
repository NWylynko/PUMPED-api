-- Brands
INSERT INTO "main"."Brand"("name", "website", "icon")
VALUES
  ('nike', 'nike.com', NULL);
INSERT INTO "main"."Brand"("name", "website", "icon")
VALUES
  ('adias', 'adias.com', NULL);
-- Collections
INSERT INTO "main"."Collection"("name")
VALUES
  ('air max');
INSERT INTO "main"."Collection"("name")
VALUES
  ('hypes');
-- Sections
INSERT INTO "main"."Section"("name")
VALUES
  ('mens');
INSERT INTO "main"."Section"("name")
VALUES
  ('womens');
-- Styles
INSERT INTO "main"."Style"("name")
VALUES
  ('runners');
INSERT INTO "main"."Style"("name")
VALUES
  ('basketball');
-- Images
INSERT INTO "main"."Image"(
    "name",
    "fileType",
    "height",
    "width",
    "high",
    "medium",
    "low",
    "tiny"
  )
VALUES
  (
    'Airss covers',
    'image/png',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO "main"."Image"(
    "name",
    "fileType",
    "height",
    "width",
    "high",
    "medium",
    "low",
    "tiny"
  )
VALUES
  (
    'Jumpers covers',
    'image/png',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO "main"."Image"(
    "name",
    "fileType",
    "height",
    "width",
    "high",
    "medium",
    "low",
    "tiny"
  )
VALUES
  (
    'Kicks covers',
    'image/png',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO "main"."Image"(
    "name",
    "fileType",
    "height",
    "width",
    "high",
    "medium",
    "low",
    "tiny"
  )
VALUES
  (
    'airss red',
    'image/png',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO "main"."Image"(
    "name",
    "fileType",
    "height",
    "width",
    "high",
    "medium",
    "low",
    "tiny"
  )
VALUES
  (
    'airss blue',
    'image/png',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO "main"."Image"(
    "name",
    "fileType",
    "height",
    "width",
    "high",
    "medium",
    "low",
    "tiny"
  )
VALUES
  (
    'jumpers green',
    'image/png',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
-- Shoes
INSERT INTO "main"."Shoe" (
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
INSERT INTO "main"."Shoe" (
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
INSERT INTO "main"."Shoe" (
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
INSERT INTO "main"."Colour" ("ShoeID", "colour", "hex")
VALUES
  (1, 'red', 'ff0000');
INSERT INTO "main"."Colour" ("ShoeID", "colour", "hex")
VALUES
  (1, 'blue', '0000ff');
INSERT INTO "main"."Colour" ("ShoeID", "colour", "hex")
VALUES
  (2, 'green', '00ff00');
-- Stock
INSERT INTO "main"."Stock" ("ShoeID", "ColourID", "size", "stock")
VALUES
  (1, 1, 11, 3);
INSERT INTO "main"."Stock" ("ShoeID", "ColourID", "size", "stock")
VALUES
  (1, 2, 8, 2);
INSERT INTO "main"."Stock" ("ShoeID", "ColourID", "size", "stock")
VALUES
  (2, 3, 9, 4);
-- ColourImage
INSERT INTO "main"."ColourImage" ("ColourID", "ImageID")
VALUES
  (1, 4);
INSERT INTO "main"."ColourImage" ("ColourID", "ImageID")
VALUES
  (2, 5);
INSERT INTO "main"."ColourImage" ("ColourID", "ImageID")
VALUES
  (3, 6);
-- Customers
INSERT INTO "main"."Customer"("firstName", "lastName")
VALUES
  ('bobby', 'boo');
INSERT INTO "main"."Customer"("firstName", "lastName")
VALUES
  ('pippy', 'nippy');
INSERT INTO "main"."Customer"("firstName", "lastName")
VALUES
  ('whip', 'nah');
-- Orders
INSERT INTO "main"."Order" (
    "CustomerID",
    "dateOfPurchase",
    "paid",
    "deliveryAddress"
  )
VALUES
  (1, 24563456, 'true', 'the moon');
INSERT INTO "main"."Order" (
    "CustomerID",
    "dateOfPurchase",
    "paid",
    "deliveryAddress"
  )
VALUES
  (1, 2049867456, 'true', 'in the stars');
INSERT INTO "main"."Order" (
    "CustomerID",
    "dateOfPurchase",
    "paid",
    "deliveryAddress"
  )
VALUES
  (2, 2456245634, 'false', 'mars');
-- OrderItem
INSERT INTO "main"."OrderItem" (
    "OrderID",
    "ShoeID",
    "StockID",
    "ColourID",
    "quantity",
    "price"
  )
VALUES
  (1, 1, 1, 1, 1, 70);
INSERT INTO "main"."OrderItem" (
    "OrderID",
    "ShoeID",
    "StockID",
    "ColourID",
    "quantity",
    "price"
  )
VALUES
  (1, 2, 3, 1, 1, 70);
INSERT INTO "main"."OrderItem" (
    "OrderID",
    "ShoeID",
    "StockID",
    "ColourID",
    "quantity",
    "price"
  )
VALUES
  (2, 1, 2, 1, 1, 70);
INSERT INTO "main"."OrderItem" (
    "OrderID",
    "ShoeID",
    "StockID",
    "ColourID",
    "quantity",
    "price"
  )
VALUES
  (3, 2, 3, 1, 1, 70);
-- Review
INSERT INTO "main"."Review" (
    "ShoeID",
    "CustomerID",
    "stars",
    "message",
    "timestamp"
  )
VALUES
  (1, 1, 3, 'good', 35687);
INSERT INTO "main"."Review" (
    "ShoeID",
    "CustomerID",
    "stars",
    "message",
    "timestamp"
  )
VALUES
  (1, 2, 4, 'great!', 20938475);
INSERT INTO "main"."Review" (
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
INSERT INTO "main"."Tag"("tag")
VALUES
  ('fast');
INSERT INTO "main"."Tag"("tag")
VALUES
  ('speed');
INSERT INTO "main"."Tag"("tag")
VALUES
  ('hightops');
-- ShoeTags
INSERT INTO "main"."ShoeTag" ("ShoeID", "TagID")
VALUES
  (1, 1);
INSERT INTO "main"."ShoeTag" ("ShoeID", "TagID")
VALUES
  (1, 2);
INSERT INTO "main"."ShoeTag" ("ShoeID", "TagID")
VALUES
  (2, 3);
-- WishList
INSERT INTO "main"."WishList" ("CustomerID", "ShoeID", "StockID", "ColourID")
VALUES
  (1, 1, 2, 1);
INSERT INTO "main"."WishList" ("CustomerID", "ShoeID", "StockID", "ColourID")
VALUES
  (1, 2, 1, 2);
INSERT INTO "main"."WishList" ("CustomerID", "ShoeID", "StockID", "ColourID")
VALUES
  (2, 1, 1, 1);

-- Carts
INSERT INTO "main"."Cart"
("CustomerID", "ShoeID", "StockID", "ColourID", "quantity")
VALUES (1, 1, 2, 1, 2);
INSERT INTO "main"."Cart"
("CustomerID", "ShoeID", "StockID", "ColourID", "quantity")
VALUES (1, 2, 1, 3, 4);
INSERT INTO "main"."Cart"
("CustomerID", "ShoeID", "StockID", "ColourID", "quantity")
VALUES (2, 1, 1, 2, 3);