CREATE TABLE "Review" (
  "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "CustomerID" INTEGER NOT NULL,
  "stars" INTEGER NOT NULL CHECK(
    stars >= 0
    AND stars <= 5
  ),
  "message" TEXT,
  "timestamp" timestamp,
  FOREIGN KEY("CustomerID") REFERENCES "Customer"("ID")
);