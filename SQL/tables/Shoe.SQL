
-- needs section, style, collection, cover image

CREATE TABLE "Shoe" (
  "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL, -- markdown
  "price" NUMERIC NOT NULL,
  "BrandID" INTEGER,
  "releaseDate" INTEGER NOT NULL,
  FOREIGN KEY("BrandID") REFERENCES "Brand"("ID")
);