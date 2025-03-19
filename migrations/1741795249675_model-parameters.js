exports.up = (pgm) => {
  pgm.createTable('model_parameters', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    dataset_id: {
      type: 'VARCHAR(50)',
      references: '"datasets"',
      onDelete: 'CASCADE',
    },
    knn_neighbors: {
      type: 'INTEGER',
      notNull: true,
      default: 5,
    },
    train_test_split: {
      type: 'FLOAT',
      notNull: true,
      default: 0.8,
    },
    set_at: {
      type: 'TIMESTAMP',
      notNull: true,
      default: pgm.func('CURRENT_TIMESTAMP'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('model_parameters');
};
