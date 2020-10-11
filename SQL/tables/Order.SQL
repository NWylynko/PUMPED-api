CREATE TABLE "Order" (
  "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "CustomerID" INTEGER NOT NULL,
  "dateOfPurchase" INTEGER,
  "paid" INTEGER NOT NULL CHECK(
		"stars" >= 0
		AND "stars" <= 1
	),
  "deliveryAddress" TEXT,
  "activeCart" INTEGER NOT NULL CHECK(
		"stars" >= 0
		AND "stars" <= 1
	),
  FOREIGN KEY("CustomerID") REFERENCES "Customer"("ID")
);