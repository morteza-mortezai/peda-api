module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '16862c01536f7b5314320b6a9757d374'),
  },
});
