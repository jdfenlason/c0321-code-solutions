select "a"."line1",
       "a"."district",
       "cities"."name" as "city",
       "countries"."name" as "country"
  from "addresses" as "a"
  join "cities" using ("cityId")
  join "countries" using ("countryId");
