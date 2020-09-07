CREATE TABLE "ColourImage" (
  "ColourID" INTEGER NOT NULL,
  "ImageID" INTEGER NOT NULL,
  PRIMARY KEY("ColourID", "ImageID"),
  FOREIGN KEY("ImageID") REFERENCES "Image"("ID"),
  FOREIGN KEY("ColourID") REFERENCES "Colour"("ID")
);