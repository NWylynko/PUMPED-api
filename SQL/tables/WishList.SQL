CREATE TABLE "WishList" (
  "CustomerID" INTEGER NOT NULL,
  "ShoeID" INTEGER NOT NULL,
  PRIMARY KEY("CustomerID", "ShoeID"),
  FOREIGN KEY("CustomerID") REFERENCES "Customer"("ID"),
  FOREIGN KEY("ShoeID") REFERENCES "Shoe"("ID")
);