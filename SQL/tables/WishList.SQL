CREATE TABLE "WishList" (
  "CustomerID" INTEGER NOT NULL,
  "ShoeID" INTEGER NOT NULL,
  "StockID" INTEGER NOT NULL,
  "ColourID" INTEGER NOT NULL,
  PRIMARY KEY("CustomerID", "ShoeID", "StockID", "ColourID"),
  FOREIGN KEY("StockID") REFERENCES "Stock"("ID"),
  FOREIGN KEY("CustomerID") REFERENCES "Customer"("ID"),
  FOREIGN KEY("ShoeID") REFERENCES "Shoe"("ID"),
  FOREIGN KEY("ColourID") REFERENCES "Colour"("ID")
);