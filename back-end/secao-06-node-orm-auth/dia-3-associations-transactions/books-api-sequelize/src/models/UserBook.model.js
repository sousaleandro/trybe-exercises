module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define(
    'UserBook',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'users_books',
    },
  );

  UserBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'users',
      foreignKey: 'bookId', // se refere ao id de Book na tabela de `users_books`
      through: UserBook,
      otherKey: 'userId', // se refere a outra chave de `users_books`
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      foreignKey: 'userId', // se refere ao id de User na tabela de `users_books`
      through: UserBook,
      otherKey: 'bookId',
    });
  };

  return UserBook;
};