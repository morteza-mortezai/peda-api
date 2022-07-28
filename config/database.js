module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'michael.iran.liara.ir'),
      port: env.int('DATABASE_PORT', 33676),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'O7CfsI3bkDJl9SMf5bxdUYk3'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
