CREATE TABLE "Order" (
  "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "CustomerID" INTEGER NOT NULL,
  "dateOfPurchase" INTEGER,
  "paid" INTEGER NOT NULL CHECK(
		"paid" >= 0
		AND "paid" <= 1
	),
  "deliveryAddress" TEXT,
  "activeCart" INTEGER NOT NULL CHECK(
		"activeCart" >= 0
		AND "activeCart" <= 1
	),
  FOREIGN KEY("CustomerID") REFERENCES "Customer"("ID")
);