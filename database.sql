CREATE TABLE "items" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50),
    "amount_held" INTEGER DEFAULT 0,
	"unlocked" BOOLEAN DEFAULT FALSE
);

