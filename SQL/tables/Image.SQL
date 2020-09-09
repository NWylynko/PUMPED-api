CREATE TABLE "Image" (
  "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "fileType" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "height" INTEGER,
  "width" INTEGER,
  "high" INTEGER,
  "medium" INTEGER,
  "low" INTEGER,
  "tiny" INTEGER
);