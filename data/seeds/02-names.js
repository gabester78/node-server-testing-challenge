exports.seed = function (knex) {
  const names = [
    { name: "Larry" },
    { name: "Curly" },
    { name: "Moe" },
    { name: "Shemp" },
  ];

  return knex("names").insert(names);
};
