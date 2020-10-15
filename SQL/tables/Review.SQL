CREATE TABLE "Review" (
	"ShoeID" INTEGER NOT NULL,
	"CustomerID" INTEGER NOT NULL,
	"stars" INTEGER NOT NULL CHECK(
		"stars" >= 0
		AND "stars" <= 5
	),
	"message" TEXT,
	"timestamp" INTEGER,
	PRIMARY KEY("ShoeID", "CustomerID"),
	FOREIGN KEY("CustomerID") REFERENCES "Customer"("ID"),
	FOREIGN KEY("ShoeID") REFERENCES "Shoe"("ID")
);