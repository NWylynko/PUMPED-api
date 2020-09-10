CREATE TABLE "Cart" (
  "CustomerID" INTEGER NOT NULL,
  "ShoeID" INTEGER NOT NULL,
  "StockID" INTEGER NOT NULL,
  "quantity" INTEGER NOT NULL,
  PRIMARY KEY("CustomerID", "ShoeID", "StockID"),
  FOREIGN KEY("StockID") REFERENCES "Stock"("ID"),
  FOREIGN KEY("CustomerID") REFERENCES "Customer"("ID"),
  FOREIGN KEY("ShoeID") REFERENCES "Shoe"("ID")
);