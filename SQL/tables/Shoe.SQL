CREATE TABLE "Shoe" (
  "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "price" INTEGER NOT NULL,
  "releaseDate" INTEGER NOT NULL,
  "BrandID" INTEGER NOT NULL,
  "StyleID" INTEGER NOT NULL,
  "SectionID" INTEGER NOT NULL,
  "CollectionID" INTEGER,
  "CoverImage" INTEGER,
  FOREIGN KEY("BrandID") REFERENCES "Brand"("ID"),
  FOREIGN KEY("StyleID") REFERENCES "Style"("ID"),
  FOREIGN KEY("SectionID") REFERENCES "Section"("ID"),
  FOREIGN KEY("CollectionID") REFERENCES "Collection"("ID"),
  FOREIGN KEY("CoverImage") REFERENCES "Image"("ID")
);